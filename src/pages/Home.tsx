import { Link } from 'react-router-dom'
import { Layout, FooterContent } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-[var(--base-bg)]">
        <section className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-3panel.png')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-[var(--base-bg)]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--base-bg)]/50 via-[var(--kelly-green)]/20 to-[var(--base-bg)]/60" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-[-0.02em] uppercase" style={{ fontWeight: 800 }}>
              <span className="text-[var(--text-primary)]">Outwork Your Greatest Competition...</span>
              <span className="text-[var(--neon-green)]">You!</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              MTP Talent Group is a culture connecting talent boutique. We deliver provokingly positive content, carefully curated inspired events, and brand exclusive moments.
            </p>
            <Link
              to="/register"
              className="mt-10 inline-flex items-center justify-center rounded-[var(--radius)] h-14 px-10 border-2 border-[var(--neon-green)] text-[var(--neon-green)] text-base font-bold uppercase tracking-widest hover:bg-[var(--neon-green)] hover:text-[var(--base-bg)] transition-all hover:scale-105"
            >
              BEGIN YOUR JOURNEY
            </Link>
          </div>
        </section>
      </div>

      {/* Who We Are */}
      <section id="who-we-are" className="relative z-10 py-24 scroll-mt-20 bg-[var(--base-bg)]/75">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-[-0.02em] mb-12" style={{ fontWeight: 700 }}>
            <span className="text-[var(--text-primary)]">Who We </span>
            <span className="text-[var(--neon-green)]">Are?</span>
          </h2>
          <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
            <p>
              MTP Talent Group is a culture connecting talent boutique. Our expertise includes delivering
              provokingly positive produced content, carefully curated inspired events, fostering business development,
              and creating brand exclusive moments. MTP aims to set distinguishment with their clients
              amongst other peer-level talent. Through our events we encourage our clients&apos; voices to scream and
              their brands to stand tall. We bring forth a rewarding and vigorous commercial journey for each
              of our talents, while with the utmost transparency MTP provides a full-service management
              relationship. We work closely with our clients to level up their presence and brands, through
              out-of-the-box thinking and unique experiences to excel consumer visibility and drive
              encouraging data.
            </p>

            {/* Mission - Using Bright Northern Lights Forest + White/Black toning */}
            <div className="service-card p-8">
              <h3 className="font-display text-3xl md:text-4xl text-[var(--kelly-green)] uppercase tracking-[-0.02em] mb-4 flex items-center gap-3" style={{ fontWeight: 700 }}>
                <span className="size-2 rounded-full bg-[var(--neon-green)] shadow-sm shadow-[var(--neon-green)]/50"></span>{' '}
                Mission
              </h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Our mission is always the same. To provide timely, efficient project delivery with full lifecycle
                support. Backed by transparency, fueled by knowledge, topped with experience, and over-loaded with creativity.
              </p>
            </div>

            {/* Vision - Using Bright Northern Lights Spearmint + White/Black toning */}
            <div className="service-card p-8">
              <h3 className="font-display text-3xl md:text-4xl text-[var(--spearmint)] uppercase tracking-[-0.02em] mb-4 flex items-center gap-3" style={{ fontWeight: 700 }}>
                <span className="size-2 rounded-full bg-[var(--spearmint)] shadow-sm shadow-[var(--spearmint)]/50"></span>{' '}
                Vision
              </h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Build value, trust, and secure relationships with brand clients, talent, employees,
                and partners through ethical and innovative leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-24 bg-[var(--surface-card)]/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-[-0.02em] text-center mb-16" style={{ fontWeight: 700 }}>
            <span className="text-[var(--text-primary)]">Our </span>
            <span className="text-[var(--neon-green)]">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Competence', text: 'MTP attracts a diverse group of employees, whose expertise, knowledge, and experience allows us to be forward thinkers while delivering superior solutions.', color: 'var(--neon-green)' },
              { title: 'Fairness', text: 'MTP promotes mutual respect and fairness throughout its business practices and when dealing with clients, and We trust that every interaction is treated ethically to ensure a bright future.', color: 'var(--spearmint)' },
              { title: 'Collaboration', text: 'MTP believes that to leverage expertise and reach a common goal, we have to develop a strong collective relationship with partners all over the world.', color: 'var(--kelly-green)' },
            ].map((v) => (
              <div key={v.title} className="service-card p-8">
                <h3 className="font-display text-2xl uppercase mb-4" style={{ color: v.color, fontWeight: 700 }}>{v.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-24 scroll-mt-20 bg-[var(--base-bg)]/75">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-normal mb-12" style={{ fontWeight: 700 }}>
            <span className="text-[var(--text-primary)]">MTP </span>
            <span className="text-[var(--neon-green)]">Services</span>
          </h2>
          <div className="space-y-8">
            {[
              { title: 'Talent Management', desc: "We carefully hand pick our roster of athletes, creators, and changemakers, engaging their personal brand's growth while ensuring opportunities best align. Our team, upon request, prepare talent to confidently map the industry due to MTP's versed partnerships, supported performance growth, and contract negotiations. We vigorously search for brands that activate with our clients to ensure optimization of their plan. The talent is then able to stay focused on continuing to be at the top of their game, while we provide a crystal clear day-to-day support system. It's vital to us, we maintain a transparent relationship with our talent's family." },
              { title: 'Brand Connection', desc: "We spark the heartbeat through disruptive, culture connective experiences that relay an unforgettable imprint. Your audience won't just click then scroll, they'll engage and act. Our consumer-first positioning is vibrant, captivating, and immersive. We do it all…. Give us an idea…. We will work creatively to align your activation vision resulting in an impactful and meaningful brand voice." },
              { title: 'Live Events with Athletes, Influencers, and or Talent', desc: "Have a thought, let MTP craft the rest. From pre-planning to the day of your event, we can transition at any stage and provide top tier, professional execution. We focus closely on the target audience, the vision of the event, and how the vibe will impact the attendees in a positive and memorable way. Our team is versatile and ready for what our client's throw at us. LIVE events \"posts\" generate a greater engagement when done by an athlete, influencer, or talent. Contact MTP and let the creatives begin." },
              { title: 'Digital Media Campaign', desc: "Do you want the audience to stop scrolling at your visuals, click, listen, and engage? Our team has years of experience developing content ready, message invoking material, that is tailored to your vision. Through data tracking we are able to deliver enhanced performance capabilities, and adjust where we see fit. Your campaign rollout will have the most unparallelled creative content, with the best production value. Choose MTP and let's get rolling." },
              { title: 'Performance Development', desc: "In any athlete's demanding world, achievements are hard to obtain without a team. MTP's performance success strategy is primarily designed for our athletes. We place a capsule comprised of sports nutritionists, S & C trainers, mindset coaches, athletic therapists, and massage therapists around our talent to further enhance optimal performance." },
              { title: 'Youngstar Program', desc: "This program focuses on identifying, supporting, and providing bullseye development for young athletes. We create a fun, engaging environment that allows these athletes to be surrounded with positive growth. Selection process happens once a year, we prepare our youngSTARs to join us on showcase tours, whether it is to the USA or Europe." },
              { title: 'NIL (Name, Image, Likeness)', desc: "NIL is an important division of our growth. This is where our foot hits the accelerator for our College and High School Athletes. We provide comprehensive NIL deal procurement, brand partnership opportunities, and marketing support to help student athletes maximize their potential while maintaining NCAA compliance." },
            ].map((s) => (
              <div key={s.title} className="service-card p-8">
                <h3 className="font-display text-xl uppercase mb-4" style={{ color: 'var(--neon-green)', fontWeight: 700 }}>{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed" style={{ lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-[var(--radius)] bg-[var(--surface-card)]/70 border border-[var(--surface-card-border)]">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--neon-green)] mb-2">Who MTP Deals With</p>
            <p className="text-[var(--text-secondary)]">
              Pro Athletes | Olympians | High-School Athletes | Influencers | Entertainment Professionals | College Athletes
            </p>
          </div>
        </div>
      </section>

      {/* Squad */}
      <section id="team" className="relative z-10 py-24 bg-[var(--surface-card)]/70 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-[-0.02em] mb-16" style={{ fontWeight: 700 }}>
            <span className="text-[var(--text-primary)]">Meet The </span>
            <span className="text-[var(--neon-green)]">Team</span>
          </h2>
          <div className="space-y-24">
            {/* Dean Akinmusire */}
            <div className="flex flex-col items-center">
              <div className="mb-8 flex justify-center">
                <div className="size-48 rounded-full bg-gradient-to-br from-[var(--kelly-green)] to-[var(--base-bg)] flex items-center justify-center text-[var(--text-primary)] font-display text-5xl shadow-xl relative" style={{ padding: '3px' }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-green)] to-[var(--kelly-green)] opacity-75 -z-10"></div>
                  <div className="size-full rounded-full bg-gradient-to-br from-[var(--kelly-green)] to-[var(--base-bg)] flex items-center justify-center">
                    DA
                  </div>
                </div>
              </div>
              <h3 className="font-display text-2xl text-[var(--text-primary)] mb-2" style={{ fontWeight: 600, fontSize: '20px' }}>Dean Akinmusire</h3>
              <p className="text-[var(--kelly-green)] uppercase tracking-widest text-sm mt-2 mb-8" style={{ fontSize: '14px' }}>OWNER AND FOUNDER</p>
              <div className="text-left space-y-6 text-[var(--text-secondary)] leading-relaxed" style={{ fontSize: '14px' }}>
                <p>Dean Akinmusire brings over 20 years of experience in retail leadership, relationship management, marketing, and brand development, with a proven ability to build meaningful connections and deliver people-focused results. Dean spent more than seven years working within the marketing and advertising industry alongside Fortune 500 brands, helping execute innovative campaigns and visually driven promotions that elevated consumer engagement. His experience includes contributing to Honda Canada’s “Civic Nation” campaign and collaborating with Mercedes-Benz on strategic marketing initiatives designed to strengthen brand presence and consumer interest. Throughout his career, Dean has also guided projects involving Olympians, NBA celebrity trainers, and emerging talent across multiple industries.</p>
                <p>After departing his 20-year retail career in 2025, Dean fully committed to his passion for talent development and brand elevation through the launch of MTP Talent Group⁠. With a strong understanding of culture, branding, and relationship-building, Dean is dedicated to helping clients navigate the evolving world of sports, entertainment, and personal branding with patience, strategy, and purpose. As a father of six children — including one who spent time within the Toronto FC Academy system — Dean understands the demands of competitive sports firsthand, bringing both personal experience and professional insight to every client relationship.</p>
              </div>
            </div>

            {/* Clifford Addison */}
            <div className="flex flex-col items-center">
              <div className="mb-8 flex justify-center">
                <div className="size-48 rounded-full bg-gradient-to-br from-[var(--kelly-green)] to-[var(--base-bg)] flex items-center justify-center text-[var(--text-primary)] font-display text-5xl shadow-xl relative" style={{ padding: '3px' }}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-green)] to-[var(--kelly-green)] opacity-75 -z-10"></div>
                  <div className="size-full rounded-full bg-gradient-to-br from-[var(--kelly-green)] to-[var(--base-bg)] flex items-center justify-center">
                    CA
                  </div>
                </div>
              </div>
              <h3 className="font-display text-2xl text-[var(--text-primary)] mb-2" style={{ fontWeight: 600, fontSize: '20px' }}>Clifford Addison</h3>
              <p className="text-[var(--kelly-green)] uppercase tracking-widest text-sm mt-2 mb-8" style={{ fontSize: '14px' }}>CHIEF OF WEBSITE DESIGN AND EFFICIENCY</p>
              <div className="text-left space-y-6 text-[var(--text-secondary)] leading-relaxed" style={{ fontSize: '14px' }}>
                <p>Clifford Addison serves as the Chief of Website Design and Efficiency, bringing a forward-thinking approach to digital development, user experience, and brand execution. Known for his precision, innovation, and problem-solving mindset, Clifford leads the development and maintenance of high-performing websites for both the company and its clients. His ability to merge clean design with functionality allows brands to establish a strong digital presence while delivering seamless user experiences. With a passion for execution and a natural talent for creative strategy, Clifford consistently pushes beyond industry standards to produce modern, impactful, and results-driven digital solutions.</p>
                <p>Originally from Ghana, Clifford holds a degree in Artificial Intelligence and Data Science, along with a second degree in Actuarial Science — a rare combination that gives him a unique edge in both analytical thinking and technological innovation. His expertise in emerging technology, paired with his dedication to elevating client brands, makes him an invaluable force behind every project. Outside of the digital world, Clifford enjoys exploring new tech, watching films, and staying engaged in currency and cryptocurrency trading, further fueling his passion for innovation and the future of technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTERNAL USE ONLY — NOT SHOWN ON PUBLIC SITE
          Open Positions & Sports Wing listings — uncomment to restore
      ============================================================ */}
      {/* <section id="careers" className="relative z-10 py-24 scroll-mt-20 bg-[var(--base-bg)]/75">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-[-0.02em] mb-12" style={{ fontWeight: 700 }}>
            <span className="text-[var(--text-primary)]">Open </span>
            <span className="text-[var(--neon-green)]">Positions</span>
          </h2>
          <ul className="space-y-4 mb-16">
            {['Global Director of Marketing, Branding and Events — Content creator, marketing analyst, and audience engagement', 'Chief Officer of Strategy Alliance', 'Financial Guidance Advisor', 'Chief of Technology and Information'].map((p) => (
              <li key={p} className="service-card flex gap-4 items-start p-4 group">
                <span className="flex-shrink-0 mt-1.5 size-2.5 rounded-full bg-[var(--kelly-green)] ring-4 ring-[var(--kelly-green)]/20 group-hover:ring-[var(--neon-green)]/30 group-hover:bg-[var(--neon-green)] transition-all" />
                <span className="text-[var(--text-secondary)] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-[-0.02em] mb-12 mt-16" style={{ fontWeight: 700 }}>
            <span className="text-[var(--text-primary)]">Sports </span>
            <span className="text-[var(--neon-green)]">Wing</span>
          </h2>
          <ul className="space-y-4">
            {['Division Lead of Athlete Support and Performance — Monitors athlete\'s performance to ensure they stay at peak performance mentally and physically; Injury prevention and recovery; Off-season care', 'Head of Legal and Professional Services - Basketball — Negotiating and reviewing athlete contracts; Collective Bargaining Agreements, Salary Caps, Analytics', 'Financial Guidance Advisor — Work closely with athlete\'s and their finance/investments', 'NIL Procurement Specialist – male athletes — Securing NIL deals for student athletes; Maximizing athletes marketing potential', 'NIL Procurement Specialist – female athletes — Securing NIL deals for student athletes; Maximizing athletes marketing potential', 'Athlete Profile Building — Work with athlete\'s media platforms; Handles PR work when required', 'Client Recruitement – Basketball', 'Client Recruitement - Soccer', 'TALENT PROCUREMENT – models/personalities/entertainers', 'Agent – Model', 'Agent – Personality', 'Agent – Entertainment (DJ)'].map((p) => (
              <li key={p} className="service-card flex gap-4 items-start p-4 group">
                <span className="flex-shrink-0 mt-1.5 size-2.5 rounded-full bg-[var(--kelly-green)] ring-4 ring-[var(--kelly-green)]/20 group-hover:ring-[var(--neon-green)]/30 group-hover:bg-[var(--neon-green)] transition-all" />
                <span className="text-[var(--text-secondary)] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      {/* CTA */}
      <div className="relative isolate overflow-hidden bg-[var(--base-bg)]">
        <section className="relative z-10 py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 cta-slideshow-container">
            <div className="absolute inset-0 bg-[url('/hero-3panel.png')] bg-cover bg-center cta-slide cta-slide-1" />
            <div className="absolute inset-0 bg-[url('/hero-3panel.png')] bg-cover bg-center cta-slide cta-slide-2" />
            <div className="absolute inset-0 bg-[url('/hero-3panel.png')] bg-cover bg-center cta-slide cta-slide-3" />
          </div>
          <div className="absolute inset-0 bg-[var(--base-bg)]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--base-bg)]/40 via-[var(--kelly-green)]/15 to-[var(--base-bg)]/50" />
          <h2 className="relative z-10 font-display text-4xl md:text-6xl uppercase text-center leading-tight px-6 tracking-[-0.02em]" style={{ fontWeight: 700 }}>
            <span className="text-[var(--text-primary)]">Outwork Your Greatest<br />Competition...</span>
            <span className="text-[var(--neon-green)]">You!</span>
          </h2>
        </section>
      </div>

      <FooterContent />
    </Layout>
  )
}
