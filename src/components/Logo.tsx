interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Maximize the Potential Logo"
      className={`object-contain ${className}`}
    />
  )
}
