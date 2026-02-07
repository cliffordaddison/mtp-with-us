import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, FooterContent } from '../components/Layout'

export default function Register() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      <div className="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-slate-900 items-center justify-center p-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          <div className="relative z-10 max-w-md">
            <h2 className="font-display text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
              Your <span className="text-[var(--accent)]">Journey</span> Starts With Registration
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mt-8 mb-6" />
            <p className="text-slate-300 text-lg leading-relaxed">
              Secure your spot at MTP&apos;s exclusive showcases. Connect with elite agents and fellow athletes across Canada and the USA.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              Back to Home
            </Link>
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="text-center space-y-6">
                <div className="size-20 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl text-[var(--accent)]">check_circle</span>
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
                <div className="md:hidden mb-8">
                  <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
                    <span className="material-symbols-outlined">arrow_back</span>
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
                    <label htmlFor="entity-name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Athlete / Agency Name
                    </label>
                    <input
                      id="entity-name"
                      name="entity-name"
                      type="text"
                      required
                      placeholder="Team, Agency, or Individual Name"
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl h-14 px-4 text-slate-900 focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 rounded-xl font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Registration
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
