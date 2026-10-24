
import SongCard from '../components/SongCard'

function Favorites({ songs = [], onToggleFavorite }) {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-12 text-white">
      <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
        YOUR PERSONAL COLLECTION
      </p>

      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
        Your <span className="text-green-400">Favorites.</span>
      </h1>

      <p className="mt-4 mb-10 text-gray-400">
        Keep the songs you love in one place.
      </p>

      {songs.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {songs.map((song) => (
            <SongCard
              key={song.title}
              title={song.title}
              artist={song.artist}
              mood={song.mood}
              artwork={song.artwork}
              isFavorite={true}
              onToggleFavorite={() => onToggleFavorite(song)}
              onPlay={() => console.log('Selected song:', song.title)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/10">
            <span className="text-3xl text-green-400">♥</span>
          </div>

          <h2 className="text-2xl font-bold">No favorites yet</h2>

          <p className="mx-auto mt-3 max-w-md text-gray-400">
            Your favorite songs will appear here. Explore your music and save
            the songs you love.
          </p>
        </div>
      )}
    </section>
  )
}

export default Favorites
