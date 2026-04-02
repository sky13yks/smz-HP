export interface Maker {
  name: string;
  description?: string;
  url?: string;
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
      { name: "アヅミ", description: "歯切工具特約販売店", url: "https://www.azumi-tool.co.jp/" },
      { name: "伊澤技術研究所", url: "https://www.izawa-labo.co.jp/" },
      { name: "株式会社小笠原プレシジョンラボラトリー", url: "https://www.ogasawara-precision.co.jp/" },
      { name: "大和精密工具", url: "https://www.yamato-seimitsu.co.jp/" },
      { name: "DTR", description: "韓国の歯車工具メーカー", url: "https://www.dtrtool.com/" },
      { name: "ナチ不二越", description: "歯切工具特約販売店", url: "https://www.nachi-fujikoshi.co.jp/" },
      { name: "新潟精密", url: "https://www.niigataseimitsu.co.jp/" },
    ],
  },
  {
    id: "machines",
    title: "工作機械メーカー",
    subtitle: "SERVICE 02 取扱メーカー",
    makers: [
      { name: "DMG森精機株式会社", url: "https://www.dmgmori.co.jp/" },
      { name: "FANUC株式会社", url: "https://www.fanuc.co.jp/" },
      { name: "MATRIX", description: "台湾のCNC歯車研削盤トップメーカー", url: "https://www.matrix-machine.tw/jp/" },
      { name: "オークマ株式会社", url: "https://www.okuma.co.jp/" },
      { name: "株式会社岡本工作機械製作所", url: "https://www.okamoto.co.jp/" },
      { name: "カシフジ株式会社", url: "https://www.kashifuji.co.jp/" },
      { name: "唐津プレシジョン株式会社", url: "https://www.karatsu-p.co.jp/" },
      { name: "清和ジーテック株式会社", url: "https://www.seiwa-gtec.co.jp/" },
      { name: "株式会社東京精密", url: "https://www.accretech.jp/" },
      { name: "東京テクニカル株式会社", url: "https://www.tokyotechnical.co.jp/" },
      { name: "株式会社不二越", url: "https://www.nachi-fujikoshi.co.jp/" },
      { name: "浜井産業株式会社", url: "https://www.hamai.com/" },
      { name: "ヤマザキマザック株式会社", url: "https://www.mazak.jp/" },
    ],
  },
];

export function formatMakerNames(categoryId: string): string {
  const category = makerCategories.find(c => c.id === categoryId);
  if (!category) return '';
  return category.makers.map(m => m.name).join(' / ') + ' ほか';
}
