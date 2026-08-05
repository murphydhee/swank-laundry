export const garmentsPricing = [
  { item: 'Senator', express: '1,500', standard: '2,500' },
  { item: 'Kafta', express: '1,500', standard: '2,500' },
  { item: 'Agbada', express: '3,500', standard: '5,500' },
  { item: 'Shirt', express: '1,000', standard: '2,000' },
  { item: 'Polo/Shirt', express: '800', standard: '2,000' },
  { item: 'Trouser', express: '800', standard: '2,000' },
  { item: 'Duvet', express: '4,000', standard: '6,000' },
  { item: 'Bed Cover', express: '1,000', standard: '2,000' },
  { item: 'Pillow Case', express: '300', standard: '700' },
  { item: 'Towel (Big)', express: '1,500', standard: '3,000' },
  { item: 'Towel (Medium)', express: '1,000', standard: '2,000' },
  { item: 'Towel (Small)', express: '800', standard: '1,600' },
  { item: 'Gown (Long)', express: '1,500', standard: '3,000' },
  { item: 'Gown (Short)', express: '1,000', standard: '2,000' },
  { item: 'Suit (2pcs)', express: '2,500', standard: '5,500' },
  { item: 'Suit (3pcs)', express: '4,000', standard: '8,000' },
  { item: 'Skirt', express: '800', standard: '1,600' },
  { item: 'Blouse', express: '1,500', standard: '3,000' },
  { item: 'Curtain (Light)', express: '1,500', standard: '3,000' },
  { item: 'Curtain (Heavy)', express: '2,500', standard: '5,000' },
  { item: 'Kiddies Cloth (per cloth)', express: '500', standard: '1,000' },
]

export const specialItemsPricing = [
  { item: 'Beaded Garment', express: '3,500', standard: '7,000' },
  { item: 'Sock', express: '200', standard: '500' },
  { item: 'Jacket', express: '2,000', standard: '4,000' },
  { item: 'Singlet', express: '400', standard: '800' },
  { item: 'Sweater', express: '1,500', standard: '3,000' },
  { item: 'Face Cap', express: '800', standard: '1,600' },
  { item: 'Footwear', express: '2,000', standard: '4,000' },
  { item: 'Short', express: '800', standard: '1,600' },
  { item: 'Pyjamas', express: '1,500', standard: '3,000' },
  { item: 'Underwear', express: '500', standard: '1,000' },
  { item: 'Handkerchief', express: '200', standard: '400' },
  { item: 'Overall', express: '1,500', standard: '—' },
  { item: 'Track Suit', express: '1,500', standard: '3,000' },
  { item: 'Tie', express: '300', standard: '700' },
  { item: 'Bag / Purse', express: '2,500', standard: '5,000' },
  { item: 'Blanket', express: '3,000', standard: '6,000' },
  { item: 'Wedding Gown', express: '10,000', standard: '20,000' },
  { item: 'Carpet (per sqm)', express: '3,000', standard: '6,000' },
  { item: 'Box', express: '3,500', standard: '7,000' },
  { item: 'Head Tie', express: '800', standard: '1,600' },
  { item: 'Wrapper', express: '800', standard: '1,600' },
  { item: 'Hat', express: '1,000', standard: '2,000' },
]

/**
 * @typedef {'student' | 'family' | 'enterprise'} LaundryPlanCategory
 */

/**
 * @typedef {'standard' | 'express'} LaundryServiceType
 */

/**
 * @typedef {Object} LaundryPlan
 * @property {string} id
 * @property {LaundryPlanCategory} category
 * @property {string} name
 * @property {string} description
 * @property {number} weightKg
 * @property {number} standardPrice
 * @property {number} expressPrice
 * @property {number} standardExtraPerKg
 * @property {number} expressExtraPerKg
 * @property {number | null} pickupLimit
 * @property {string} pickupDescription
 * @property {string} recommendedFor
 * @property {string[]} features
 */

