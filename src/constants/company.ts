export const FOUNDING_YEAR = 1950;

export function getYearsInBusiness(): number {
  return new Date().getFullYear() - FOUNDING_YEAR;
}
