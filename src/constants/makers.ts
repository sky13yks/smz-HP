export interface Maker {
  name: string;
  description?: string;
  products?: string[];
  url?: string;
  hasDetailPage?: boolean;
}

export interface MakerCategory {
  id: string;
  title: string;
  subtitle: string;
  makers: Maker[];
}

export const makerCategories: MakerCategory[] = [
  {
    id: "tools",
    title: "切削・研削工具メーカー",
    subtitle: "SERVICE 01 取扱メーカー",
    makers: [
      {
        name: "株式会社アヅミ",
        description: "歯車切削工具の専門メーカー",
        products: ["ホブカッタ", "ピニオンカッタ", "シェービングカッタ"],
        url: "https://www.azumi-tools.co.jp/",
      },
      {
        name: "株式会社伊澤技術研究所",
        description: "歯車試験機・測定機の専門メーカー",
        products: ["歯車試験機", "かみ合い試験機"],
      },
      {
        name: "株式会社小笠原プレシジョンラボラトリー",
        description: "歯車精密測定機器メーカー",
        products: ["歯車測定機", "マスターギヤ"],
      },
      {
        name: "大和精密工具株式会社",
        description: "歯車用切削工具メーカー",
        products: ["ホブカッタ", "ブローチ"],
      },
      {
        name: "DTR Corporation",
        description: "韓国の歯車工具グローバルメーカー",
        products: ["ホブカッタ", "シェービングカッタ", "ピニオンカッタ"],
        url: "https://www.dtrtool.com/",
      },
      {
        name: "株式会社不二越（NACHI）",
        description: "歯切工具特約販売店",
        products: ["ホブカッタ", "ブローチ", "超硬エンドミル"],
        url: "https://www.nachi-fujikoshi.co.jp/",
      },
      {
        name: "新潟精密株式会社",
        description: "精密歯車・精密部品加工",
        products: ["精密歯車", "減速機用歯車"],
      },
    ],
  },
  {
    id: "machines",
    title: "工作機械メーカー",
    subtitle: "SERVICE 02 取扱メーカー",
    makers: [
      {
        name: "DMG森精機株式会社",
        description: "世界最大級の総合工作機械メーカー",
        products: ["5軸マシニングセンタ", "CNC旋盤", "複合加工機"],
        url: "https://www.dmgmori.co.jp/",
      },
      {
        name: "ファナック株式会社",
        description: "CNC制御装置の世界シェアトップ",
        products: ["CNC装置", "産業用ロボット", "ロボドリル"],
        url: "https://www.fanuc.co.jp/",
      },
      {
        name: "Matrix Precision Machines",
        description: "台湾のCNC歯車研削盤トップメーカー",
        products: ["成形研削盤", "創成研削盤", "ウォーム研削盤"],
        url: "https://www.matrix-machine.tw/jp/",
        hasDetailPage: true,
      },
      {
        name: "オークマ株式会社",
        description: "自社製CNC搭載の総合工作機械メーカー",
        products: ["CNC旋盤", "マシニングセンタ", "研削盤"],
        url: "https://www.okuma.co.jp/",
      },
      {
        name: "株式会社岡本工作機械製作所",
        description: "研削盤のトップメーカー",
        products: ["平面研削盤", "CNC研削盤", "内面研削盤"],
        url: "https://www.okamoto.co.jp/",
      },
      {
        name: "株式会社カシフジ",
        description: "歯車加工機械の専業メーカー",
        products: ["CNCホブ盤", "歯車研削盤", "歯車形削盤"],
        url: "https://www.kashifuji.co.jp/",
      },
      {
        name: "唐津プレシジョン株式会社",
        description: "歯車研削盤・精密研削盤メーカー",
        products: ["歯車研削盤", "精密研削盤"],
      },
      {
        name: "清和ジーテック株式会社",
        description: "歯車加工機械メーカー",
        products: ["CNCホブ盤", "歯車加工機"],
        url: "https://www.seiwa-gtec.co.jp/",
      },
      {
        name: "株式会社東京精密（ACCRETECH）",
        description: "精密計測機器・半導体製造装置メーカー",
        products: ["真円度測定機", "三次元座標測定機", "歯車測定機"],
        url: "https://www.accretech.jp/",
      },
      {
        name: "東京テクニカル株式会社",
        description: "歯車加工機械関連メーカー",
        products: ["歯車加工機", "周辺機器"],
      },
      {
        name: "株式会社不二越（NACHI）",
        description: "工作機械・ロボット・工具の総合メーカー",
        products: ["歯車加工機", "ブローチ盤", "産業用ロボット"],
        url: "https://www.nachi-fujikoshi.co.jp/",
      },
      {
        name: "浜井産業株式会社",
        description: "歯車加工機・精密研磨機の老舗メーカー",
        products: ["CNCホブ盤", "シェービング盤", "両面研磨機"],
        url: "https://www.hamai.com/",
      },
      {
        name: "ヤマザキマザック株式会社",
        description: "世界最大級の工作機械メーカー",
        products: ["CNC旋盤", "マシニングセンタ", "複合加工機"],
        url: "https://www.mazak.jp/",
      },
    ],
  },
];

export function formatMakerNames(categoryId: string): string {
  const category = makerCategories.find(c => c.id === categoryId);
  if (!category) return '';
  return category.makers.map(m => m.name).join(' / ') + ' ほか';
}
