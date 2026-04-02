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
        name: "アヅミ株式会社",
        description: "歯切り工具専門メーカー（1927年設立）",
        products: ["ホブカッター", "ブローチ", "シェービングカッター"],
        url: "http://www.azumi-kk.jp/",
      },
      {
        name: "株式会社伊澤技術研究所",
        description: "超硬歯切り工具の少量多品種メーカー",
        products: ["超硬ホブカッター", "超硬総型カッター", "特殊メタルソー"],
        url: "https://izawa-giken.com/",
      },
      {
        name: "株式会社小笠原プレシジョンラボラトリー",
        description: "高精度小型歯車用切削工具・測定機器メーカー",
        products: ["歯車加工用ホブ", "精密測定機器", "刃研機"],
        url: "http://www.ogswr-pl.co.jp/",
      },
      {
        name: "大和精密工具株式会社",
        description: "二番取り歯切り工具のニッチ専門メーカー",
        products: ["ホブカッター（二番取り）", "歯切りカッター（二番取り）"],
        url: "http://www.yamatoseimitsu.co.jp/",
      },
      {
        name: "DTR Corporation",
        description: "韓国発の世界的歯車切削工具メーカー（1976年創業）",
        products: ["歯車用ホブカッター", "ミリングカッター", "工具コーティング"],
        url: "https://www.dtrtool.com/",
      },
      {
        name: "株式会社不二越（NACHI）",
        description: "ロボット・ベアリング・切削工具の総合メーカー",
        products: ["超高能率ホブ", "スカイビングカッター", "ピニオンカッター"],
        url: "https://www.nachi-fujikoshi.co.jp/",
      },
      {
        name: "新潟精密株式会社",
        description: "車載電装品・通信モジュール・精密部品メーカー",
        products: ["車載電装品モジュール", "通信系モジュール", "精密部品"],
        url: "http://www.n-seimitu.co.jp/",
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
        description: "研削盤で世界トップレベルのメーカー（1935年創業）",
        products: ["平面研削盤", "CNC研削盤", "半導体関連装置"],
        url: "https://www.okamoto.co.jp/",
      },
      {
        name: "株式会社カシフジ",
        description: "国産初のホブ盤を完成させた歯車加工機の業界トップ",
        products: ["CNCホブ盤", "ギヤスカイビング盤", "ホブ刃溝研削盤"],
        url: "https://www.kashifuji.co.jp/",
      },
      {
        name: "株式会社唐津プレシジョン",
        description: "大型・超大型工作機械メーカー（1909年創業）",
        products: ["大型旋盤", "スカイビングマシン", "ウォーム研削盤"],
        url: "https://karats.co.jp/",
      },
      {
        name: "清和ジーテック株式会社",
        description: "ギアホーニング盤で国内シェア70%のメーカー",
        products: ["ギアホーニング盤", "ホブ盤", "ホブ再研削機"],
        url: "https://segtec.jp/",
      },
      {
        name: "株式会社東京精密（ACCRETECH）",
        description: "精密計測機器・半導体製造装置メーカー",
        products: ["真円度測定機", "三次元座標測定機", "歯車測定機"],
        url: "https://www.accretech.jp/",
      },
      {
        name: "株式会社東京テクニカル",
        description: "歯車試験機・検査機の専業メーカー（1972年創業）",
        products: ["CNC歯車試験機", "噛合い試験機", "AI画像検査システム"],
        url: "https://www.tti-geartec.jp/",
      },
      {
        name: "株式会社不二越（NACHI）",
        description: "工作機械・ロボット・工具の総合メーカー",
        products: ["歯車加工機", "ブローチ盤", "産業用ロボット"],
        url: "https://www.nachi-fujikoshi.co.jp/",
      },
      {
        name: "浜井産業株式会社",
        description: "歯車加工機と精密研磨機の老舗メーカー",
        products: ["ホブ盤", "ラップ盤", "両頭NCフライス盤"],
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
