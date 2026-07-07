import { policySections } from '../data/policies'
import { site } from '../data/site'
import PageHero from '../components/PageHero'
import Button from '../components/Button'

export default function Policies() {
  return (
    <>
      <PageHero
        eyebrow="clear & friendly"
        title="Policies & Booking Terms"
        subtitle="We keep things simple, fair, and transparent so you can book with confidence. Here’s everything you need to know."
      />

      <section className="container-tpf py-16">
        {/* Owner note — remove before going live */}
        <div className="mb-10 rounded-4xl border border-dashed border-blush-deep/50 bg-blush-soft/30 p-6 text-sm text-navy/75">
          <p className="font-bold text-navy">📝 A note for you (remove before publishing)</p>
          <p className="mt-2 leading-relaxed">
            The summaries below are friendly placeholders structured to match your contract and DIY
            setup documents. Open{' '}
            <code className="rounded bg-navy/10 px-1.5 py-0.5">src/data/policies.js</code> and replace
            each section’s text with your final, reviewed language (each item has a
            “REVIEW &amp; REPLACE” reminder in the code).
          </p>
        </div>

        {/* Quick-jump table of contents */}
        <nav aria-label="Policy sections" className="mb-10 rounded-4xl bg-cream-deep/50 p-6">
          <p className="mb-3 font-serif text-lg font-semibold text-navy">On this page</p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {policySections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex items-center gap-2 text-sm text-navy/75 transition hover:text-blush-deep">
                  <span aria-hidden="true">{s.icon}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {policySections.map((s) => (
            <section key={s.id} id={s.id} className="card-tpf scroll-mt-24 p-7">
              <h2 className="flex items-center gap-3 font-serif text-2xl font-semibold text-navy">
                <span aria-hidden="true">{s.icon}</span>
                {s.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {s.body.map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy/75 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-5xl bg-navy p-10 text-center text-cream">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Questions about our policies?</h2>
          <p className="mx-auto mt-3 max-w-lg text-cream/80 leading-relaxed">
            We’re always happy to walk you through anything before you book. Reach out anytime — we’re
            here to make this easy. We’re based in {site.address.public}.
          </p>
          <div className="mt-6">
            <Button to="/contact" variant="blush">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  )
}
