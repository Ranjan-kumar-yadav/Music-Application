
const moodStyles = {
  Angry: {
    gradient: 'from-red-500/30 via-orange-950/60 to-[#0b0f0d]',
    symbol: 'ϟ',
    description: 'Turn up the intensity',
  },
  Happy: {
    gradient: 'from-yellow-400/30 via-lime-950/60 to-[#0b0f0d]',
    symbol: '☀',
    description: 'Keep the good vibes going',
  },
  Neutral: {
    gradient: 'from-teal-400/30 via-emerald-950/60 to-[#0b0f0d]',
    symbol: '〰',
    description: 'Find your natural rhythm',
  },
  Sad: {
    gradient: 'from-blue-500/30 via-indigo-950/60 to-[#0b0f0d]',
    symbol: '☾',
    description: 'Let the melodies flow',
  },
  Surprise: {
    gradient: 'from-purple-500/30 via-fuchsia-950/60 to-[#0b0f0d]',
    symbol: '✳',
    description: 'Discover something unexpected',
  },
}

function MoodCard({ mood, onSelect }) {
  const style = moodStyles[mood] ?? moodStyles.Neutral

  return (
    <button
      type="button"
      onClick={() => onSelect?.(mood)}
      className={`group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${style.gradient} p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/5 focus:outline-none focus:ring-2 focus:ring-green-400`}
      aria-label={`Explore ${mood} mood`}
    >
      <span className="absolute -right-3 -top-8 text-8xl text-white/[0.06] transition duration-300 group-hover:scale-110">
        {style.symbol}
      </span>

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-2xl text-green-300">
        {style.symbol}
      </div>

      <div className="relative mt-6">
        <h3 className="text-xl font-bold text-white">{mood}</h3>
        <p className="mt-1 text-sm text-gray-400">{style.description}</p>
      </div>

      <span className="absolute bottom-5 right-4 text-lg text-green-400 transition group-hover:translate-x-1">
        →
      </span>
    </button>
  )
}

export default MoodCard
