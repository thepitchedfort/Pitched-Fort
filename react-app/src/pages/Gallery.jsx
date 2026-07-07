import { site } from '../data/site'
import PageHero from '../components/PageHero'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Button from '../components/Button'

// Gallery is organized by category. To add more photos, drop the file
// into public/photos and add another { src, label } entry below.
const categories = [
  {
    title: 'Sleepover Setups',
    icon: '⛺',
    photos: [
      { src: '/photos/hero.jpg', label: 'Pink & gold hearts' },
      { src: '/photos/cow-at-the-disco.jpg', label: 'Cow at the disco' },
      { src: '/photos/garden-flowers.jpg', label: 'Garden flowers' },
    ],
  },
  {
    title: 'Themes',
    icon: '🎨',
    photos: [
      { src: '/photos/glow.jpg', label: 'Let’s glow crazy' },
      { src: '/photos/space.jpg', label: 'Space' },
      { src: '/photos/jungle.jpg', label: 'Jungle' },
      { src: '/photos/summer-in-paris.jpg', label: 'Summer in Paris' },
    ],
  },
  {
    title: 'Seasonal',
    icon: '✨',
    photos: [
      { src: '/photos/halloween.jpg', label: 'Halloween' },
      { src: '/photos/christmas.jpg', label: 'Christmas' },
    ],
  },
  {
    title: 'Custom Celebrations',
    icon: '💫',
    photos: [
      { src: '/photos/custom-color.jpg', label: 'Custom colors' },
      { src: '/photos/custom-theme.jpg', label: 'Custom theme' },
    ],
  },
]

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="a peek inside"
        title="Our Gallery"
        subtitle="A look at the dreamy, photo-worthy setups we love to create. Follow along on Facebook for the latest celebrations!"
      >
        <Button href={site.facebook} variant="blush">See More on Facebook</Button>
      </PageHero>

      <section className="container-tpf py-16">
        {categories.map((cat) => (
          <div key={cat.title} className="mb-14 last:mb-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">{cat.icon}</span>
              <h2 className="font-serif text-2xl font-semibold text-navy">{cat.title}</h2>
              <span className="h-px flex-1 bg-navy/10" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {cat.photos.map((photo, i) => (
                <ImagePlaceholder
                  key={i}
                  src={photo.src}
                  ratio="aspect-square"
                  alt={`${photo.label} — ${cat.title}`}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
