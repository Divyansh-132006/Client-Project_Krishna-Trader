// src/components/c6/data.js

import { Users, Package, Star } from 'lucide-react';

// --- Reusable Data Definitions ---

export const electricVehiclesData = [
  { brand: 'SAI', specialization: 'E-Scooty & E-Rickshaw Parts', features: 'Known for long life and excellent performance.' },
  { brand: 'CY GOLD', specialization: 'Electric Vehicle Parts', features: 'Reliability, strong fitting, and high-grade materials.' },
  { brand: '999', specialization: 'EV Components', features: 'Premium quality at an affordable price.' },
  { brand: 'GY', specialization: 'Battery, Motor, Controller Parts', features: 'Designed for South and all Indian road conditions.' },
  { brand: 'UNAITED', specialization: 'EV Spare Parts', features: 'Strong, durable, and ideal for high-torque vehicles.' },
];

export const bikePartsData = [
  { brand: 'HERO', specialization: 'Bike Spare Parts', features: 'Reliable, high-demand, genuine products.' },
  { brand: 'BAJAJ', specialization: 'Bike Spare Parts', features: 'Strong and maximum performance on Indian roads.' },
];

export const productRange = [
  'Motors',
  'Controllers',
  'Brake Assemblies',
  'Wiring Harnesses',
  'Chassis Parts',
  'Shock Absorbers',
  'Plastic Body Parts',
  'Chargers, BMS, Converters',
];

export const supplyChain = [
  'Large and consistent stock availability',
  'Immediate dispatch facility',
  'Fast and secure delivery across India',
  'Special supply support for OEMs and Service Centers',
];

export const keyMetrics = [
  { number: '500+', label: 'Dealer Network', icon: Users },
  { number: '50,000+', label: 'Parts Sold', icon: Package },
  { number: '97%', label: 'Customer Satisfaction', icon: Star },
];




// Re-exporting the Product Categories Data for SAI and CY GOLD for clean access.
export const saiControllerCount = 6;
export const saiBrakeSystemCount = 6;
export const saiPartsRangeCount = 8;
export const cyGoldSystemCount = 8;
export const cyGoldMotorCount = 6;
export const cyGoldSafetyCount = 6;