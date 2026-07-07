import PageHero from '../components/PageHero'
import PricingTable from '../components/PricingTable'
import ServiceCompare from '../components/ServiceCompare'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="simple & transparent"
        title="Tent Party Pricing"
        subtitle="Beautiful sleepovers for every guest list. Choose full-service for the full white-glove experience, or DIY pickup for a budget-friendly option."
      >
        <Button to="/contact" variant="blush">Request My Tent Party</Button>
      </PageHero>

      <section className="container-tpf py-16">
        <PricingTable />
      </section>

      <section className="bg-cream-deep/50 py-16">
        <div className="container-tpf">
          <SectionHeading
            eyebrow="what’s the difference?"
            title="Full-Service vs. DIY Pickup"
            subtitle="Both options include our signature styling — the difference is simply who handles the setup."
            className="mb-12"
          />
          <ServiceCompare />
        </div>
      </section>

      <section className="container-tpf py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-navy">Ready for your custom quote?</h2>
          <p className="mt-4 text-navy/70 leading-relaxed">
            Add-ons, additional tents, and travel can all be tailored to your celebration. Send us an
            inquiry and we’ll put together everything you need.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="primary">Get My Quote</Button>
            <Button to="/add-ons" variant="secondary">Explore Add-Ons</Button>
          </div>
        </div>
      </section>
    </>
  )
}
