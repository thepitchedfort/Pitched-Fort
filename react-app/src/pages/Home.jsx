import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { themes } from '../data/themes'
import { addons } from '../data/addons'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import HowItWorks from '../components/HowItWorks'
import ServiceCompare from '../components/ServiceCompare'
import PricingTable from '../components/PricingTable'
import ThemeCard from '../components/ThemeCard'
import AddonCard from '../components/AddonCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Logo from '../components/Logo'
import { StarField, Star, Moon, Bunting } from '../components/Decorations'

export default function Home() {
  const featuredThemes = themes.slice(0, 6)
  const previewAddons = addons.slice(0, 6)

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-deep text-cream">
        <StarField />
        <Moon className="pointer-events-none absolute right-8 top-10 h-16 w-16 text-gold opacity-80 animate-floaty" />
        <div className="container-tpf relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="font-script text-3xl text-blush sm:text-4xl">a little magic at bedtime</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Luxury Sleepover Tent Parties for Unforgettable Celebrations
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-cream/80 leading-relaxed lg:mx-0">
              We create styled, cozy, photo-worthy sleepover experiences for birthdays and special
              celebrations in {site.serviceArea}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button to="/contact" variant="blush">Book Your Tent Party</Button>
              <Button to="/pricing" variant="secondary" className="!border-cream !text-cream hover:!bg-cream hover:!text-navy">
                View Pricing
              </Button>
              <Button to="/themes" variant="secondary" className="!border-cream/60 !text-cream hover:!bg-cream hover:!text-navy">
                Explore Themes
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/70 lg:justify-start">
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-gold" /> Fully styled setups</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-gold" /> Full-service or DIY</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-gold" /> Shreveport &amp; nearby</span>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-full bg-blush/30 blur-2xl sm:block" />
            <div className="absolute -bottom-6 -right-2 hidden h-28 w-28 rounded-full bg-sage/30 blur-2xl sm:block" />
            <ImagePlaceholder
              src="/photos/hero.jpg"
              ratio="aspect-[4/5]"
              alt="A styled Pitched Fort sleepover with pink and gold tents, balloons, and cozy details"
              className="relative shadow-soft ring-1 ring-cream/20"
            />
          </div>
        </div>
        <div className="h-6 bg-cream" style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }} />
      </section>

      {/* ───────── VALUE PROP ───────── */}
      <section className="container-tpf py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">the pitched fort promise</p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Adorable, organized, and absolutely worth booking
          </h2>
          <p className="mt-4 text-navy/70 leading-relaxed">
            From the first twinkle light to the last goodbye, we handle the details so you can soak up
            the memories. Every tent party is styled with love, set up with care, and designed to feel
            dreamy from every angle — a celebration parents trust and kids never forget.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { icon: '🎀', title: 'Boutique styling', text: 'Curated themes and thoughtful details that look straight out of a magazine.' },
            { icon: '🧸', title: 'Cozy & comfortable', text: 'Plush bedding, soft lighting, and snuggly spots made for sweet dreams.' },
            { icon: '📸', title: 'Photo-worthy moments', text: 'Picture-perfect setups your whole family will want to remember.' },
          ].map((card) => (
            <div key={card.title} className="card-tpf p-7">
              <span className="text-4xl" aria-hidden="true">{card.icon}</span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── WHAT WE DO ───────── */}
      <section className="bg-cream-deep/50 py-16">
        <div className="container-tpf grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder src="/photos/styled-detail.jpg" ratio="aspect-[5/4]" alt="A styled Pitched Fort sleepover setup with pink pillows and cozy details" />
          <div>
            <p className="eyebrow">what we do</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Sleepover magic, beautifully handled
            </h2>
            <p className="mt-4 text-navy/70 leading-relaxed">
              The Pitched Fort designs and delivers complete luxury sleepover experiences — teepee
              tents, dreamy bedding, themed décor, soft lighting, and all the elevated little touches.
              Choose a fully styled full-service setup or a budget-friendly DIY kit you pick up from
              our Shreveport studio. Either way, the wow is included.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/about" variant="primary">Our Story</Button>
              <Button to="/gallery" variant="secondary">See the Gallery</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="container-tpf py-16">
        <SectionHeading
          eyebrow="how it works"
          title="Five sweet steps to your celebration"
          subtitle="Booking your dream sleepover is simple from start to sparkle."
          className="mb-12"
        />
        <HowItWorks />
      </section>

      {/* ───────── FULL-SERVICE VS DIY ───────── */}
      <section className="bg-cream-deep/50 py-16">
        <div className="container-tpf">
          <SectionHeading
            eyebrow="two easy ways to celebrate"
            title="Full-Service vs. DIY Pickup"
            subtitle="Whether you want it all done for you or love a hands-on project, we’ve got an option you’ll adore."
            className="mb-12"
          />
          <ServiceCompare />
        </div>
      </section>

      {/* ───────── FEATURED THEMES ───────── */}
      <section className="container-tpf py-16">
        <SectionHeading
          eyebrow="featured themes"
          title="Themes as unique as the guest of honor"
          subtitle="A peek at a few favorites — explore the full collection for even more dreamy options."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredThemes.map((theme) => (
            <ThemeCard key={theme.name} theme={theme} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/themes" variant="primary">Explore All Themes</Button>
        </div>
      </section>

      {/* ───────── ADD-ON PREVIEW ───────── */}
      <section className="relative overflow-hidden bg-navy py-16 text-cream">
        <StarField className="opacity-50" />
        <div className="container-tpf relative">
          <SectionHeading
            eyebrow="elevate the night"
            title="Delightful add-ons"
            subtitle="Sprinkle in extra magic with treats, keepsakes, and showstopping moments."
            className="mb-12 [&_h2]:text-cream [&_p]:text-cream/80"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewAddons.map((addon) => (
              <AddonCard key={addon.name} addon={addon} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/add-ons" variant="blush">View All Add-Ons</Button>
          </div>
        </div>
      </section>

      {/* ───────── PRICING PREVIEW ───────── */}
      <section className="container-tpf py-16">
        <SectionHeading
          eyebrow="simple, transparent pricing"
          title="Find the perfect party size"
          subtitle="Pricing scales with your guest list, with full-service and DIY options for every celebration."
          className="mb-12"
        />
        <PricingTable />
        <div className="mt-10 text-center">
          <Button to="/contact" variant="primary">Get Your Custom Quote</Button>
        </div>
      </section>

      {/* ───────── GALLERY PREVIEW ───────── */}
      <section className="bg-cream-deep/50 py-16">
        <div className="container-tpf">
          <SectionHeading
            eyebrow="a peek inside"
            title="Styled celebration moments"
            subtitle="Real magic, captured. Here's a peek at some of our favorite styled setups."
            className="mb-12"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { src: '/photos/moment-full-service.jpg', label: 'Full venue transformation' },
              { src: '/photos/moment-movie-night.jpg', label: 'Movie night details' },
              { src: '/photos/moment-swiftie.jpg', label: 'Swiftie touches' },
              { src: '/photos/moment-under-the-sea.jpg', label: 'Under the sea' },
              { src: '/photos/moment-disco.jpg', label: 'Disco glam' },
              { src: '/photos/moment-paint-bar.jpg', label: 'Craft & paint bar' },
              { src: '/photos/moment-spa.jpg', label: 'Mini spa night' },
              { src: '/photos/moment-sleep-masks.jpg', label: 'Personalized keepsakes' },
            ].map((g, i) => (
              <ImagePlaceholder key={i} src={g.src} ratio="aspect-square" alt={g.label} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/gallery" variant="primary">Visit the Gallery</Button>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="container-tpf py-16">
        <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-blush-soft via-cream to-sage-soft/60 p-10 text-center sm:p-16">
          <Bunting className="absolute inset-x-0 top-0 h-10 w-full opacity-80" />
          <div className="relative">
            <Logo variant="icon" className="mx-auto h-14 w-14" />
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Ready to create something dreamy?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy/70 leading-relaxed">
              Tell us about your celebration and we’ll help you design a sleepover they’ll talk about
              for years. We can’t wait to meet your little guest of honor!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact" variant="primary">Request My Tent Party</Button>
              <Button to="/faq" variant="secondary">Read the FAQ</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
