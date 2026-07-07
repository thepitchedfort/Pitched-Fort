// A single add-on card: emoji marker, name, price pill, description.
export default function AddonCard({ addon }) {
  return (
    <div className="card-tpf flex flex-col p-5 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blush-soft/60 text-2xl" aria-hidden="true">
          {addon.icon}
        </span>
        <span className="rounded-full bg-sage-soft/50 px-3 py-1 text-xs font-bold text-sage-deep">
          {addon.price}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-navy">{addon.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{addon.description}</p>
    </div>
  )
}
