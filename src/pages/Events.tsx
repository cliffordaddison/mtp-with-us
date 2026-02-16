import { Layout, FooterContent } from '../components/Layout'

const events = [
  {
    date: 'February 28, 2026',
    title: 'Champion Among US',
    description: 'An incredible bi-annual event that brings together high impact Professionals, Olympians, and Pro Athletes. These individuals are the underrepresented, we celebrate them and lift their voices so that they can inspire the next generation.',
    status: 'open',
  },
  {
    date: 'August 2026',
    title: 'HealthiHER',
    description: 'All things healthy, happy, educational, and empowering that connect women. Designed to inspire all females regardless of shape, size, age, and ethnicity to feel comfortable and understand their bodies. It\'s a full day to be active, learn, ask the professionals, and connect. It won\'t be your ordinary girls trip!',
    status: 'coming_soon',
  },
  {
    date: 'November 2026',
    title: 'MAN-ifestival',
    description: 'Mancare oasis that makes healthy living, mental wellness, and supportive relationships adaptable and comfortable for the everyday bro with no shade being thrown. This event is built with all ages and lifestyle choices in mind. Come discover something new and leave enlightened.',
    status: 'coming_soon',
  },
  {
    date: 'TBD',
    title: 'Young-STAR',
    description: 'In this program we identify and work closely with young athletes to build their in-game performance and guide them through other challenges in their early stages of life. Once a year our soccer athletes with have the opportunity to go on a showcase tour in the U.K.',
    status: 'coming_soon',
  },
]

export default function Events() {
  return (
    <Layout>
      <div className="relative isolate overflow-hidden bg-[var(--base-bg)]">
        <section className="relative z-10 bg-[var(--base-bg)] pt-20 pb-16 border-b border-[var(--kelly-green)]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-[-0.02em] leading-tight" style={{ fontWeight: 700 }}>
              <span className="text-[var(--text-primary)]">Upcoming </span>
              <span className="text-[var(--neon-green)]">Season</span>
              <span className="text-[var(--text-primary)]"> Schedule</span>
            </h1>
            <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
              Exclusive showcases and trials across Canada and the USA. Join MTP for the 2026 season.
            </p>
          </div>
        </section>

        <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 bg-[var(--base-bg)]">
        <div className="space-y-16">
          {events.map((event, index) => (
            <div key={event.title} className={`schedule-row grid md:grid-cols-4 gap-8 group p-4 rounded-[var(--radius)] ${index % 2 === 1 ? 'bg-[rgba(64,163,50,0.03)]' : ''}`}>
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 text-[var(--neon-green)]">
                  <span className="material-symbols-outlined text-2xl">calendar_today</span>
                  <span className="text-sm font-bold uppercase tracking-widest">{event.date}</span>
                </div>
              </div>
              <div className="md:col-span-3 pb-12 border-b border-[var(--kelly-green)]/20 last:border-0">
                <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] uppercase group-hover:text-[var(--neon-green)] transition-colors" style={{ fontWeight: 700 }}>
                  {event.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mt-4 max-w-2xl">
                  {event.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {event.status === 'open' ? (
                    <a
                      href="https://ticketmaster.com/champion-among-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 h-10 flex items-center bg-[var(--neon-green)] text-[var(--base-bg)] text-xs font-bold uppercase tracking-widest rounded-[var(--radius)] transition-all hover:bg-[var(--base-bg)] hover:text-[var(--neon-green)] hover:border-2 hover:border-[var(--neon-green)] hover:shadow-[0_0_20px_rgba(49,237,49,0.8)] hover:scale-105"
                    >
                      Register Now
                    </a>
                  ) : (
                    <span className="px-6 h-10 flex items-center bg-[var(--surface-card)] text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest rounded-[var(--radius)] border border-[var(--surface-card-border)]">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>

      <FooterContent />
    </Layout>
  )
}
