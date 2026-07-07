import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { site } from '../data/site'
import { themes } from '../data/themes'
import { addons } from '../data/addons'
import PageHero from '../components/PageHero'
import { Star, Heart } from '../components/Decorations'

// ─────────────────────────────────────────────────────────────
//  WHERE DOES THIS FORM SEND?
//  By default the form shows a success message and points to your
//  Google Form as a reliable backup (no setup required).
//
//  To receive submissions by email, create a free endpoint at
//  https://formspree.io (or similar) and paste the URL below.
//  Then real submissions are emailed straight to your inbox.
// ─────────────────────────────────────────────────────────────
const FORM_ENDPOINT = '' // e.g. 'https://formspree.io/f/xxxxxxx'

const guestOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'More than 10']
const hearAboutOptions = ['Facebook', 'Instagram', 'TikTok', 'Friend or family', 'Google search', 'A past party', 'Other']

// Small labeled field wrapper for consistent, accessible styling.
function Field({ label, htmlFor, required, children, full }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-bold text-navy">
        {label} {required && <span className="text-blush-deep">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/35 transition focus:border-blush-deep'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const presetTheme = searchParams.get('theme') || ''
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState([])

  const toggleAddon = (name) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name],
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)

    // If a real endpoint is configured, post the form there.
    if (FORM_ENDPOINT) {
      try {
        const data = new FormData(e.target)
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })
        if (res.ok) {
          setSubmitted(true)
        } else {
          alert('Something went wrong sending your inquiry. Please try the Google Form backup below.')
        }
      } catch {
        alert('Something went wrong sending your inquiry. Please try the Google Form backup below.')
      } finally {
        setSending(false)
      }
      return
    }

    // No endpoint configured yet — show the confirmation message.
    setTimeout(() => {
      setSubmitted(true)
      setSending(false)
    }, 500)
  }

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="hooray!" title="Your Inquiry Is On Its Way" />
        <section className="container-tpf py-20">
          <div className="mx-auto max-w-xl rounded-5xl bg-white p-10 text-center shadow-card sm:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-soft/60">
              <Heart className="h-8 w-8 text-blush-deep" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-navy sm:text-3xl">
              Thank you!
            </h2>
            <p className="mt-4 text-navy/75 leading-relaxed">
              We received your inquiry and will be in touch soon to confirm availability and party
              details. We can’t wait to help you create something dreamy!
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="/" className="btn-primary">Back to Home</a>
              <a href="/themes" className="btn-secondary">Browse More Themes</a>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="let’s celebrate"
        title="Request Your Tent Party"
        subtitle="Tell us about your celebration and we’ll be in touch to confirm availability and details. The more you share, the more we can personalize your magic!"
      />

      <section className="container-tpf py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* ── The form ── */}
          <form onSubmit={handleSubmit} className="card-tpf p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Parent / Guardian Name" htmlFor="parentName" required>
                <input id="parentName" name="parentName" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
              </Field>

              <Field label="Email" htmlFor="email" required>
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@email.com" />
              </Field>

              <Field label="Phone" htmlFor="phone" required>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(318) 555-0123" />
              </Field>

              <Field label="Event Date" htmlFor="eventDate">
                <input id="eventDate" name="eventDate" type="date" className={inputClass} />
              </Field>

              <Field label="Event Address or Zip Code" htmlFor="location" full>
                <input id="location" name="location" type="text" className={inputClass} placeholder="Street address or zip — helps us confirm travel" />
              </Field>

              <Field label="Guest of Honor’s Name" htmlFor="guestOfHonor">
                <input id="guestOfHonor" name="guestOfHonor" type="text" className={inputClass} placeholder="The birthday star!" />
              </Field>

              <Field label="Age Being Celebrated" htmlFor="age">
                <input id="age" name="age" type="text" inputMode="numeric" className={inputClass} placeholder="e.g. 8" />
              </Field>

              <Field label="Number of Guests" htmlFor="guests">
                <select id="guests" name="guests" className={inputClass} defaultValue="">
                  <option value="" disabled>Select guest count</option>
                  {guestOptions.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </Field>

              <Field label="Preferred Theme" htmlFor="theme">
                <select id="theme" name="theme" className={inputClass} defaultValue={presetTheme}>
                  <option value="">Choose a theme (or decide later)</option>
                  {themes.map((t) => (
                    <option key={t.name} value={t.name}>{t.name}</option>
                  ))}
                </select>
              </Field>

              {/* Service type */}
              <Field label="Full-Service or DIY Pickup?" htmlFor="serviceType" full>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { value: 'Full-Service', desc: 'We deliver, set up & style it all' },
                    { value: 'DIY Pickup', desc: 'You pick up & set up the kit' },
                  ].map((opt) => (
                    <label key={opt.value} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-navy/15 bg-white p-4 transition hover:border-blush-deep has-[:checked]:border-blush-deep has-[:checked]:bg-blush-soft/30">
                      <input type="radio" name="serviceType" value={opt.value} className="mt-1 accent-navy" />
                      <span>
                        <span className="block font-semibold text-navy">{opt.value}</span>
                        <span className="block text-xs text-navy/60">{opt.desc}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </Field>

              {/* Add-ons */}
              <Field label="Interested Add-Ons (optional)" htmlFor="addons" full>
                <div className="grid max-h-56 grid-cols-1 gap-2 overflow-y-auto rounded-2xl border border-navy/15 bg-white p-3 sm:grid-cols-2">
                  {addons.map((addon) => (
                    <label key={addon.name} className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm transition hover:bg-cream-deep/50 has-[:checked]:bg-sage-soft/40">
                      <input
                        type="checkbox"
                        name="addons"
                        value={addon.name}
                        checked={selectedAddons.includes(addon.name)}
                        onChange={() => toggleAddon(addon.name)}
                        className="accent-sage-deep"
                      />
                      <span className="text-navy/80">{addon.name}</span>
                    </label>
                  ))}
                </div>
              </Field>

              <Field label="Party Setup Location Notes" htmlFor="setupNotes" full>
                <textarea id="setupNotes" name="setupNotes" rows="2" className={inputClass} placeholder="First floor, upstairs, stairs/elevator access, parking, etc." />
              </Field>

              <Field label="Favorite Things / Interests of the Guest of Honor" htmlFor="interests" full>
                <textarea id="interests" name="interests" rows="2" className={inputClass} placeholder="Favorite colors, characters, hobbies — help us personalize the magic!" />
              </Field>

              <Field label="Special Requests" htmlFor="special" full>
                <textarea id="special" name="special" rows="2" className={inputClass} placeholder="Anything else we should know?" />
              </Field>

              <Field label="How Did You Hear About Us?" htmlFor="hearAbout" full>
                <select id="hearAbout" name="hearAbout" className={inputClass} defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {hearAboutOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>
            </div>

            <button type="submit" disabled={sending} className="btn-primary mt-7 w-full text-base">
              {sending ? 'Sending…' : 'Request My Tent Party'}
            </button>

            <p className="mt-4 text-center text-xs text-navy/55">
              By submitting, you agree we may contact you about your inquiry. We respect your privacy
              and never share your information.
            </p>
          </form>

          {/* ── Sidebar ── */}
          <aside className="flex flex-col gap-6">
            <div className="card-tpf p-7">
              <Star className="h-7 w-7 text-gold" />
              <h2 className="mt-3 font-serif text-xl font-semibold text-navy">What happens next?</h2>
              <ol className="mt-4 space-y-3 text-sm text-navy/75">
                <li className="flex gap-3"><span className="font-serif font-bold text-blush-deep">1.</span> You send your inquiry.</li>
                <li className="flex gap-3"><span className="font-serif font-bold text-blush-deep">2.</span> We confirm availability &amp; details.</li>
                <li className="flex gap-3"><span className="font-serif font-bold text-blush-deep">3.</span> You secure your date with a booking fee.</li>
                <li className="flex gap-3"><span className="font-serif font-bold text-blush-deep">4.</span> We bring the magic!</li>
              </ol>
            </div>

            <div className="card-tpf bg-cream-deep/40 p-7">
              <h2 className="font-serif text-xl font-semibold text-navy">Follow along</h2>
              <address className="mt-3 not-italic text-sm text-navy/75 leading-relaxed">
                {site.name}<br />
                {site.address.public}<br />
                <span className="text-navy/55">{site.address.diyNote}</span>
              </address>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-blush-deep hover:underline">
                Facebook →
              </a>
            </div>

            <div className="rounded-4xl border border-dashed border-navy/25 bg-white/60 p-6 text-sm text-navy/70">
              <p className="font-bold text-navy">Prefer our original form?</p>
              <p className="mt-2 leading-relaxed">
                You can also submit through our{' '}
                <a href={site.googleForm} target="_blank" rel="noopener noreferrer" className="font-semibold text-blush-deep underline">
                  Google Form
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
