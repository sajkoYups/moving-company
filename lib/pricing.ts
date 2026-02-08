/**
 * Configurable pricing for display and calculator.
 * All prices incl. VAT, non-binding. Minimum hours are internal only.
 */

export const HOURLY_RATE_EUR = 105;
export const HOURLY_LABEL = "2 movers + truck";

export const PACKAGES = [
  { id: "small", hours: 3, labelKey: "pricing.small" },
  { id: "medium", hours: 5, labelKey: "pricing.medium" },
  { id: "fullday", hours: 8, labelKey: "pricing.fullday" },
] as const;

/** From-prices for package display (configurable). */
export const PACKAGE_FROM_PRICES_EUR: Record<string, number> = {
  small: 315,
  medium: 525,
  fullday: 840,
};

/** Apartment size table: rooms -> from-price EUR. */
export const APARTMENT_FROM_PRICES_EUR: Record<number, number> = {
  1: 315,
  2: 420,
  3: 525,
  4: 630,
};

export function getPackageFromPrice(id: string): number {
  return PACKAGE_FROM_PRICES_EUR[id] ?? PACKAGES.find((p) => p.id === id)!.hours * HOURLY_RATE_EUR;
}

export function getApartmentFromPrice(rooms: number): number {
  if (rooms >= 4) return APARTMENT_FROM_PRICES_EUR[4];
  return APARTMENT_FROM_PRICES_EUR[rooms] ?? HOURLY_RATE_EUR * 3;
}
