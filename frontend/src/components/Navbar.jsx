
import Button from './Button'

function Navbar({ onSignIn, onNavigate, currentPage }) {
  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Discover', page: 'discover' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f0d]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <button
          type="button"
          onClick={() => onNavigate?.('home')}
          className="text-2xl font-bold tracking-tight text-white"
        >
          Renix<span className="text-green-400">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => onNavigate?.(link.page)}
              className={`text-sm transition hover:text-green-400 ${
                currentPage === link.page
                  ? 'font-semibold text-green-400'
                  : 'text-gray-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <Button onClick={onSignIn}>Sign In</Button>
      </nav>
    </header>
  )
}

export default Navbar
