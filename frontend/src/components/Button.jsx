
function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50'

  const variants = {
    primary:
      'bg-green-400 text-black hover:bg-green-300',
    secondary:
      'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
