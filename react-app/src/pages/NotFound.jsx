import PageHero from '../components/PageHero'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="oops!"
        title="This page wandered off"
        subtitle="It looks like this little tent isn’t pitched here. Let’s get you back to the celebration."
      >
        <Button to="/" variant="blush">Back to Home</Button>
      </PageHero>
      <section className="container-tpf py-20 text-center">
        <span className="text-6xl" aria-hidden="true">⛺</span>
        <p className="mt-4 text-navy/70">
          Try the menu above, or head straight to{' '}
          <a href="/themes" className="font-semibold text-blush-deep underline">our themes</a> or{' '}
          <a href="/contact" className="font-semibold text-blush-deep underline">the inquiry form</a>.
        </p>
      </section>
    </>
  )
}
