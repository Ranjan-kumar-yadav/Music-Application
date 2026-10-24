
import { useState } from 'react'
import Library from './pages/Library'
import Button from './components/Button'
import Navbar from './components/Navbar'
import SongCard from './components/SongCard'
import MoodCard from './components/MoodCard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Favorites from './pages/Favorites'

const songs = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    mood: 'Happy',
    artwork: 'from-red-500/40 via-orange-900/50 to-black',
  },
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    mood: 'Happy',
    artwork: 'from-orange-400/40 via-amber-900/50 to-black',
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    mood: 'Surprise',
    artwork: 'from-fuchsia-500/40 via-purple-900/50 to-black',
  },
  {
    title: 'Chaleya',
    artist: 'Arijit Singh',
    mood: 'Happy',
    artwork: 'from-pink-400/40 via-rose-900/50 to-black',
  },
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    mood: 'Neutral',
    artwork: 'from-emerald-500/30 via-green-900/40 to-black',
  },
  {
    title: 'Believer',
    artist: 'Imagine Dragons',
    mood: 'Angry',
    artwork: 'from-red-600/40 via-orange-950/50 to-black',
  },
  {
    title: 'Sajni',
    artist: 'Arijit Singh',
    mood: 'Sad',
    artwork: 'from-blue-500/40 via-indigo-950/50 to-black',
  },
  {
    title: 'O Maahi',
    artist: 'Arijit Singh',
    mood: 'Neutral',
    artwork: 'from-teal-400/30 via-emerald-950/50 to-black',
  },
]

