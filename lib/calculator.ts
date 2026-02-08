/**
 * Calculator logic: inputs -> single "from" price (EUR).
 * Uses same config as pricing (hourly rate, floor/elevator factors).
 */

import { HOURLY_RATE_EUR, getApartmentFromPrice } from "./pricing";

export type CalculatorInputs = {
  moveDate: string;
  fromZip: string;
  toZip: string;
  apartmentSize: number; // rooms
  floorFrom: number;
  floorTo: number;
  elevatorFrom: boolean;
  elevatorTo: boolean;
  kitchen: boolean;
  wardrobe: boolean;
  bed: boolean;
  washingMachine: boolean;
};

/** Floor/elevator factor: no elevator = small surcharge per floor. */
const FLOOR_SURCHARGE_PER_FLOOR_EUR = 15;
const ASSEMBLY_SURCHARGE_EUR = 25;

export function calculateFromPrice(inputs: CalculatorInputs): number {
  let base = getApartmentFromPrice(inputs.apartmentSize);

  // Floor surcharge if no elevator
  if (!inputs.elevatorFrom && inputs.floorFrom > 0) {
    base += inputs.floorFrom * FLOOR_SURCHARGE_PER_FLOOR_EUR;
  }
  if (!inputs.elevatorTo && inputs.floorTo > 0) {
    base += inputs.floorTo * FLOOR_SURCHARGE_PER_FLOOR_EUR;
  }

  // Assembly surcharges
  if (inputs.kitchen) base += ASSEMBLY_SURCHARGE_EUR;
  if (inputs.wardrobe) base += ASSEMBLY_SURCHARGE_EUR;
  if (inputs.bed) base += ASSEMBLY_SURCHARGE_EUR;
  if (inputs.washingMachine) base += ASSEMBLY_SURCHARGE_EUR;

  return Math.round(base);
}
