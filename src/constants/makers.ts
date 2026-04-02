export interface Maker {
  name: string;
  description?: string;
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
      { name: "アヅミ", description: "歯切工具特約販売店" },
      { name: "伊澤技術研究所" },
      { name: "株式会社小笠原プレシジョンラボラトリー" },
      { name: "大和精密工具" },
      { name: "DTR", description: "韓国の歯車工具メーカー" },
      { name: "ナチ不二越", description: "歯切工具特約販売店" },
      { name: "新潟精密" },
    ],
  },
  {
    id: "machines",
    title: "工作機械メーカー",
    subtitle: "SERVICE 02 取扱メーカー",
    makers: [
      { name: "DMG森精機株式会社" },
      { name: "FANUC株式会社" },
      { name: "MATRIX", description: "台湾のCNC歯車研削盤トップメーカー" },
      { name: "オークマ株式会社" },
      { name: "株式会社岡本工作機械製作所" },
      { name: "カシフジ株式会社" },
      { name: "唐津プレシジョン株式会社" },
      { name: "清和ジーテック株式会社" },
      { name: "株式会社東京精密" },
      { name: "東京テクニカル株式会社" },
      { name: "株式会社不二越" },
      { name: "浜井産業株式会社" },
      { name: "ヤマザキマザック株式会社" },
    ],
  },
];

export function formatMakerNames(categoryId: string): string {
  const category = makerCategories.find(c => c.id === categoryId);
  if (!category) return '';
  return category.makers.map(m => m.name).join(' / ') + ' ほか';
}
