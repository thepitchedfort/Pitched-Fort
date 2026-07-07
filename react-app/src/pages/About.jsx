import { site } from '../data/site'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import ImagePlaceholder from '../components/ImagePlaceholder'
import SectionHeading from '../components/SectionHeading'
import { Star } from '../components/Decorations'

export default function About() {
  const values = [
    { icon: '💝', title: 'Memories first', text: 'Every choice we make is in service of a celebration your family will treasure.' },
    { icon: '🪄', title: 'Details, handled', text: 'You don’t have to figure it all out alone — we sweat the small stuff so you don’t have to.' },
    { icon: '🌿', title: 'Polished presentation', text: 'Thoughtfully styled, beautifully cohesive, and always photo-ready.' },
    { icon: '🤝', title: 'Trust & care', text: 'Clean, safe, well-loved gear and warm, responsive service from inquiry to pickup.' },
  ]

  return (
    <>
      <PageHero
        eyebrow="our story"
        title="Meet The Pitched Fort"
        subtitle="A boutique sleepover party rental company creating dreamy, stress-free celebrations across Shreveport and beyond."
      />

      {/* Intro */}
      <section className="container-tpf py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder label="Add a photo of you / your setups" icon="🌙" ratio="aspect-[4/5]" alt="The Pitched Fort founder and setups" />
          <div>
            <p className="eyebrow">hello &amp; welcome</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Beautiful celebrations, made easy
            </h2>
            <div className="mt-4 space-y-4 text-navy/75 leading-relaxed">
              <p>
                The Pitched Fort was born from a simple belief: celebrations should feel magical for
                the kids and effortless for the grown-ups. We design and deliver luxury sleepover tent
                parties that turn an ordinary night into an unforgettable one — fully styled, cozy, and
                oh-so photo-worthy.
              </p>
              <p>
                Planning a party can feel like a lot. The themes, the décor, the setup, the cleanup —
                it adds up fast. That’s where we come in. We handle the beautiful details so you can be
                fully present for the giggles, the whispered secrets, and the memories in the making.
              </p>
              <p>
                Whether you want a completely hands-off, full-service experience or a budget-friendly
                DIY kit you set up yourself, we make it simple to create something special. Every party
                is thoughtfully curated, lovingly styled, and ready to wow from the moment it’s set up.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">Start Planning</Button>
              <Button to="/themes" variant="secondary">Browse Themes</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-deep/50 py-16">
        <div className="container-tpf">
          <SectionHeading
            eyebrow="what we care about"
            title="The little things that make the big difference"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card-tpf p-6 text-center">
                <span className="text-4xl" aria-hidden="true">{v.icon}</span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="container-tpf py-16">
        <div className="rounded-5xl bg-navy p-10 text-center text-cream sm:p-14">
          <Star className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Let’s make their celebration unforgettable
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80 leading-relaxed">
            Proudly serving {site.serviceArea}. We’d be honored to be part of your next big moment.
          </p>
          <div className="mt-7">
            <Button to="/contact" variant="blush">Request My Tent Party</Button>
          </div>
        </div>
      </section>
    </>
  )
}
