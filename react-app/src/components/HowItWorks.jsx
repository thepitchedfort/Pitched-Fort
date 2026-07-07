const steps = [
  { n: 1, icon: '🎈', title: 'Choose your party size', text: 'Pick how many cozy spots you need — from an intimate 2 to a big 10+ celebration.' },
  { n: 2, icon: '🎨', title: 'Pick your theme', text: 'Browse our dreamy themes or dream up a custom look that’s all your own.' },
  { n: 3, icon: '✨', title: 'Add the extras', text: 'Elevate the night with treat bags, a balloon garland, a s’mores station & more.' },
  { n: 4, icon: '💌', title: 'Submit your inquiry', text: 'Send us the details through our quick form — it only takes a few minutes.' },
  { n: 5, icon: '🎉', title: 'Confirm & book your date', text: 'We’ll confirm availability, finalize details, and lock in your celebration.' },
]

// A simple 5-step flow. Horizontal on desktop, stacked on mobile.
export default function HowItWorks() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => (
        <li key={step.n} className="card-tpf relative flex flex-col items-center p-6 text-center">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full bg-navy font-serif text-sm font-bold text-cream shadow-soft">
            {step.n}
          </span>
          <span className="mt-3 text-4xl" aria-hidden="true">{step.icon}</span>
          <h3 className="mt-3 font-serif text-lg font-semibold text-navy">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
