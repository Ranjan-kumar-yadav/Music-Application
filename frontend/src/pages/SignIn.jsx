
import { useState } from 'react'
import Button from '../components/Button'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Sign in form submitted')
  }

  return (
    <main className="flex min-h-screen bg-[#0b0f0d] text-white">
      {/* Branding panel */}
      <section className="relative hidden flex-1 flex-col justify-between overflow-hidden border-r border-white/10 bg-gradient-to-br from-[#14251a] via-[#0d1510] to-[#0b0f0d] p-10 lg:flex xl:p-16">
        <a href="/" className="text-3xl font-bold tracking-tight">
          Renix<span className="text-green-400">.</span>
        </a>

        <div className="relative z-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            YOUR MUSIC. YOUR MOOD.
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight xl:text-6xl">
            Every mood
            <br />
            has a <span className="text-green-400">melody.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-gray-400">
            Find your sound, discover new favourites and make every moment
            your own.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-2xl text-green-400">
              ♫
            </div>
            <div>
              <p className="font-medium">Your next favourite song awaits.</p>
              <p className="mt-1 text-sm text-gray-500">
                A new way to experience music.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Renix. Made for music lovers.
        </p>

        <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-green-400/10 blur-[100px]" />
      </section>

      {/* Sign in form */}
      <section className="flex w-full items-center justify-center px-5 py-10 sm:px-8 lg:w-[520px] lg:flex-none xl:w-[600px]">
        <div className="w-full max-w-md">
          <a href="/" className="mb-12 inline-block text-3xl font-bold lg:hidden">
            Renix<span className="text-green-400">.</span>
          </a>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Welcome back
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Sign in to Renix
            </h2>

            <p className="mt-3 leading-6 text-gray-400">
              Continue your music journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-300"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => console.log('Forgot password selected')}
                  className="text-sm text-green-400 transition hover:text-green-300"
                >
                  Forgot password?
                </button>
              </div>

              <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.04] pr-4 transition focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-400/10">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-gray-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="shrink-0 text-sm text-gray-400 transition hover:text-green-400"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="mt-1 h-4 w-4 accent-green-400"
              />

              <label htmlFor="remember" className="text-sm text-gray-400">
                Remember me on this device
              </label>
            </div>

            <Button type="submit" className="w-full rounded-xl py-3.5">
              Sign In <span className="ml-2">→</span>
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="font-semibold text-green-400 transition hover:text-green-300"
            >
              Create account
            </a>
          </p>

          <p className="mt-10 text-center text-xs leading-5 text-gray-600">
            By continuing, you agree to Renix's Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </section>
    </main>
  )
}

export default SignIn
