
function App() {
  return (
    <main className="min-h-screen bg-[#0b0f0d] flex items-center justify-center p-6">
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

        <button className="mt-8 rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300">
          Explore Music
        </button>
      </div>
    </main>
  )
}

export default App
