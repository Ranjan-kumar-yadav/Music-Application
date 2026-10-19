import { useState } from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'
import SongCard from './components/SongCard'
import MoodCard from './components/MoodCard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'signin') {
    return <SignIn />
  }

  if (currentPage === 'signup') {
    return <SignUp onSignIn={() => setCurrentPage('signin')} />
  }

  return (
    <main className="min-h-screen bg-[#0b0f0d] text-white">
      <Navbar onSignIn={() => setCurrentPage('signin')} />

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
              Discover your next favourite song. Explore new sounds and find
              music that matches the way you feel.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  document.getElementById('featured')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
              >
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
              {/* Navigate to the Sign Up page when Create Account is clicked */}
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
                <p className="mt-1 text-sm text-gray-500">Your music journey</p>
              </div>
              <div>
                <p className="text-2xl font-bold">5 moods</p>
                <p className="mt-1 text-sm text-gray-500">Emotion discovery</p>
              </div>
              <div>
                <p className="text-2xl font-bold">One place</p>
                <p className="mt-1 text-sm text-gray-500">Made for music</p>
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                HANDPICKED FOR YOU
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Featured Music
              </h2>
              <p className="mt-3 max-w-xl text-gray-400">
                Discover sounds worth adding to your playlist.
              </p>
            </div>
            <span className="text-sm text-gray-500">
              Made for your next mood
            </span>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            <SongCard title="Blinding Lights" artist="The Weeknd" mood="Energetic" artwork="from-red-500/40 via-orange-900/50 to-black" onPlay={() => console.log('Blinding Lights selected')} />
            <SongCard title="Shape of You" artist="Ed Sheeran" mood="Happy" artwork="from-orange-400/40 via-amber-900/50 to-black" onPlay={() => console.log('Shape of You selected')} />
            <SongCard title="Levitating" artist="Dua Lipa" mood="Feel Good" artwork="from-fuchsia-500/40 via-purple-900/50 to-black" onPlay={() => console.log('Levitating selected')} />
            <SongCard title="Chaleya" artist="Arijit Singh" mood="Romantic" artwork="from-pink-400/40 via-rose-900/50 to-black" onPlay={() => console.log('Chaleya selected')} />
          </div>
        </div>
      </section>

      <section id="moods" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                MUSIC MEETS EMOTION
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                What’s your mood <span className="text-green-400">today?</span>
              </h2>
              <p className="mt-4 max-w-md leading-7 text-gray-400">
                Every feeling has a soundtrack. Explore a mood and find the
                sounds that fit your moment.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-2xl text-green-400">
                  ♡
                </div>
                <div>
                  <h3 className="font-semibold">Discover music by emotion</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Choose how you feel to explore a matching music experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {['Happy', 'Sad', 'Angry', 'Neutral', 'Surprise'].map((mood) => (
              <MoodCard
                key={mood}
                mood={mood}
                onSelect={(selectedMood) =>
                  console.log('Selected mood:', selectedMood)
                }
              />
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Mood selection is a UI preview. AI-based emotion detection will be
            connected in a later integration step.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
