import { Link } from 'react-router-dom'
import { Layout, FooterContent } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-white leading-[0.95] tracking-tight uppercase">
            Outwork Your Greatest Competition...You!
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            MTP Talent Group is a culture connecting talent boutique. We deliver positive provoking content, curated inspired events, and brand exclusive moments.
          </p>
          <Link
            to="/register"
            className="mt-10 inline-flex items-center justify-center rounded-xl h-14 px-10 bg-[var(--accent)] text-white text-base font-bold uppercase tracking-widest hover:bg-[var(--accent-hover)] transition-all hover:scale-105"
          >
            Begin Your Journey
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-tight mb-12">
            Who We Are?
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              MTP Talent Group is a culture connecting talent boutique. Our expertise includes delivering
              positive provoking produced content, curated inspired events, fostering business development,
              and creating brand exclusive moments. MTP aims to set distinguishment with their clients
              amongst other like-level talent. Through our events we inspire our client&apos;s voice to scream and
              their brands to stand tall. We bring forth a rewarding and vigorous commercial journey for each
              of our talents, while with the utmost transparency MTP will provide a full-service management
              relationship. We work closely with our clients to level up their presence and brands, through
              out of the box thinking and unique experiences which excel consumer visibility and drive
              encouraging data.
            </p>
            <p>
              Our mission is always the same: To provide timely, efficient project delivery with full lifecycle
              support backed by transparency, fueled by knowledge, topped with experience, and over-loaded with creativity.
            </p>
            <p>
              <strong className="text-slate-900">Vision:</strong> Build valued, trusting, and secure relationships with brand clients, talent, employees,
              and partners through ethical and innovative leadership.
            </p>
            <p>
              NIL (Name, Image, Likeness) is an important division of our growth. This is where our foot hits
              the accelerator for our College and High School Athletes.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-tight text-center mb-16">
            Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Competence', text: 'MTP attracts a diverse group of employees, who expertise, knowledge, and experience allow us to be forward thinkers while delivering superior solutions.' },
              { title: 'Fairness', text: 'MTP promotes mutual respect and fairness throughout its business practices and when dealing with clients. We trust that every interaction is treated ethically to ensure our future is always bright.' },
              { title: 'Collaboration', text: 'MTP believes to leverage expertise and reach a common goal, we have to develop a strong collective relationship with partners all over the world.' },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[var(--accent)]/30 transition-colors">
                <h3 className="font-display text-2xl text-[var(--accent)] uppercase mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-tight mb-12">
            MTP Services
          </h2>
          <div className="mb-12 p-6 rounded-2xl bg-slate-100 border border-slate-200">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-4">Event Activation</p>
            <div className="flex flex-wrap gap-3">
              {['Champion Among US', 'HealthiHER', 'MANifestival', '2026 Global Unity Cup'].map((e) => (
                <span key={e} className="px-4 py-2 bg-white rounded-lg text-sm font-semibold border border-slate-200">
                  {e}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {[
              { title: 'Talent Management', desc: "We carefully hand pick our roster of athletes, creators, and move-makers, engaging their personal brands' growth while ensuring opportunities align best. Our team on request, prepares talent to confidently map the industry due to MTP's versed partnerships, supported performance growth, and negotiation of contracts. We vigorously search for brands that activate with our clients to ensure optimization of their plan. Our talents are able to stay focused on continuing to be at the top of their game, while we provide a clear as crystal day to day support system. It's also very vital to us that wherever possible we have a great relationship with our talent's family." },
              { title: 'Brand Connection', desc: "We spark the heartbeat through disruptive, culture connective experiences that spark and relays an unforgettable imprint. Your audience won't just click then scroll, they'll engage and act. Our consumer-first positioning is vibrant, captivating, and immersive. We do it all…. Give us an idea…. We will work creatively to align your activation's vision resulting in an impactful and meaningful brand voice." },
              { title: 'Live Events with Athletes, Influencers, and or Talent', desc: "Have a thought, let MTP craft the rest. From pre-planning to the day of your event, we can transition at any stage and provide top tier, professional execution. We focus closely on the target audience, the vision of the event, and how the vibe will impact the attendees in a positive and memorable way. Our team is versatile and ready for what our client's throw at us. Live event post generates a greater engagement when it done by an athlete, influencer, or talent. Contact MTP and let the creatives begin." },
              { title: 'Digital Media Campaign', desc: "Do you want the audience to stop scrolling at your visuals, click, listen, and engage? Our team has years of experience developing content ready, message invoking material, that is tailored to your vision. Through data tracking we are able to deliver enhanced performance capabilities, and adjust when we see fit. Your campaign rollout will have the most unparallelled creative content, with the best production value. Choose MTP and let's get rolling." },
              { title: 'Performance Development', desc: "In our athlete's busy world, achievements are hard to obtain without a team. MTP's performance success strategy is primarily designed for our athletes. We place a capsule around our athletes of sports nutritionists, S & C trainers, mindset coach, athletic therapists, and massage therapists to further enhance an athlete's optimal performance." },
              { title: 'Youngstar Program', desc: "This program focuses on identifying, supporting, and providing bullseye development for young athletes. We create a fun, engaging environment that allows these athletes to be surrounded with positive growth. Selection process happens once a year, we prepare our youngSTARs to join us on showcase tours, whether it is to the USA or Europe." },
            ].map((s) => (
              <div key={s.title} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[var(--accent)]/30 transition-colors shadow-sm">
                <h3 className="font-display text-xl text-slate-900 uppercase mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-2xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2">Who MTP Deals With</p>
            <p className="text-slate-600">
              Pro Athletes | Olympians | High-School Athletes | Influencers | Entertainment Professionals | College Athletes
            </p>
          </div>
        </div>
      </section>

      {/* Squad */}
      <section id="team" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-tight mb-16">
            Squad
          </h2>
          <div className="mb-8 flex justify-center">
            <div className="size-48 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-display text-5xl border-4 border-slate-200 shadow-xl">
              DA
            </div>
          </div>
          <h3 className="font-display text-2xl text-slate-900">Dean Akinmusire</h3>
          <p className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mt-2 mb-8">Owner and Founder</p>
          <div className="text-left space-y-6 text-slate-600 leading-relaxed">
            <p>Dean Akinmusire, has 20 years of service working in the retail industry where he learned how to deliver focused conversation to build strong and lasting relationship with consumers. Let&apos;s just say Dean has a knack for keeping the needs of people his main concern. Prior to that, Dean worked over 7 years in the marketing and advertising field, working closely with Fortune 500 accounts to innovatively build their brands and deliver their message. Dean easily navigated complex request, with seamless effort to bring forth a visually appealing promotion. Dean was an active participant with the launch of Honda Canada&apos;s &quot;Civic Nation&quot; campaign, delivering unparallel results to Honda&apos;s long history in Canada. He worked closely with Mercedes Benz, to formulate a marketing campaign that activated consumer interest. Dean has guided projects that included Olympians, NBA celebrity trainers, Pro tennis players, and more.</p>
            <p>After leaving his career of 20 years in 2025, Dean has embarked on a passion to guide clients through a journey that can be confusing at times. His has a determined willingness to provide clients with unwavering success, that uplift their platform and mirror their values. With the activation of Maximize the Potential (MTP) Talent Group, he is at the helm of making it all happen.</p>
            <p>Dean is a dedicated father of six children, so he understands the hustle of the sports world. Four of his six children played competitive sports, one had a small stint with TFC Academy (MLS youth Academy team). If anyone can tend to a talent&apos;s needs, deliver data caption value with patience and determination, it&apos;s Dean Akinmusire and MTP Talent Group.</p>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-tight mb-12">
            Company Potential Positions
          </h2>
          <ul className="space-y-4 mb-16">
            {['Global Director of Marketing, Branding and Events — Content creator, marketing analyst, and audience engagement', 'Chief Officer of Strategy Alliance', 'Financial Guidance Advisor', 'Chief of Technology and Information'].map((p) => (
              <li key={p} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-200 hover:border-[var(--accent)]/30 hover:shadow-md transition-all group">
                <span className="flex-shrink-0 mt-1.5 size-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent)]/10 group-hover:ring-[var(--accent)]/20" />
                <span className="text-slate-600 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 uppercase tracking-tight mb-12">
            Sports Wing
          </h2>
          <ul className="space-y-4">
            {['Division Lead of Athlete Support and Performance — Monitors athlete\'s performance to ensure they stay at peak performance mentally and physically; Injury prevention and recovery; Off-season care', 'Head of Legal and Professional Services - Basketball — Negotiating and reviewing athlete contracts; Collective Bargaining Agreements, Salary Caps, Analytics', 'Financial Guidance Advisor — Work closely with athlete\'s and their finance/investments', 'NIL Procurement Specialist – male athletes — Securing NIL deals for student athletes; Maximizing athletes marketing potential', 'NIL Procurement Specialist – female athletes — Securing NIL deals for student athletes; Maximizing athletes marketing potential', 'Athlete Profile Building — Work with athlete\'s media platforms; Handles PR work when required', 'Client Recruitement – Basketball', 'Client Recruitement - Soccer', 'TALENT PROCUREMENT – models/personalities/entertainers', 'Agent – Model', 'Agent – Personality', 'Agent – Entertainment (DJ)'].map((p) => (
              <li key={p} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-200 hover:border-[var(--accent)]/30 hover:shadow-md transition-all group">
                <span className="flex-shrink-0 mt-1.5 size-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent)]/10 group-hover:ring-[var(--accent)]/20" />
                <span className="text-slate-600 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-[var(--accent)]/40" />
        <h2 className="relative font-display text-4xl md:text-6xl text-white uppercase text-center leading-tight px-6">
          Outwork Your Greatest<br />Competition...You!
        </h2>
      </section>

      <FooterContent />
    </Layout>
  )
}
