/**
 * Calculator logic: inputs -> single "from" price (EUR).
 * Uses same config as pricing (hourly rate, floor/elevator factors).
 */

import { getApartmentFromPrice, FURNITURE_PRICING, ADDONS } from "./pricing";

export type CalculatorInputs = {
  moveDate: string;
  fromZip: string;
  toZip: string;
  apartmentSize: number; // rooms
  floorFrom: number;
  floorTo: number;
  elevatorFrom: boolean;
  elevatorTo: boolean;
  // Detailed furniture assembly/disassembly
  kitchenDisassembly?: boolean;
  kitchenAssembly?: boolean;
  doubleBedCount?: number;
  singleBedCount?: number;
  largeSofaCount?: number;
  standardSofaCount?: number;
  wardrobe5DoorCount?: number;
  wardrobe4DoorCount?: number;
  tvCommodeCount?: number;
  cabinetCount?: number;
  washingMachineDisassembly?: boolean;
  washingMachineAssembly?: boolean;
  // Legacy support (backward compatibility)
  kitchen?: boolean;
  wardrobe?: boolean;
  bed?: boolean;
  washingMachine?: boolean;
  // Add-ons
  packingHours?: number;
  parkingPermit?: boolean;
  weekend?: boolean;
  lift?: boolean;
};

/** Floor/elevator factor: no elevator = small surcharge per floor. */
const FLOOR_SURCHARGE_PER_FLOOR_EUR = 15;

export function calculateFromPrice(inputs: CalculatorInputs): number {
  let base = getApartmentFromPrice(inputs.apartmentSize);

  // Floor surcharge if no elevator
  if (!inputs.elevatorFrom && inputs.floorFrom > 0) {
    base += inputs.floorFrom * FLOOR_SURCHARGE_PER_FLOOR_EUR;
  }
  if (!inputs.elevatorTo && inputs.floorTo > 0) {
    base += inputs.floorTo * FLOOR_SURCHARGE_PER_FLOOR_EUR;
  }

  // Detailed furniture assembly/disassembly pricing
  // Kitchen
  if (inputs.kitchenDisassembly || inputs.kitchen) {
    base += FURNITURE_PRICING.kitchen.disassembly;
  }
  if (inputs.kitchenAssembly || inputs.kitchen) {
    base += FURNITURE_PRICING.kitchen.assembly;
  }

  // Beds
  const doubleBedCount = inputs.doubleBedCount || 0;
  const singleBedCount = inputs.singleBedCount || 0;
  if (inputs.bed && !doubleBedCount && !singleBedCount) {
    // Legacy: assume 1 double bed
    base += FURNITURE_PRICING.beds.double.total;
  } else {
    base += doubleBedCount * FURNITURE_PRICING.beds.double.total;
    base += singleBedCount * FURNITURE_PRICING.beds.single.total;
  }

  // Sofas
  const largeSofaCount = inputs.largeSofaCount || 0;
  const standardSofaCount = inputs.standardSofaCount || 0;
  base += largeSofaCount * FURNITURE_PRICING.sofas.large.total;
  base += standardSofaCount * FURNITURE_PRICING.sofas.standard.total;

  // Wardrobes
  const wardrobe5DoorCount = inputs.wardrobe5DoorCount || 0;
  const wardrobe4DoorCount = inputs.wardrobe4DoorCount || 0;
  if (inputs.wardrobe && !wardrobe5DoorCount && !wardrobe4DoorCount) {
    // Legacy: assume 1 4-door wardrobe
    base += FURNITURE_PRICING.wardrobes["4door"].total;
  } else {
    base += wardrobe5DoorCount * FURNITURE_PRICING.wardrobes["5door"].total;
    base += wardrobe4DoorCount * FURNITURE_PRICING.wardrobes["4door"].total;
  }

  // Small furniture
  const tvCommodeCount = inputs.tvCommodeCount || 0;
  const cabinetCount = inputs.cabinetCount || 0;
  base += tvCommodeCount * FURNITURE_PRICING.smallFurniture.tvCommode.total;
  base += cabinetCount * FURNITURE_PRICING.smallFurniture.cabinet.total;

  // Washing machine
  if (inputs.washingMachineDisassembly || inputs.washingMachine) {
    base += FURNITURE_PRICING.washingMachine.disassembly;
  }
  if (inputs.washingMachineAssembly || inputs.washingMachine) {
    base += FURNITURE_PRICING.washingMachine.assembly;
  }

  // Weekend premium (applied as multiplier to base move price before add-ons)
  if (inputs.weekend) {
    base = Math.round(base * ADDONS.weekend.multiplier);
  }

  // Add-ons (applied after weekend premium)
  // Packing service (per hour)
  if (inputs.packingHours && inputs.packingHours > 0) {
    base += inputs.packingHours * ADDONS.packing.hourlyRate;
  }

  // Parking permit
  if (inputs.parkingPermit) {
    base += ADDONS.parkingPermit.fixedPrice;
  }

  // Lift rental/coordination
  if (inputs.lift) {
    base += ADDONS.lift.fixedPrice;
  }

  return Math.round(base);
}
