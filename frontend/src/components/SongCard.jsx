
function SongCard({
  title,
  artist,
  mood = 'Chill',
  artwork = 'from-emerald-500/30 via-green-900/40 to-[#101411]',
  onPlay,
}) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.06]">
      {/* Artwork */}
      <div
        className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${artwork}`}
      >
        <div className="absolute h-28 w-28 rounded-full border border-white/10" />
        <div className="absolute h-20 w-20 rounded-full border border-white/15" />

        <span className="relative text-5xl text-white/80">♫</span>

        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/80 backdrop-blur">
          {mood}
        </span>

        <button
          type="button"
          onClick={onPlay}
          aria-label={`Play ${title}`}
          className="absolute bottom-3 right-3 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-green-400 text-xl text-black opacity-0 shadow-lg transition duration-200 hover:scale-105 hover:bg-green-300 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
        >
          ▶
        </button>
      </div>

      {/* Song information */}
      <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-4">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-white">{title}</h3>
          <p className="mt-1 truncate text-sm text-gray-400">{artist}</p>
        </div>

        <button
          type="button"
          onClick={onPlay}
          aria-label={`Play ${title}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-gray-300 transition hover:border-green-400/40 hover:text-green-400"
        >
          ▶
        </button>
      </div>
    </article>
  )
}

export default SongCard
