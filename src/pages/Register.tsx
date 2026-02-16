import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, FooterContent } from '../components/Layout'

export default function Register() {
  const [submitted, setSubmitted] = useState(false)
  const [role, setRole] = useState<string>('')
  const [socialPlatforms, setSocialPlatforms] = useState<string[]>([])
  const [socialUrls, setSocialUrls] = useState<{ [key: string]: string }>({})
  const [socialErrors, setSocialErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate that a role is selected
    if (!role) {
      return
    }
    // Validate social media URLs if platforms are selected
    let hasErrors = false
    const errors: { [key: string]: string } = {}
    socialPlatforms.forEach((platform) => {
      const url = socialUrls[platform] || ''
      if (url) {
        const isValid = validateSocialUrl(platform, url)
        if (!isValid) {
          errors[platform] = `Please enter a valid ${platform === 'x' ? 'X (Twitter)' : platform.charAt(0).toUpperCase() + platform.slice(1)} URL`
          hasErrors = true
        }
      }
    })
    setSocialErrors(errors)
    if (hasErrors) {
      return
    }
    setSubmitted(true)
  }

  const validateSocialUrl = (platform: string, url: string): boolean => {
    if (!url) return true // Optional field
    const lowerUrl = url.toLowerCase()
    switch (platform) {
      case 'instagram':
        return /instagram\.com\//.test(lowerUrl)
      case 'linkedin':
        return /linkedin\.com\/in\//.test(lowerUrl)
      case 'x':
        return /(twitter\.com\/|x\.com\/)/.test(lowerUrl)
      default:
        return true
    }
  }

  const getSocialPattern = (platformKey: string): string => {
    if (platformKey === 'instagram') return String.raw`.*instagram\.com/.*`
    if (platformKey === 'linkedin') return String.raw`.*linkedin\.com/in/.*`
    return String.raw`.*(twitter\.com/|x\.com/).*`
  }

  const handleRoleChange = (selectedRole: string) => {
    setRole(selectedRole)
  }

  const handleSocialPlatformChange = (platform: string) => {
    const isAdding = !socialPlatforms.includes(platform)
    setSocialPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
    if (isAdding) {
      setSocialUrls((prev) => ({ ...prev, [platform]: '' }))
    } else {
      setSocialUrls((prev) => {
        const newUrls = { ...prev }
        delete newUrls[platform]
        return newUrls
      })
      setSocialErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[platform]
        return newErrors
      })
    }
  }

  const handleSocialUrlChange = (platform: string, url: string) => {
    setSocialUrls((prev) => ({ ...prev, [platform]: url }))
    // Clear error when user starts typing
    if (socialErrors[platform]) {
      setSocialErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[platform]
        return newErrors
      })
    }
  }

  return (
    <Layout>
      <div className="relative z-10 flex-grow flex flex-col md:flex-row min-h-[calc(100vh-64px)] bg-[var(--base-bg)]/75">
        {/* Hero Background Panel */}
        <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-[var(--base-bg)]/70 items-center justify-center overflow-hidden md:h-[calc(100vh-64px)]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Professional athlete background" 
              className="w-full h-full object-cover opacity-50 grayscale contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJFLwGhlUSFCUSiOKObJlX7NRQMDhuz9XBUp2w-wH1i81JX-POtYInt5i9OohVDpxELltA2A1Fmn7ljHlGsyuSkcW0Wbr1ZqQjaVpQWhA2JHEllphEdTZv8xHDAOf5jm2efGhkIjRFB4SgvK9Gs_eIfhYdi1arTgmOvMqpTvEedvjIBZt-az9ePaovgH8ihM4gTRjGg6GyTcZJR4UjT95fLeXJqxRXV3PjMxbnWXEOWSKiVO1k3MR66_XMXKbX4ILXuKou-MCZFOj"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--base-bg)]/50 via-[var(--base-bg)]/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--base-bg)]/40 via-transparent to-[var(--base-bg)]/40"></div>
          </div>
          <div className="relative z-10 max-w-md px-12 text-center md:text-left">
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-[-0.02em] leading-[1.1] mb-6" style={{ fontWeight: 300 }}>
              <span className="text-[var(--text-primary)]">YOUR </span>
              <span className="text-[var(--text-primary)] font-black italic">Journey </span>
              <span className="text-[var(--text-primary)]">STARTS WITH </span>
              <span className="text-[var(--neon-green)] font-black tracking-widest drop-shadow-[0_0_15px_rgba(49,237,49,0.4)]">REGISTRATION</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--neon-green)] mt-8 mb-6 shadow-[0_0_10px_rgba(49,237,49,0.5)]"></div>
            <p className="text-[var(--text-secondary)] text-lg font-light leading-relaxed">
              Secure your spot at the industry's most exclusive networking showcase. Connect with elite agents, athletes, models, entertainers, and industry leaders.
            </p>
          </div>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-3/5 lg:w-3/5 bg-[var(--base-bg)]/70 flex items-start justify-center p-8 lg:p-16 overflow-y-auto md:h-[calc(100vh-64px)]">
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="text-center space-y-6">
                <div className="size-20 bg-gradient-to-br from-[var(--kelly-green)]/25 via-[var(--spearmint)]/15 to-[var(--surface-card)] rounded-full flex items-center justify-center mx-auto border-2 border-[var(--neon-green)]/35 shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-[var(--neon-green)] drop-shadow-sm">check_circle</span>
                </div>
                <h1 className="font-display text-4xl text-[var(--text-primary)] uppercase tracking-[-0.02em]" style={{ fontWeight: 700 }}>
                  Registration Complete
                </h1>
                <p className="text-[var(--text-secondary)] text-lg">
                  Thank you for registering! We&apos;ll be in touch with more details soon.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-[var(--neon-green)] text-[var(--base-bg)] h-14 px-8 rounded-[var(--radius)] font-bold uppercase tracking-wider transition-all hover:bg-[var(--neon-green-ripe)] hover:shadow-[0_0_20px_rgba(49,237,49,0.8)]"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--neon-green)] transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>{' '}
                    Back to Home
                  </Link>
                </div>
                <div className="mb-10">
                  <h1 className="font-display text-4xl text-[var(--text-primary)] uppercase tracking-normal mb-4" style={{ fontWeight: 900 }}>
                    REGISTER FOR THE SHOWCASE
                  </h1>
                  <p className="text-[var(--text-secondary)] text-lg">Join elite athletes, models, entertainers, and industry leaders.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      required
                      placeholder="Enter your legal name"
                      className="form-input w-full h-14 px-4 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="w-full bg-[#121212]/70 border-[#1a2e1a] border-2 rounded-lg h-14 px-4 text-[var(--text-primary)] focus:ring-[var(--neon-green)] focus:border-[var(--neon-green)] transition-all placeholder:text-[var(--text-secondary)]/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#121212]/70 border-[#1a2e1a] border-2 rounded-lg h-14 px-4 text-[var(--text-primary)] focus:ring-[var(--neon-green)] focus:border-[var(--neon-green)] transition-all placeholder:text-[var(--text-secondary)]/50"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
                      I am a:
                    </div>
                    <div className="flex items-start gap-8">
                      {['Athlete', 'Model', 'Entertainer'].map((roleOption) => (
                        <label key={roleOption} htmlFor={`role-${roleOption.toLowerCase()}`} className="flex flex-col items-center gap-2 cursor-pointer">
                          <input
                            id={`role-${roleOption.toLowerCase()}`}
                            name="role"
                            type="radio"
                            value={roleOption.toLowerCase()}
                            checked={role === roleOption.toLowerCase()}
                            onChange={() => handleRoleChange(roleOption.toLowerCase())}
                            className="size-5 border-2 border-[var(--border-muted)] text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                          />
                          <span className="text-[var(--text-secondary)] font-medium text-sm text-center">{roleOption}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
                      Social Media Profiles
                    </div>
                    <div className="space-y-3 mb-4">
                      {[
                        { key: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/yourusername' },
                        { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/yourusername' },
                        { key: 'x', label: 'X.com', placeholder: 'https://x.com/yourusername' },
                      ].map((platform) => (
                        <div key={platform.key}>
                          <label className="flex items-center gap-3 cursor-pointer mb-2">
                            <input
                              type="checkbox"
                              checked={socialPlatforms.includes(platform.key)}
                              onChange={() => handleSocialPlatformChange(platform.key)}
                              className="size-5 rounded border-2 border-[var(--border-muted)] text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                            />
                            <span className="text-[var(--text-secondary)] font-medium">{platform.label}</span>
                          </label>
                          {socialPlatforms.includes(platform.key) && (
                            <div className="ml-8 mt-2">
                              <label htmlFor={`social-${platform.key}`} className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                                {platform.label} Profile URL
                              </label>
                              <input
                                id={`social-${platform.key}`}
                                type="url"
                                value={socialUrls[platform.key] || ''}
                                onChange={(e) => handleSocialUrlChange(platform.key, e.target.value)}
                                placeholder={platform.placeholder}
                                pattern={getSocialPattern(platform.key)}
                                className={`w-full bg-[#121212]/70 border-2 rounded-lg h-12 px-4 text-[var(--text-primary)] focus:ring-[var(--neon-green)] focus:border-[var(--neon-green)] transition-all placeholder:text-[var(--text-secondary)]/50 ${
                                  socialErrors[platform.key] ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-[#1a2e1a]'
                                }`}
                              />
                              {socialErrors[platform.key] && (
                                <p className="mt-1 text-xs text-red-500">{socialErrors[platform.key]}</p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--neon-green)] text-[var(--base-bg)] h-16 rounded-lg font-black uppercase tracking-[0.2em] shadow-lg shadow-[var(--neon-green)]/10 transition-all hover:bg-[var(--base-bg)] hover:text-[var(--neon-green)] hover:border-2 hover:border-[var(--neon-green)] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    SUBMIT REGISTRATION
                  </button>
                  <p className="text-center text-xs text-slate-500 font-medium">
                    By registering, you agree to our <a href="#" className="underline hover:text-[var(--neon-green)] transition-colors">Terms of Service</a> and <a href="#" className="underline hover:text-[var(--neon-green)] transition-colors">Privacy Policy</a>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <FooterContent />
    </Layout>
  )
}
