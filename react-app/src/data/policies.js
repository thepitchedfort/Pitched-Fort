// ─────────────────────────────────────────────────────────────
//  POLICIES / CONTRACT
//  Readable summaries based on a typical sleepover rental contract.
//
//  ⚠️  IMPORTANT: These are friendly PLACEHOLDER summaries written
//  to match the structure of your contract & DIY setup docs.
//  Replace the `body` text in each section with your final, legally
//  reviewed language from your Google Docs before going live.
//  (Look for the "REVIEW & REPLACE" note on each item.)
// ─────────────────────────────────────────────────────────────

export const policySections = [
  {
    id: 'booking-payment',
    title: 'Booking & Payment Terms',
    icon: '🗓️',
    body: [
      'Dates are reserved on a first-come, first-served basis and are not held until a booking fee is received.',
      'A booking fee/retainer is required to secure your date and is applied toward your total balance.',
      'The remaining balance is due on or before your event date, as outlined in your booking confirmation.',
    ],
    note: 'REVIEW & REPLACE with your exact payment amounts, methods, and due dates.',
  },
  {
    id: 'deposit',
    title: 'Booking Fee vs. Security Deposit',
    icon: '💳',
    body: [
      'These are two separate things. The booking fee (above) secures your date and is applied to your total; the security deposit does not go toward your balance.',
      'A refundable security deposit is collected separately to cover any major breakage, loss, or damage to the rental items.',
      'Your security deposit is refunded in full after your party is picked up (full-service) or returned (DIY), as long as everything comes back in good condition.',
      'If there is major breakage, damage, or a missing item, the repair or replacement cost is deducted from the deposit and the remainder is refunded.',
    ],
    note: 'REVIEW: confirm your exact security-deposit amount here.',
  },
  {
    id: 'cancellations',
    title: 'Cancellations & Rescheduling',
    icon: '🔄',
    body: [
      'We understand plans change. Reach out as early as possible if you need to cancel or reschedule.',
      'Rescheduling is typically accommodated based on availability, subject to notice requirements.',
      'Cancellation refunds (if any) depend on how far in advance you cancel; the booking fee is non-refundable.',
    ],
    note: 'REVIEW & REPLACE with your exact cancellation windows and refund schedule.',
  },
  {
    id: 'rental-period',
    title: 'Rental Period',
    icon: '⏳',
    body: [
      'Sleepover rentals are typically a one-night experience.',
      'Setup and pickup (full-service) or pickup and return (DIY) windows are scheduled with you in advance.',
      'Additional nights may be available upon request and may incur an added fee.',
    ],
    note: 'REVIEW & REPLACE with your exact rental duration and timing details.',
  },
  {
    id: 'care',
    title: 'Care of Rental Items',
    icon: '🧺',
    body: [
      'All items are professionally cleaned and styled before every event.',
      'Please keep food, drinks, markers, slime, makeup, and pets away from tents, linens, and décor.',
      'No shoes on the bedding, and please keep items indoors and dry throughout the rental.',
    ],
    note: 'REVIEW & REPLACE with your specific care instructions from the DIY setup doc.',
  },
  {
    id: 'damage',
    title: 'Damage / Missing Item Policy',
    icon: '🔍',
    body: [
      'Normal, gentle wear from happy kids is completely expected and never charged.',
      'Excessive stains, damage, or missing items may incur a repair, cleaning, or replacement fee.',
      'Any fees are based on the actual cost to clean or replace the affected items.',
    ],
    note: 'REVIEW & REPLACE with your exact fees and damage assessment process.',
  },
  {
    id: 'pickup-return',
    title: 'Pickup & Return Expectations (DIY)',
    icon: '📦',
    body: [
      'DIY kits are picked up and returned at our Shreveport, LA location (exact address shared once your booking is confirmed).',
      'Please return all items in their provided bags/bins, with décor and accessories accounted for.',
      'Return on time and in clean, dry condition to avoid late or cleaning fees.',
    ],
    note: 'REVIEW & REPLACE with your exact pickup/return times and checklist.',
  },
  {
    id: 'diy-responsibilities',
    title: 'DIY Responsibilities',
    icon: '🛠️',
    body: [
      'DIY clients are responsible for transporting, setting up, and taking down the kit using our instructions.',
      'Please follow the included step-by-step setup guide for a safe, beautiful result.',
      'Keep all components together and protected from weather, spills, and pets during your event.',
    ],
    note: 'REVIEW & REPLACE with the responsibilities listed in your DIY setup doc.',
  },
  {
    id: 'full-service',
    title: 'Full-Service Expectations',
    icon: '✨',
    body: [
      'We deliver, set up, and style your complete sleepover, then return for breakdown and pickup.',
      'Please have the setup area clean, clear, and accessible before our arrival.',
      'An adult should be present during delivery and pickup.',
    ],
    note: 'REVIEW & REPLACE with your exact full-service setup requirements.',
  },
  {
    id: 'safety',
    title: 'Safety & Supervision',
    icon: '🛟',
    body: [
      'Adult supervision is required at all times during the event for the safety of all guests.',
      'Lighting and electrical pieces should be used as directed and kept away from water.',
      'The Pitched Fort is not responsible for injury or damage occurring during use of the rental.',
    ],
    note: 'REVIEW & REPLACE with your exact safety and liability language.',
  },
]
