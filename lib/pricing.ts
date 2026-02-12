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
  1: 450,
  2: 650,
  3: 850,
  4: 1200,
};

/** Add-ons pricing configuration */
export const ADDONS = {
  packing: {
    hourlyRate: 35, // EUR per hour (35-40€ range)
    labelKey: "addons.packing",
  },
  parkingPermit: {
    fixedPrice: 150, // EUR (150-200€ range)
    labelKey: "addons.parkingPermit",
  },
  weekend: {
    multiplier: 1.10, // +10% (10-15% range)
    labelKey: "addons.weekend",
  },
  lift: {
    fixedPrice: 100, // EUR (100-150€ range)
    labelKey: "addons.lift",
  },
} as const;

/** Furniture assembly/disassembly pricing */
export const FURNITURE_PRICING = {
  beds: {
    double: {
      disassembly: 40,
      assembly: 55,
      total: 95,
    },
    single: {
      disassembly: 35,
      assembly: 45,
      total: 80,
    },
  },
  sofas: {
    large: {
      disassembly: 60,
      assembly: 80,
      total: 140,
    },
    standard: {
      disassembly: 40,
      assembly: 55,
      total: 95,
    },
  },
  wardrobes: {
    "5door": {
      disassembly: 120,
      assembly: 160,
      total: 280,
    },
    "4door": {
      disassembly: 95,
      assembly: 130,
      total: 225,
    },
  },
  smallFurniture: {
    tvCommode: {
      disassembly: 35,
      assembly: 45,
      total: 80,
    },
    cabinet: {
      disassembly: 35,
      assembly: 45,
      total: 80,
    },
  },
  kitchen: {
    disassembly: 80,
    assembly: 100,
    total: 180,
  },
  washingMachine: {
    disassembly: 30,
    assembly: 40,
    total: 70,
  },
} as const;

export function getPackageFromPrice(id: string): number {
  return PACKAGE_FROM_PRICES_EUR[id] ?? PACKAGES.find((p) => p.id === id)!.hours * HOURLY_RATE_EUR;
}

export function getApartmentFromPrice(rooms: number): number {
  if (rooms >= 4) return APARTMENT_FROM_PRICES_EUR[4];
  return APARTMENT_FROM_PRICES_EUR[rooms] ?? HOURLY_RATE_EUR * 3;
}
