import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, FooterContent } from '../components/Layout'

export default function Register() {
  const [submitted, setSubmitted] = useState(false)
  const [roles, setRoles] = useState<string[]>([])
  const [socialPlatforms, setSocialPlatforms] = useState<string[]>([])
  const [socialUrls, setSocialUrls] = useState<{ [key: string]: string }>({})
  const [socialErrors, setSocialErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate at least one role is selected
    if (roles.length === 0) {
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

  const handleRoleChange = (role: string) => {
    setRoles((prev) => (prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]))
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
      <div className="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        {/* Hero Background Panel */}
        <div className="hidden md:flex md:w-2/5 lg:w-2/5 relative bg-slate-900 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-3panel.png')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative z-10 max-w-md px-12 text-center md:text-left">
            <h2 className="font-display text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight mb-6">
              Your <span className="text-[var(--accent)]">Journey</span> Starts Here
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--combo-northern-neon)] via-[var(--combo-northern-lime)] via-[var(--combo-northern-spearmint)] to-[var(--combo-northern-neon)] mb-6 mx-auto md:mx-0 shadow-sm shadow-[var(--combo-northern-neon)]/40" />
            <p className="text-slate-300 text-lg leading-relaxed">
              Join MTP Talent Group and connect with elite agents, fellow athletes, and industry leaders across Canada and the USA.
            </p>
          </div>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-3/5 lg:w-3/5 bg-white flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="text-center space-y-6">
                <div className="size-20 bg-gradient-to-br from-[var(--combo-northern-forest)]/25 via-[var(--combo-northern-spearmint)]/15 to-[var(--combo-northern-white)] rounded-full flex items-center justify-center mx-auto border-2 border-[var(--combo-northern-forest)]/35 shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-[var(--combo-northern-forest)] drop-shadow-sm">check_circle</span>
                </div>
                <h1 className="font-display text-4xl text-slate-900 uppercase tracking-tight">
                  Registration Complete
                </h1>
                <p className="text-slate-600 text-lg">
                  Thank you for registering! We&apos;ll be in touch with more details soon.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white h-14 px-8 rounded-xl font-bold uppercase tracking-wider transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
                    <span className="material-symbols-outlined">arrow_back</span>{' '}
                    Back to Home
                  </Link>
                </div>
                <h1 className="font-display text-4xl text-slate-900 uppercase tracking-tight mb-4">
                  Register for the Showcase
                </h1>
                <p className="text-slate-600 mb-10">Join elite athletes and industry leaders.</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      required
                      placeholder="Enter your legal name"
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl h-14 px-4 text-slate-900 focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl h-14 px-4 text-slate-900 focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl h-14 px-4 text-slate-900 focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                      I am a:
                    </div>
                    <div className="space-y-3">
                      {['Athlete', 'Model', 'Entertainer'].map((role) => (
                        <label key={role} htmlFor={`role-${role.toLowerCase()}`} className="flex items-center gap-3 cursor-pointer">
                          <input
                            id={`role-${role.toLowerCase()}`}
                            type="checkbox"
                            checked={roles.includes(role.toLowerCase())}
                            onChange={() => handleRoleChange(role.toLowerCase())}
                            className="size-5 rounded border-2 border-slate-300 text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                          />
                          <span className="text-slate-700 font-medium">{role}</span>
                        </label>
                      ))}
                    </div>
                    {roles.length === 0 && (
                      <p className="mt-2 text-xs text-red-500">Please select at least one role</p>
                    )}
                  </div>
                  <div>
                    <div className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                      Social Media Profiles
                    </div>
                    <div className="space-y-3 mb-4">
                      {[
                        { key: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/yourusername' },
                        { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/yourusername' },
                        { key: 'x', label: 'X (Twitter)', placeholder: 'https://twitter.com/yourusername or https://x.com/yourusername' },
                      ].map((platform) => (
                        <div key={platform.key}>
                          <label className="flex items-center gap-3 cursor-pointer mb-2">
                            <input
                              type="checkbox"
                              checked={socialPlatforms.includes(platform.key)}
                              onChange={() => handleSocialPlatformChange(platform.key)}
                              className="size-5 rounded border-2 border-slate-300 text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                            />
                            <span className="text-slate-700 font-medium">{platform.label}</span>
                          </label>
                          {socialPlatforms.includes(platform.key) && (
                            <div className="ml-8 mt-2">
                              <label htmlFor={`social-${platform.key}`} className="block text-xs font-semibold text-slate-600 mb-1">
                                {platform.label} Profile URL
                              </label>
                              <input
                                id={`social-${platform.key}`}
                                type="url"
                                value={socialUrls[platform.key] || ''}
                                onChange={(e) => handleSocialUrlChange(platform.key, e.target.value)}
                                placeholder={platform.placeholder}
                                pattern={getSocialPattern(platform.key)}
                                className={`w-full bg-slate-50 border-2 rounded-xl h-12 px-4 text-slate-900 focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none transition-all ${
                                  socialErrors[platform.key] ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
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
                    className="w-full bg-gradient-to-r from-[var(--combo-northern-forest)] via-[var(--combo-northern-neon)] to-[var(--combo-northern-forest)] hover:from-[var(--combo-northern-neon)] hover:via-[var(--combo-northern-lime)] hover:to-[var(--combo-northern-neon)] text-[var(--combo-northern-white)] h-14 rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg shadow-[var(--combo-northern-neon)]/30 hover:shadow-xl hover:shadow-[var(--combo-northern-neon)]/50 hover:scale-[1.02]"
                  >
                    Register to be contacted
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By registering, you agree to our Terms of Service and Privacy Policy.
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
