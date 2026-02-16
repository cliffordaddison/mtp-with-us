interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo-white.png"
      alt="Maximize the Potential Logo"
      className={`object-contain ${className}`}
    />
  )
}
