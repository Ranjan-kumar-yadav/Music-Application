
import Button from './Button'

function Navbar() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Discover', href: '#discover' },
    { label: 'Library', href: '#library' },
  ]

  return (
    <header className="border-b border-white/10 bg-[#0b0f0d]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Renix<span className="text-green-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-green-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button onClick={() => console.log('Sign in clicked')}>
          Sign In
        </Button>
      </nav>
    </header>
  )
}

export default Navbar
