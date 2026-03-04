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
  module = 7,
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

    // --- 歯車諸元 ---
    const pressureAngleDeg = 20;
    const alpha = (pressureAngleDeg * Math.PI) / 180; // 圧力角

    // --- インボリュート関数 ---
    const involute = (rBase: number, angle: number) => {
      return {
        x: rBase * (Math.cos(angle) + angle * Math.sin(angle)),
        y: rBase * (Math.sin(angle) - angle * Math.cos(angle)),
      };
    };

    // --- 歯車のパス生成（輪郭のみ） ---
    const drawGearProfile = (
      ctx: CanvasRenderingContext2D,
      z: number,
      rPitch: number,
      rBase: number,
      rAdd: number,
      rDed: number,
      isSketch: boolean,
      backlash: number = 0.3 // バックラッシュ量（円周方向の歯厚減少量）
    ) => {
      ctx.beginPath();
      for (let i = 0; i < z; i++) {
        const toothAngle = (2 * Math.PI) / z;
        const thetaOffset = i * toothAngle;

        const invAlpha = Math.tan(alpha) - alpha;
        // 基本の歯厚（ピッチ円上で半ピッチ）からバックラッシュ分（半分ずつ）を減らす
        const backlashAngle = backlash / rPitch;
        const toothHalfAngle = (Math.PI / (2 * z)) + invAlpha - (backlashAngle / 2);

        const steps = 15;
        const maxInvAngle = Math.sqrt(Math.pow(rAdd / rBase, 2) - 1);

        // 左歯面
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * maxInvAngle;
          const p = involute(rBase, theta);

          const rot = thetaOffset - toothHalfAngle;
          const px = p.x * Math.cos(rot) - p.y * Math.sin(rot);
          const py = p.x * Math.sin(rot) + p.y * Math.cos(rot);

          if (i === 0 && s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        // 右歯面
        for (let s = steps; s >= 0; s--) {
          const theta = (s / steps) * maxInvAngle;
          const p = involute(rBase, theta);

          const rot = thetaOffset + toothHalfAngle;
          const px = p.x * Math.cos(rot) - (-p.y) * Math.sin(rot);
          const py = p.x * Math.sin(rot) + (-p.y) * Math.cos(rot);

          ctx.lineTo(px, py);
        }

        // 歯底円弧
        ctx.arc(0, 0, rDed, thetaOffset + toothHalfAngle, thetaOffset + toothAngle - toothHalfAngle);
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
      const rPitch = (z * module) / 2;
      const rBase = rPitch * Math.cos(alpha);
      const isRed = type === "shaping" && colorType === "red";
      const rAdd = rPitch + (isRed ? 1.25 : 1.0) * module;
      const rDed = rPitch - (isRed ? 1.0 : 1.25) * module;

      rCtx.save();
      rCtx.translate(x, y);
      rCtx.rotate(rot);

      // モジュールに比例したバックラッシュ量を計算
      const backlashVal = backlash * module;
      drawGearProfile(rCtx, z, rPitch, rBase, rAdd, rDed, theme === "sketch", backlashVal);

      if (theme === "sketch") {
        // 洗練されたブループリント風
        if (colorType === "blue") {
          rCtx.fillStyle = "rgba(37, 99, 235, 0.15)";
          rCtx.strokeStyle = "rgba(30, 78, 146, 0.8)";
        } else {
          rCtx.fillStyle = "rgba(100, 116, 139, 0.05)";
          rCtx.strokeStyle = "rgba(13, 38, 91, 0.5)";
        }
        rCtx.fill("evenodd");
        rCtx.lineWidth = 1.2;
        rCtx.stroke();

        // 基準円（ピッチ円など）
        rCtx.beginPath();
        rCtx.setLineDash([4, 4]); // 点線
        rCtx.arc(0, 0, rPitch, 0, Math.PI * 2);
        rCtx.lineWidth = 0.8;
        rCtx.strokeStyle = "rgba(30, 78, 146, 0.3)";
        rCtx.stroke();

        rCtx.beginPath();
        rCtx.setLineDash([1, 3]); // 細かい点線
        rCtx.arc(0, 0, rBase, 0, Math.PI * 2);
        rCtx.lineWidth = 0.5;
        rCtx.strokeStyle = "rgba(79, 115, 167, 0.2)";
        rCtx.stroke();

      } else {
        // 従来のワイヤーフレーム
        if (colorType === "blue") {
          rCtx.fillStyle = "rgba(37, 99, 235, 0.1)";
          rCtx.strokeStyle = "#2563eb";
        } else if (colorType === "red") {
          rCtx.fillStyle = "rgba(220, 38, 38, 0.1)";
          rCtx.strokeStyle = "#dc2626";
        } else {
          rCtx.fillStyle = "rgba(100, 116, 139, 0.1)";
          rCtx.strokeStyle = "#64748b";
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
      let trainGears: any[] = [];

      if (type === "train") {
        // === 完全な噛み合わせ回転角を計算する数式関数 ===
        const getMeshRot = (rotA: number, zA: number, zB: number, phi: number) => {
          // phi: GearAから見たGearBの角度
          // AとBのピッチ円上の弧長を合わせ、かつ歯と谷の位相(Math.PI + Math.PI/zB)をオフセットに加える
          return (phi * (zA + zB) - rotA * zA - Math.PI * (zB + 1)) / zB;
        };

        const m = module;
        // 5つの歯車を黄金比を意識した配置で、美しく連動させる
        // G1 (Drive, Center) 
        // G2, G3: G1から直接駆動
        // G4: G2から駆動
        // G5: G3から駆動
        const z1 = 28, z2 = 18, z3 = 22, z4 = 14, z5 = 16;
        const r1 = (z1 * m) / 2, r2 = (z2 * m) / 2, r3 = (z3 * m) / 2, r4 = (z4 * m) / 2, r5 = (z5 * m) / 2;

        const rot1 = t;
        const x1 = 0, y1 = 0;

        // G2 (右上) - 黄金角付近
        const phi12 = -Math.PI * 0.2;
        const rot2 = getMeshRot(rot1, z1, z2, phi12);
        const x2 = x1 + (r1 + r2) * Math.cos(phi12);
        const y2 = y1 + (r1 + r2) * Math.sin(phi12);

        // G3 (左下)
        const phi13 = Math.PI * 0.9;
        const rot3 = getMeshRot(rot1, z1, z3, phi13);
        const x3 = x1 + (r1 + r3) * Math.cos(phi13);
        const y3 = y1 + (r1 + r3) * Math.sin(phi13);

        // G4 (G2の先)
        const phi24 = -Math.PI * 0.05;
        const rot4 = getMeshRot(rot2, z2, z4, phi24);
        const x4 = x2 + (r2 + r4) * Math.cos(phi24);
        const y4 = y2 + (r2 + r4) * Math.sin(phi24);

        // G5 (G3の先)
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
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        trainGears.forEach((g) => {
          const extent = g.r + module * 3.5;
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
        globalScale = size * 1.5 / 160;
        if (type === "shaping") cx = size / 2 - 42 * globalScale;
      }

      ctx.translate(cx, cy);
      ctx.scale(globalScale, globalScale);

      // --- レンダリング ---
      if (type === "train") {
        // 全てが完璧に噛み合った歯車の描画
        // 重なりを意識して配列に設定した順番 (中心から外側へ) に描画
        trainGears.forEach(g => {
          renderGear(ctx, g.z, g.x, g.y, g.rot, g.isDrive ? "blue" : "silver");
        });

      } else if (type === "single") {
        renderGear(ctx, 32, 0, 0, t, "silver");
        // 装飾的な外周の固定リングを描画
        if (theme === "sketch") {
          ctx.beginPath();
          ctx.setLineDash([]); // 実線
          ctx.arc(0, 0, (32 * module / 2) + module * 3, 0, Math.PI * 2);
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = "rgba(100, 116, 139, 0.15)";
          ctx.stroke();
        }
      }

      // 共通の装飾背景（方眼紙のようなグリッド）を薄く敷くか？
      // 今回は文字との干渉を避けるため不要とする。

      ctx.restore();
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size, speed, type, theme, showGuides, module, reverse]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
    />
  );
}