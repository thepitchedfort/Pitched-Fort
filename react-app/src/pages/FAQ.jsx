import { useState } from 'react'
import { faqs } from '../data/faqs'
import PageHero from '../components/PageHero'
import Button from '../components/Button'

function FaqItem({ item, isOpen, onToggle, id }) {
  return (
    <div className="card-tpf overflow-hidden">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-button-${id}`}
          onClick={onToggle}
        >
          <span className="font-serif text-lg font-semibold text-navy">{item.q}</span>
          <span
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blush-soft/70 text-navy transition-transform ${
              isOpen ? 'rotate-45' : ''
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </h3>
      {isOpen && (
        <div
          id={`faq-panel-${id}`}
          role="region"
          aria-labelledby={`faq-button-${id}`}
          className="px-6 pb-6 -mt-1 text-navy/75 leading-relaxed"
        >
          {item.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <PageHero
        eyebrow="good to know"
        title="Frequently Asked Questions"
        subtitle="Everything parents want to know before booking. Still have a question? We’re always happy to help."
      />

      <section className="container-tpf py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              id={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-5xl bg-cream-deep/60 p-10 text-center">
          <h2 className="font-serif text-2xl font-semibold text-navy">Still wondering about something?</h2>
          <p className="mx-auto mt-3 max-w-lg text-navy/70 leading-relaxed">
            Send us your question along with your inquiry — we’ll get back to you with all the details.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="primary">Ask a Question</Button>
            <Button to="/policies" variant="secondary">Read Our Policies</Button>
          </div>
        </div>
      </section>
    </>
  )
}
