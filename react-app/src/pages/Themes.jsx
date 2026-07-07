import { themes } from '../data/themes'
import PageHero from '../components/PageHero'
import ThemeCard from '../components/ThemeCard'
import Button from '../components/Button'

export default function Themes() {
  return (
    <>
      <PageHero
        eyebrow="pick your magic"
        title="Dreamy Themes for Every Celebration"
        subtitle="From glow parties to garden florals, each theme is styled with premium details and endless cuteness. Found a favorite? Just tap “Ask About This Theme.”"
      >
        <Button to="/contact" variant="blush">Request a Custom Theme</Button>
      </PageHero>

      <section className="container-tpf py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <ThemeCard key={theme.name} theme={theme} />
          ))}
        </div>

        <div className="mt-14 rounded-5xl bg-cream-deep/60 p-10 text-center">
          <span className="text-4xl" aria-hidden="true">💫</span>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-navy sm:text-3xl">
            Don’t see the perfect fit?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy/70 leading-relaxed">
            We love a custom theme! Tell us the guest of honor’s current obsession or your dream color
            palette, and we’ll style something made just for them.
          </p>
          <div className="mt-6">
            <Button to="/contact" variant="primary">Tell Us Your Vision</Button>
          </div>
        </div>
      </section>
    </>
  )
}
