import { addons } from '../data/addons'
import PageHero from '../components/PageHero'
import AddonCard from '../components/AddonCard'
import Button from '../components/Button'

export default function AddOns() {
  return (
    <>
      <PageHero
        eyebrow="elevate the experience"
        title="Add-On Services"
        subtitle="Make the night extra unforgettable. Mix and match these boutique extras to create a celebration that’s perfectly, wonderfully theirs — every add-on is completely optional."
      >
        <Button to="/contact" variant="blush">Add These to My Inquiry</Button>
      </PageHero>

      <section className="container-tpf py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addons.map((addon) => (
            <AddonCard key={addon.name} addon={addon} />
          ))}
        </div>

        <div className="mt-14 rounded-5xl bg-navy p-10 text-center text-cream sm:p-14">
          <span className="text-4xl" aria-hidden="true">🎁</span>
          <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
            Not sure which extras to choose?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80 leading-relaxed">
            Tell us about the guest of honor and we’ll suggest the perfect add-ons to match their
            personality, your theme, and your budget.
          </p>
          <div className="mt-6">
            <Button to="/contact" variant="blush">Ask for Recommendations</Button>
          </div>
        </div>
      </section>
    </>
  )
}
