
import { useMemo, useState } from 'react'
import Button from '../components/Button'
import SongCard from '../components/SongCard'

function Library({ songs }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMood, setSelectedMood] = useState('All')
  const [selectedGenre, setSelectedGenre] = useState('All')

  const genres = useMemo(
    () => ['All', ...new Set(songs.map((song) => song.genre || 'Other'))],
    [songs],
  )

  const filteredSongs = songs.filter((song) => {
    const query = searchQuery.trim().toLowerCase()

    const matchesSearch =
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)

    const matchesMood =
      selectedMood === 'All' || song.mood === selectedMood

    const matchesGenre =
      selectedGenre === 'All' ||
      (song.genre || 'Other') === selectedGenre

    return matchesSearch && matchesMood && matchesGenre
  })

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedMood('All')
    setSelectedGenre('All')
  }

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
          YOUR MUSIC COLLECTION
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          Music <span className="text-green-400">Library.</span>
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          Explore the collection, find your favourite tracks, and filter
          songs by mood or genre.
        </p>
      </div>

      <div className="mb-6">
        <label htmlFor="library-search" className="sr-only">
          Search songs or artists
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 transition focus-within:border-green-400/50 sm:px-5">
          <span className="text-xl text-green-400" aria-hidden="true">
            ⌕
          </span>

          <input
            id="library-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search songs or artists..."
            className="w-full bg-transparent py-4 text-white outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="library-mood"
            className="mb-2 block text-sm text-gray-400"
          >
            Filter by mood
          </label>

          <select
            id="library-mood"
            value={selectedMood}
            onChange={(event) => setSelectedMood(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#151b17] px-4 py-3 text-white outline-none focus:border-green-400"
          >
            {['All', 'Happy', 'Sad', 'Angry', 'Neutral', 'Surprise'].map(
              (mood) => (
                <option key={mood} value={mood}>
                  {mood === 'All' ? 'All moods' : mood}
                </option>
              ),
            )}
          </select>
        </div>

        <div>
          <label
            htmlFor="library-genre"
            className="mb-2 block text-sm text-gray-400"
          >
            Filter by genre
          </label>

          <select
            id="library-genre"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#151b17] px-4 py-3 text-white outline-none focus:border-green-400"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre === 'All' ? 'All genres' : genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">All Songs</h2>
          <p className="mt-1 text-sm text-gray-400">
            Browse the Renix collection
          </p>
        </div>

        <p className="text-sm text-gray-500" aria-live="polite">
          {filteredSongs.length}{' '}
          {filteredSongs.length === 1 ? 'song' : 'songs'} found
        </p>
      </div>

      {filteredSongs.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filteredSongs.map((song) => (
            <SongCard
              key={song.title}
              title={song.title}
              artist={song.artist}
              mood={song.mood}
              artwork={song.artwork}
              onPlay={() => console.log('Selected song:', song.title)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-12 text-center">
          <h3 className="text-xl font-semibold">No songs found</h3>
          <p className="mt-2 text-gray-400">
            Try another search or change your filters.
          </p>
          <Button
            variant="secondary"
            className="mt-5"
            onClick={resetFilters}
          >
            Clear filters
          </Button>
        </div>
      )}
    </section>
  )
}

export default Library
