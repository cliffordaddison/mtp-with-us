import { Layout, FooterContent } from '../components/Layout'

const events = [
  {
    date: 'Feb 28, 2026',
    title: 'Champion Among US Toronto',
    description: 'A premier invitation-only showcase featuring top-tier scouts and brand partners. Connect with MTP Talent Group and industry leaders across Canada and the US.',
    status: 'open',
  },
  {
    date: 'TBA',
    title: 'HealthiHER Toronto Showcase',
    description: 'Celebrating female athlete excellence. HealthiHER brings together athletes, brands, and advocates for networking, development, and opportunity discovery.',
    status: 'coming_soon',
  },
  {
    date: 'TBA',
    title: 'MANifestival',
    description: 'MTP\'s flagship community and talent activation event. Live performances, athlete meet-and-greets, brand activations, and exclusive networking.',
    status: 'coming_soon',
  },
  {
    date: 'TBA',
    title: 'Youngstar USA Showcase Tour',
    description: 'Youth identification and development showcase for high-potential prospects. Pathway sessions with MTP agents and brand consultants.',
    status: 'coming_soon',
  },
  {
    date: 'TBA',
    title: '2026 Global Unity Cup',
    description: 'The 2026 Global Unity Cup brings together athletes, brands, and partners across North America for the ultimate talent and culture activation.',
    status: 'coming_soon',
  },
]

export default function Events() {
  return (
    <Layout>
      <section className="bg-white pt-20 pb-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-slate-900 uppercase tracking-tight leading-tight">
            Upcoming <span className="text-[var(--accent)]">Season</span> Schedule
          </h1>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            Exclusive showcases and trials across Canada and the USA. Join MTP for the 2026 season.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
        <div className="space-y-16">
          {events.map((event) => (
            <div key={event.title} className="grid md:grid-cols-4 gap-8 group">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 text-[var(--accent)]">
                  <span className="material-symbols-outlined text-2xl">calendar_today</span>
                  <span className="text-sm font-bold uppercase tracking-widest">{event.date}</span>
                </div>
              </div>
              <div className="md:col-span-3 pb-12 border-b border-slate-200 last:border-0">
                <h3 className="font-display text-2xl md:text-3xl text-slate-900 uppercase group-hover:text-[var(--accent)] transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mt-4 max-w-2xl">
                  {event.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {event.status === 'open' ? (
                    <a
                      href="https://ticketmaster.com/champion-among-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 h-10 flex items-center bg-gradient-to-r from-[var(--combo-northern-forest)] via-[var(--combo-northern-neon)] to-[var(--combo-northern-forest)] hover:from-[var(--combo-northern-neon)] hover:via-[var(--combo-northern-lime)] hover:to-[var(--combo-northern-neon)] text-[var(--combo-northern-white)] text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-md shadow-[var(--combo-northern-neon)]/25 hover:shadow-lg hover:shadow-[var(--combo-northern-neon)]/40 hover:scale-105"
                    >
                      Register Now
                    </a>
                  ) : (
                    <span className="px-6 h-10 flex items-center bg-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest rounded-lg">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterContent />
    </Layout>
  )
}
