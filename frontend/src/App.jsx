
import Button from './components/Button'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="min-h-screen bg-[#0b0f0d]">
      <Navbar />

      <section
        id="home"
        className="flex min-h-[calc(100vh-89px)] items-center justify-center p-6"
      >
        <div className="max-w-md text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Welcome to
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white">
            Renix<span className="text-green-400">.</span>
          </h1>

          <p className="mt-4 text-gray-400">
            Your music. Your mood. Your experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => console.log('Explore Music clicked')}>
              Explore Music
            </Button>

            <Button
              variant="secondary"
              onClick={() => console.log('Discover clicked')}
            >
              Discover Music
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