/** @type {LaundryPlan[]} */
export const laundrySubscriptionPlans = [
  {
    id: 'student-solo',
    category: 'student',
    name: 'Student Solo',
    description: 'Affordable monthly laundry coverage for one student.',
    weightKg: 5,
    standardPrice: 15000,
    expressPrice: 21000,
    standardExtraPerKg: 3300,
    expressExtraPerKg: 4600,
    pickupLimit: 2,
    pickupDescription: 'Up to 2 pickups per month',
    recommendedFor: 'One student with light monthly laundry',
    features: [
      'Up to 5 kg monthly',
      'Wash, dry and fold',
      'Basic ironing',
      'Up to 2 scheduled pickups',
    ],
  },
  {
    id: 'student-plus',
    category: 'student',
    name: 'Student Plus',
    description: 'A flexible monthly plan for students with regular laundry.',
    weightKg: 10,
    standardPrice: 27000,
    expressPrice: 38000,
    standardExtraPerKg: 3000,
    expressExtraPerKg: 4200,
    pickupLimit: 4,
    pickupDescription: 'Up to 4 pickups per month',
    recommendedFor: 'Students who need weekly laundry service',
    features: [
      'Up to 10 kg monthly',
      'Wash, dry and fold',
      'Basic ironing',
      'Up to 4 scheduled pickups',
    ],
  },
  {
    id: 'family-essential',
    category: 'family',
    name: 'Family Essential',
    description: 'Monthly laundry coverage for a small household.',
    weightKg: 20,
    standardPrice: 50000,
    expressPrice: 70000,
    standardExtraPerKg: 2800,
    expressExtraPerKg: 3900,
    pickupLimit: 4,
    pickupDescription: 'Up to 4 pickups per month',
    recommendedFor: 'Households of approximately 2 to 4 people',
    features: [
      'Up to 20 kg monthly',
      'Wash, dry and fold',
      'Basic ironing',
      'Kiddies clothes included',
      'Up to 4 scheduled pickups',
    ],
  },
  {
    id: 'family-plus',
    category: 'family',
    name: 'Family Plus',
    description: 'A higher-capacity plan for larger households.',
    weightKg: 35,
    standardPrice: 80000,
    expressPrice: 112000,
    standardExtraPerKg: 2500,
    expressExtraPerKg: 3500,
    pickupLimit: 6,
    pickupDescription: 'Up to 6 pickups per month',
    recommendedFor: 'Households of approximately 4 to 7 people',
    features: [
      'Up to 35 kg monthly',
      'Wash, dry and fold',
      'Basic ironing',
      'Kiddies clothes included',
      'Light bed linen included',
      'Up to 6 scheduled pickups',
    ],
  },
  {
    id: 'business-starter',
    category: 'enterprise',
    name: 'Business Starter',
    description: 'Commercial laundry coverage for small organisations.',
    weightKg: 50,
    standardPrice: 110000,
    expressPrice: 150000,
    standardExtraPerKg: 2400,
    expressExtraPerKg: 3300,
    pickupLimit: null,
    pickupDescription: 'Scheduled weekly pickups',
    recommendedFor: 'Salons, spas, restaurants, gyms and small offices',
    features: [
      'Up to 50 kg monthly',
      'Commercial wash and finishing',
      'Scheduled weekly collection',
      'Dedicated account support',
      'Monthly usage summary',
    ],
  },
  {
    id: 'enterprise-plus',
    category: 'enterprise',
    name: 'Enterprise Plus',
    description: 'Large-volume laundry coverage with a custom service schedule.',
    weightKg: 100,
    standardPrice: 200000,
    expressPrice: 275000,
    standardExtraPerKg: 2200,
    expressExtraPerKg: 3000,
    pickupLimit: null,
    pickupDescription: 'Custom pickup schedule',
    recommendedFor: 'Hotels, hospitals, large gyms and organisations',
    features: [
      'Up to 100 kg monthly',
      'Large-volume commercial laundry',
      'Custom collection schedule',
      'Dedicated account manager',
      'Item sorting and labelling',
      'Monthly usage and billing report',
    ],
  },
]

/**
 * @typedef {Object} LaundryChargeInput
 * @property {LaundryPlan} plan
 * @property {LaundryServiceType} serviceType
 * @property {number} actualEligibleWeightKg
 * @property {number} [specialtyItemsTotal]
 */

/**
 * Calculates the total subscription charge including excess weight.
 * @param {LaundryChargeInput} input
 */
export const calculateLaundrySubscriptionCharge = ({
  plan,
  serviceType,
  actualEligibleWeightKg,
  specialtyItemsTotal = 0,
}) => {
  if (actualEligibleWeightKg < 0) {
    throw new Error('Laundry weight cannot be negative.')
  }

  const planPrice =
    serviceType === 'express'
      ? plan.expressPrice
      : plan.standardPrice

  const extraRate =
    serviceType === 'express'
      ? plan.expressExtraPerKg
      : plan.standardExtraPerKg

  const rawExtraWeightKg = Math.max(
    0,
    actualEligibleWeightKg - plan.weightKg,
  )

  const billableExtraWeightKg =
    Math.ceil(rawExtraWeightKg * 2) / 2

  const extraCharge =
    billableExtraWeightKg * extraRate

  return {
    planId: plan.id,
    serviceType,
    includedWeightKg: plan.weightKg,
    actualEligibleWeightKg,
    rawExtraWeightKg,
    billableExtraWeightKg,
    extraRate,
    planPrice,
    extraCharge,
    specialtyItemsTotal,
    totalCharge:
      planPrice + extraCharge + specialtyItemsTotal,
  }
}

/**
 * Formats a number to Nigerian Naira currency format.
 * @param {number} amount
 * @returns {string}
 */
export const formatNaira = (amount) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount)