const moods = ['Happy', 'Sad', 'Angry', 'Neutral', 'Surprise']

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMood, setSelectedMood] = useState('All')
  const [favoriteSongs, setFavoriteSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const toggleFavorite = (song) => {
    setFavoriteSongs((previousFavorites) => {
      const alreadyFavorite = previousFavorites.some(
        (favorite) => favorite.title === song.title
      )

      if (alreadyFavorite) {
        return previousFavorites.filter(
          (favorite) => favorite.title !== song.title
        )
      }

      return [...previousFavorites, song]
    })
  }
  if (currentPage === 'favorites') {
    return (
      <Favorites
        songs={favoriteSongs}
        onToggleFavorite={toggleFavorite}
      />
    )
  }
  if (currentPage === 'signin') {
    return <SignIn />
  }

  if (currentPage === 'signup') {
    return <SignUp onSignIn={() => setCurrentPage('signin')} />
  }

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesMood =
      selectedMood === 'All' || song.mood === selectedMood

    return matchesSearch && matchesMood
  })

  return (
    <main className="min-h-screen bg-[#0b0f0d] text-white">
      <Navbar
        onSignIn={() => setCurrentPage('signin')}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      {currentPage === 'discover' ? (
        <section className="mx-auto min-h-screen max-w-7xl px-6 py-12 sm:py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              FIND YOUR NEXT FAVOURITE
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Discover <span className="text-green-400">Music.</span>
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Explore songs, search for your favourite artists, and find
              music that matches your mood.
            </p>
          </div>

          <div className="mb-10">
            <label htmlFor="song-search" className="sr-only">
              Search songs or artists
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 transition focus-within:border-green-400/50 sm:px-5">
              <span className="text-xl text-green-400" aria-hidden="true">
                ⌕
              </span>

              <input
                id="song-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search songs or artists..."
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="mb-12">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold sm:text-2xl">
                Explore by mood
              </h2>

              <button
                type="button"
                onClick={() => setSelectedMood('All')}
                className={`text-sm transition hover:text-green-300 ${selectedMood === 'All'
                  ? 'text-green-400'
                  : 'text-gray-400'
                  }`}
              >
                Show all songs
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {moods.map((mood) => (
                <div
                  key={mood}
                  className={`rounded-2xl transition ${selectedMood === mood
                    ? 'ring-2 ring-green-400'
                    : ''
                    }`}
                >
                  <MoodCard
                    mood={mood}
                    onSelect={setSelectedMood}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                  YOUR MUSIC SPACE
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {selectedMood === 'All'
                    ? 'Explore songs'
                    : `${selectedMood} songs`}
                </h2>
              </div>

              <p className="text-sm text-gray-500">
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
                    isFavorite={favoriteSongs.some((favorite) => favorite.title === song.title)}
                    onToggleFavorite={() => toggleFavorite(song)}
                    onPlay={() => {
                      setCurrentSong(song)
                      setIsPlaying(true)
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-12 text-center">
                <p className="text-xl font-semibold">
                  No songs found
                </p>

                <p className="mt-2 text-gray-400">
                  Try another song, artist, or mood.
                </p>

                <Button
                  variant="secondary"
                  className="mt-5"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedMood('All')
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      ) : currentPage === 'library' ? (
        <Library songs={songs} />
      ) : (
        <>
          <section
            id="home"
            className="relative flex min-h-[calc(100vh-89px)] items-center overflow-hidden px-6 py-16"
          >
            <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  MUSIC THAT MATCHES YOU
                </div>

                <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                  YOUR MUSIC.
                  <br />
                  YOUR <span className="text-green-400">MOOD.</span>
                </h1>

                <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
                  Discover your next favourite song. Explore new sounds
                  and find music that matches the way you feel.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Button onClick={() => setCurrentPage('discover')}>
                    Explore Music <span className="ml-2">→</span>
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() =>
                      document.getElementById('moods')?.scrollIntoView({
                        behavior: 'smooth',
                      })
                    }
                  >
                    Explore Moods
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => setCurrentPage('signup')}
                  >
                    Create Account <span className="ml-2">→</span>
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-2xl font-bold">Your vibe</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Your music journey
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold">5 moods</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Emotion discovery
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold">One place</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Made for music
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute inset-8 rounded-full bg-green-400/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b2920] via-[#121914] to-[#0d100e] p-6 shadow-2xl sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">
                      YOUR DAILY SOUND
                    </span>

                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-300">
                      RENIX MIX
                    </span>
                  </div>

                  <div className="relative mt-8 flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-green-300/20 via-emerald-900/40 to-black">
                    <div className="absolute h-64 w-64 rounded-full border border-green-300/20" />
                    <div className="absolute h-48 w-48 rounded-full border border-green-300/30" />
                    <div className="absolute h-32 w-32 rounded-full bg-green-400/20 blur-2xl" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-green-200/30 bg-black/30 shadow-xl">
                      <span className="text-5xl text-green-300">♫</span>
                    </div>

                    <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
                      <p className="text-sm font-semibold">Find your rhythm</p>
                      <p className="mt-1 text-xs text-gray-400">
                        Every mood has a melody
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5">
                    {Array.from({ length: 28 }, (_, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-full bg-green-400/80"
                        style={{
                          height: `${12 + ((index * 17) % 36)}px`,
                          opacity: 0.4 + ((index % 5) * 0.12),
                        }}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-center text-xs tracking-widest text-gray-500">
                    PRESS PLAY ON YOUR FEELINGS
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="featured" className="px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                HANDPICKED FOR YOU
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Featured Music
              </h2>

              <p className="mt-3 max-w-xl text-gray-400">
                Discover sounds worth adding to your playlist.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {songs.slice(0, 4).map((song) => (
                  <SongCard
                    key={song.title}
                    {...song}
                    isFavorite={favoriteSongs.some((favorite) => favorite.title === song.title)}
                    onToggleFavorite={() => toggleFavorite(song)}
                    onPlay={() => {
                      setCurrentSong(song)
                      setIsPlaying(true)
                    }}
                  />
                ))}
              </div>

              <Button
                className="mt-8"
                onClick={() => setCurrentPage('discover')}
              >
                Discover all music →
              </Button>
            </div>
          </section>

          <section id="moods" className="px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                MUSIC MEETS EMOTION
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                What’s your mood{' '}
                <span className="text-green-400">today?</span>
              </h2>

              <p className="mt-4 max-w-md leading-7 text-gray-400">
                Every feeling has a soundtrack. Explore a mood and find
                the sounds that fit your moment.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {moods.map((mood) => (
                  <MoodCard
                    key={mood}
                    mood={mood}
                    onSelect={() => {
                      setSelectedMood(mood)
                      setCurrentPage('discover')
                    }}
                  />
                ))}
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Mood selection is a UI preview. AI-based emotion detection
                will be connected in a later integration step.
              </p>
            </div>
          </section>
        </>
      )}
            {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#101411]/95 px-4 py-3 shadow-2xl backdrop-blur-lg sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center gap-3 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400/30 to-emerald-900/50 text-2xl text-green-300">
              ♫
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-white">
                {currentSong.title}
              </p>
              <p className="truncate text-sm text-gray-400">
                {currentSong.artist}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? 'Pause song' : 'Play song'}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-400 text-black transition hover:bg-green-300"
            >
              {isPlaying ? 'Ⅱ' : '▶'}
            </button>

            <button
              type="button"
              onClick={() => {
                setCurrentSong(null)
                setIsPlaying(false)
              }}
              aria-label="Close player"
              className="shrink-0 px-2 py-2 text-xl text-gray-400 transition hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
