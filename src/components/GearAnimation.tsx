import { useEffect, useRef } from "react";

interface GearAnimationProps {
  className?: string;
  size?: number;
  speed?: number; // アニメーション速度 (ベース値を大幅に下げる)
  type?: "shaping" | "hobbing" | "train" | "single";
  theme?: "wireframe" | "sketch"; // metallicを廃止しsketchを追加
  showGuides?: boolean; // 補助線の表示
  module?: number; // モジュール（歯の大きさ）
  reverse?: boolean; // 回転方向の反転
  backlash?: number; // バックラッシュ量（痩せ具合）
}

export function GearAnimation({
  className = "",
  size = 300,
  speed = 1, // 呼び出し側のspeedをさらに1/10にする設計にする
  type = "train",
  theme = "sketch", // デフォルトをスケッチ風に
  showGuides = true,
  module: m = 7,
  reverse = false,
  backlash = 0.15, // デフォルトで少し痩せさせる (moduleの15%)
}: GearAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    // --- 歯車諸元 (JIS B 1701 / ISO 1328 準拠) ---
    const pressureAngleDeg = 20;
    const alpha = (pressureAngleDeg * Math.PI) / 180; // 圧力角

    // 歯元R (Root fillet radius) - JIS標準
    const filletRadius = 0.35 * m;
    // 歯先丸め半径 (Tip relief radius)
    const tipRadius = 0.2 * m;
    // 歯先逃げ量 (Tip relief reduction)
    const tipRelief = 0.05 * m;

    // --- インボリュート関数 ---
    // rBase: 基礎円半径, angle: 展開角
    // 返り値: 基礎円からのインボリュート曲線上の点
    const involute = (rBase: number, angle: number) => {
      return {
        x: rBase * (Math.cos(angle) + angle * Math.sin(angle)),
        y: rBase * (Math.sin(angle) - angle * Math.cos(angle)),
      };
    };

    // --- 点を回転させるヘルパー ---
    const rotatePoint = (
      px: number,
      py: number,
      angle: number
    ): [number, number] => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [px * cos - py * sin, px * sin + py * cos];
    };

    // --- 歯車のパス生成（歯元R・歯先丸め付き） ---
    const drawGearProfile = (
      ctx: CanvasRenderingContext2D,
      z: number,
      rPitch: number,
      rBase: number,
      rAdd: number,
      rDed: number,
      isSketch: boolean,
      backlashVal: number = 0.3
    ) => {
      ctx.beginPath();

      const toothAngle = (2 * Math.PI) / z;
      const invAlpha = Math.tan(alpha) - alpha;
      const backlashAngle = backlashVal / rPitch;
      const toothHalfAngle = Math.PI / (2 * z) + invAlpha - backlashAngle / 2;

      // 歯先丸め適用後の有効歯先円半径
      const rAddEffective = rAdd - tipRelief;

      const steps = 20;
      const maxInvAngle = Math.sqrt(
        Math.pow(rAddEffective / rBase, 2) - 1
      );

      // 歯元Rの始点でのインボリュート展開角を求める
      // フィレットが始まる半径 = rDed + filletRadius
      const rFilletStart = Math.max(rDed + filletRadius, rBase);
      const minInvAngle =
        rFilletStart > rBase
          ? Math.sqrt(Math.pow(rFilletStart / rBase, 2) - 1)
          : 0;

      for (let i = 0; i < z; i++) {
        const thetaOffset = i * toothAngle;

        // ========================================
        // 左歯面のインボリュート曲線 (歯底→歯先)
        // ========================================
        const leftPoints: [number, number][] = [];
        for (let s = 0; s <= steps; s++) {
          const theta = minInvAngle + (s / steps) * (maxInvAngle - minInvAngle);
          const p = involute(rBase, theta);
          const rot = thetaOffset - toothHalfAngle;
          leftPoints.push(rotatePoint(p.x, p.y, rot));
        }

        // ========================================
        // 右歯面のインボリュート曲線 (歯先→歯底)
        // ミラー: y座標を反転
        // ========================================
        const rightPoints: [number, number][] = [];
        for (let s = steps; s >= 0; s--) {
          const theta = minInvAngle + (s / steps) * (maxInvAngle - minInvAngle);
          const p = involute(rBase, theta);
          const rot = thetaOffset + toothHalfAngle;
          rightPoints.push(rotatePoint(p.x, -p.y, rot));
        }

        // ========================================
        // 歯先丸め (Tip Relief / Tip Rounding)
        // 左歯面頂点と右歯面頂点を小さな円弧で接続
        // ========================================
        const tipLeft = leftPoints[leftPoints.length - 1];
        const tipRight = rightPoints[0];

        // 歯先の中点（円弧の制御点）
        const tipMidX = (tipLeft[0] + tipRight[0]) / 2;
        const tipMidY = (tipLeft[1] + tipRight[1]) / 2;
        // 中点を歯先円方向に少し押し出す
        const tipMidDist = Math.sqrt(tipMidX * tipMidX + tipMidY * tipMidY);
        const tipControlX = (tipMidX / tipMidDist) * rAdd;
        const tipControlY = (tipMidY / tipMidDist) * rAdd;

        // ========================================
        // 歯元R (Root Fillet)
        // 前歯の右歯面底→歯底円弧→左歯面底にフィレットで接続
        // ========================================

        // 左歯面の最下点
        const leftBottom = leftPoints[0];
        // 左歯面底の角度（中心からの角度）
        const leftBottomAngle = Math.atan2(leftBottom[1], leftBottom[0]);

        if (i === 0) {
          // 最初の歯: 歯底円弧の開始位置から始める
          // 前の歯（最後の歯）の右歯面底からの接続は closePath で処理
          // 歯元Rの接線点から開始
          const filletStartAngle = leftBottomAngle - filletRadius / rDed;
          const fsx = rDed * Math.cos(filletStartAngle);
          const fsy = rDed * Math.sin(filletStartAngle);
          ctx.moveTo(fsx, fsy);

          // 左側フィレット: 歯底円→左歯面底
          ctx.quadraticCurveTo(
            rDed * Math.cos(leftBottomAngle),
            rDed * Math.sin(leftBottomAngle),
            leftBottom[0],
            leftBottom[1]
          );
        }

        // 左歯面インボリュート
        for (let s = 1; s < leftPoints.length; s++) {
          ctx.lineTo(leftPoints[s][0], leftPoints[s][1]);
        }

        // 歯先丸め: 二次ベジェ曲線で左歯先→右歯先を接続
        ctx.quadraticCurveTo(
          tipControlX,
          tipControlY,
          tipRight[0],
          tipRight[1]
        );

        // 右歯面インボリュート
        for (let s = 1; s < rightPoints.length; s++) {
          ctx.lineTo(rightPoints[s][0], rightPoints[s][1]);
        }

        // 右歯面底
        const rightBottom = rightPoints[rightPoints.length - 1];
        const rightBottomAngle = Math.atan2(rightBottom[1], rightBottom[0]);

        // 次の歯の情報
        const nextThetaOffset = ((i + 1) % z) * toothAngle;
        const nextLeftPoints: [number, number][] = [];
        {
          const theta0 = minInvAngle;
          const p = involute(rBase, theta0);
          const rot = nextThetaOffset - toothHalfAngle;
          nextLeftPoints.push(rotatePoint(p.x, p.y, rot));
        }
        const nextLeftBottom = nextLeftPoints[0];
        const nextLeftBottomAngle = Math.atan2(
          nextLeftBottom[1],
          nextLeftBottom[0]
        );

        // 右側フィレット: 右歯面底→歯底円の接線点
        const filletRightEnd = rightBottomAngle + filletRadius / rDed;
        ctx.quadraticCurveTo(
          rDed * Math.cos(rightBottomAngle),
          rDed * Math.sin(rightBottomAngle),
          rDed * Math.cos(filletRightEnd),
          rDed * Math.sin(filletRightEnd)
        );

        // 歯底円弧（フィレットの間）
        const filletNextLeftStart = nextLeftBottomAngle - filletRadius / rDed;
        ctx.arc(0, 0, rDed, filletRightEnd, filletNextLeftStart);

        // 次の歯の左側フィレット
        if (i < z - 1) {
          ctx.quadraticCurveTo(
            rDed * Math.cos(nextLeftBottomAngle),
            rDed * Math.sin(nextLeftBottomAngle),
            nextLeftBottom[0],
            nextLeftBottom[1]
          );
        }
      }
      ctx.closePath();

      // スケッチ/設計図テーマの場合は中心穴とリムを描く
      if (isSketch) {
        ctx.moveTo(rDed * 0.35, 0);
        ctx.arc(0, 0, rDed * 0.35, 0, Math.PI * 2, true);
        ctx.moveTo(rDed * 0.75, 0);
        ctx.arc(0, 0, rDed * 0.75, 0, Math.PI * 2, true);
        ctx.moveTo(rDed * 0.7, 0);
        ctx.arc(0, 0, rDed * 0.7, 0, Math.PI * 2, true);
      }
    };

    // --- 歯車のレンダリング ---
    const renderGear = (
      rCtx: CanvasRenderingContext2D,
      z: number,
      x: number,
      y: number,
      rot: number,
      colorType: "silver" | "brass" | "blue" | "red" | "green"
    ) => {
      const rPitch = (z * m) / 2;
      const rBase = rPitch * Math.cos(alpha);
      // JIS/ISO標準: addendum = 1.0m, dedendum = 1.25m（全歯車共通）
      const rAdd = rPitch + 1.0 * m;
      const rDed = rPitch - 1.25 * m;

      rCtx.save();
      rCtx.translate(x, y);
      rCtx.rotate(rot);

      // モジュールに比例したバックラッシュ量を計算
      const backlashVal = backlash * m;
      drawGearProfile(
        rCtx,
        z,
        rPitch,
        rBase,
        rAdd,
        rDed,
        theme === "sketch",
        backlashVal
      );

      if (theme === "sketch") {
        // ライトモード: モノクロの設計図透かし
        if (colorType === "blue") {
          rCtx.fillStyle = "rgba(0, 0, 0, 0.04)";
          rCtx.strokeStyle = "rgba(0, 0, 0, 0.15)";
        } else {
          rCtx.fillStyle = "rgba(0, 0, 0, 0.02)";
          rCtx.strokeStyle = "rgba(0, 0, 0, 0.08)";
        }
        rCtx.fill("evenodd");
        rCtx.lineWidth = 1.2;
        rCtx.stroke();

        // ピッチ円（基準円）
        rCtx.beginPath();
        rCtx.setLineDash([4, 4]);
        rCtx.arc(0, 0, rPitch, 0, Math.PI * 2);
        rCtx.lineWidth = 0.8;
        rCtx.strokeStyle = "rgba(0, 0, 0, 0.06)";
        rCtx.stroke();

        // 基礎円
        rCtx.beginPath();
        rCtx.setLineDash([1, 3]);
        rCtx.arc(0, 0, rBase, 0, Math.PI * 2);
        rCtx.lineWidth = 0.5;
        rCtx.strokeStyle = "rgba(0, 0, 0, 0.04)";
        rCtx.stroke();
      } else {
        // ワイヤーフレーム（ライトモード対応）
        if (colorType === "blue") {
          rCtx.fillStyle = "rgba(0, 0, 0, 0.03)";
          rCtx.strokeStyle = "rgba(0, 0, 0, 0.12)";
        } else if (colorType === "red") {
          rCtx.fillStyle = "rgba(0, 0, 0, 0.02)";
          rCtx.strokeStyle = "rgba(0, 0, 0, 0.10)";
        } else {
          rCtx.fillStyle = "rgba(0, 0, 0, 0.02)";
          rCtx.strokeStyle = "rgba(0, 0, 0, 0.08)";
        }
        rCtx.fill();
        rCtx.lineWidth = 1;
        rCtx.stroke();
      }
      rCtx.restore();
    };

    // --- メインレンダリングループ ---
    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // 速度を従来の 4倍 (0.005 -> 0.02) に引き上げ、躍動感を出す
      const baseSpeedMultiplier = 0.02;
      const timeDelta = baseSpeedMultiplier * speed * (reverse ? -1 : 1);
      timeRef.current += timeDelta;
      const t = timeRef.current;

      ctx.save();

      // サイズによるスケール調整
      let globalScale = 1;
      let cx = size / 2;
      let cy = size / 2;

      // --- ギアトレイン用の変数定義 ---
      interface TrainGear {
        z: number;
        x: number;
        y: number;
        rot: number;
        r: number;
        isDrive?: boolean;
      }
      let trainGears: TrainGear[] = [];

      if (type === "train") {
        // === 噛み合い回転角の計算 ===
        // getMeshRot: GearA の回転角から GearB の回転角を算出する
        // rotA: GearA の回転角, zA/zB: 歯数, phi: GearA中心→GearB中心の角度
        const getMeshRot = (
          rotA: number,
          zA: number,
          zB: number,
          phi: number
        ) => {
          return (
            (phi * (zA + zB) - rotA * zA - Math.PI * (zB + 1)) / zB
          );
        };

        // 5つの歯車を黄金比を意識した配置で、美しく連動させる
        // G1: 動力歯車 (Drive) - 中心、回転の起点
        // G2: 従動歯車 (Driven) - G1から直接駆動（右上）
        // G3: 従動歯車 (Driven) - G1から直接駆動（左下）
        // G4: 従動歯車 (Driven) - G2から駆動
        // G5: 従動歯車 (Driven) - G3から駆動
        const z1 = 28,
          z2 = 18,
          z3 = 22,
          z4 = 14,
          z5 = 16;
        const r1 = (z1 * m) / 2,
          r2 = (z2 * m) / 2,
          r3 = (z3 * m) / 2,
          r4 = (z4 * m) / 2,
          r5 = (z5 * m) / 2;

        // G1: 動力歯車 (Drive)
        const rot1 = t;
        const x1 = 0,
          y1 = 0;

        // G2: 従動歯車 (Driven) - 黄金角付近
        const phi12 = -Math.PI * 0.2;
        const rot2 = getMeshRot(rot1, z1, z2, phi12);
        const x2 = x1 + (r1 + r2) * Math.cos(phi12);
        const y2 = y1 + (r1 + r2) * Math.sin(phi12);

        // G3: 従動歯車 (Driven)
        const phi13 = Math.PI * 0.9;
        const rot3 = getMeshRot(rot1, z1, z3, phi13);
        const x3 = x1 + (r1 + r3) * Math.cos(phi13);
        const y3 = y1 + (r1 + r3) * Math.sin(phi13);

        // G4: 従動歯車 (Driven) - G2の先
        const phi24 = -Math.PI * 0.05;
        const rot4 = getMeshRot(rot2, z2, z4, phi24);
        const x4 = x2 + (r2 + r4) * Math.cos(phi24);
        const y4 = y2 + (r2 + r4) * Math.sin(phi24);

        // G5: 従動歯車 (Driven) - G3の先
        const phi35 = Math.PI * 1.2;
        const rot5 = getMeshRot(rot3, z3, z5, phi35);
        const x5 = x3 + (r3 + r5) * Math.cos(phi35);
        const y5 = y3 + (r3 + r5) * Math.sin(phi35);

        trainGears = [
          { z: z1, x: x1, y: y1, rot: rot1, r: r1, isDrive: true },
          { z: z2, x: x2, y: y2, rot: rot2, r: r2 },
          { z: z3, x: x3, y: y3, rot: rot3, r: r3 },
          { z: z4, x: x4, y: y4, rot: rot4, r: r4 },
          { z: z5, x: x5, y: y5, rot: rot5, r: r5 },
        ];

        // --- 動的バウンディングボックスの計算 ---
        let minX = Infinity,
          maxX = -Infinity,
          minY = Infinity,
          maxY = -Infinity;
        trainGears.forEach((g) => {
          const extent = g.r + m * 3.5;
          if (g.x - extent < minX) minX = g.x - extent;
          if (g.x + extent > maxX) maxX = g.x + extent;
          if (g.y - extent < minY) minY = g.y - extent;
          if (g.y + extent > maxY) maxY = g.y + extent;
        });

        const bbW = maxX - minX;
        const bbH = maxY - minY;

        const scaleX = (size * 0.9) / bbW;
        const scaleY = (size * 0.9) / bbH;
        globalScale = Math.min(scaleX, scaleY);

        const bbCX = (minX + maxX) / 2;
        const bbCY = (minY + maxY) / 2;
        cx = size / 2 - bbCX * globalScale;
        cy = size / 2 - bbCY * globalScale;
      } else if (type === "single") {
        globalScale = size / 120;
      } else {
        globalScale = (size * 1.5) / 160;
        if (type === "shaping") cx = size / 2 - 42 * globalScale;
      }

      ctx.translate(cx, cy);
      ctx.scale(globalScale, globalScale);

      // --- レンダリング ---
      if (type === "train") {
        // 全てが完璧に噛み合った歯車の描画
        // 重なりを意識して配列に設定した順番 (中心から外側へ) に描画
        trainGears.forEach((g) => {
          renderGear(
            ctx,
            g.z,
            g.x,
            g.y,
            g.rot,
            g.isDrive ? "blue" : "silver"
          );
        });
      } else if (type === "single") {
        renderGear(ctx, 32, 0, 0, t, "silver");
        // 装飾的な外周の固定リングを描画
        if (theme === "sketch") {
          ctx.beginPath();
          ctx.setLineDash([]);
          ctx.arc(0, 0, (32 * m) / 2 + m * 3, 0, Math.PI * 2);
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = "rgba(0, 0, 0, 0.04)";
          ctx.stroke();
        }
      }

      ctx.restore();
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size, speed, type, theme, showGuides, m, reverse, backlash]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
    />
  );
}
