export const FOUNDING_YEAR = 1950;
export const FOUNDING_MONTH = 4; // 4月創業

export function getYearsInBusiness(): number {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0-indexed → 1-indexed
  return month >= FOUNDING_MONTH ? year - FOUNDING_YEAR : year - FOUNDING_YEAR - 1;
}
