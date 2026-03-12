import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Phone, Star, ArrowRight, Download,
  Calculator, BarChart3, Bot, CheckCircle2,
} from 'lucide-react';

// ── Brand tokens (from Flutter app theme.dart) ──────────────────
const TEAL   = '#005C4D'; // kWelcomeBg  – hero / nav / CTA bg
const GREEN  = '#1A3326'; // kGreen      – buttons, footer, nav active
const MINT   = '#ECF5EC'; // kMint       – section bg, cards
const ACCENT = '#3DAA5C'; // kAccent     – badges, icons, highlights
const BEIGE  = '#F5EDD8'; // kBeige      – text on dark, primary CTA
const TEXT   = '#1A1A1A'; // body text

const SERIF = '"Playfair Display", Georgia, serif';
const SANS  = '"DM Sans", system-ui, -apple-system, sans-serif';

// ── Static data ──────────────────────────────────────────────────
const rateData = [
  { avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',  rate: '6.08% APR', points: '$35,000', payment: '$7,468' },
  { avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',  rate: '7.1% APR',  points: '$28,000', payment: '$3,468' },
  { avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop', rate: '8.01% APR', points: '$24,000', payment: '$2,854' },
];

const tools = [
  { Icon: CheckCircle2, label: 'Pre-Qualification',   desc: 'Know your buying power before you start shopping for a home.',          iconBg: '#DCF5DC', iconColor: ACCENT },
  { Icon: Calculator,   label: 'Mortgage Calculator', desc: 'Calculate monthly payments and total interest in seconds.',               iconBg: '#DCEEF9', iconColor: '#2B82D0' },
  { Icon: BarChart3,    label: 'Scenario Manager',    desc: 'Compare multiple mortgage scenarios side by side with live numbers.',      iconBg: '#F9EEDC', iconColor: '#D4842A' },
  { Icon: Bot,          label: 'AI Assistant',        desc: 'Ask anything about mortgages and get instant, personalized answers.',      iconBg: MINT,      iconColor: GREEN },
];

const steps = [
  { num: '01', title: 'Build Your Profile',       desc: 'Enter your financial details securely. MortWise encrypts everything and never shares your data with third parties.' },
  { num: '02', title: 'Run Pre-Qualification',    desc: 'Get an instant estimate of how much home you can afford, based on real lender criteria — no credit pull required.' },
  { num: '03', title: 'Compare & Make a Move',   desc: 'Use the Scenario Manager and AI Assistant to test different terms, rates, and down payments until you find the right fit.' },
];

const stats = [
  { value: '$2.4B+',  label: 'Mortgages Processed' },
  { value: '12,000+', label: 'Happy Homeowners' },
  { value: '4.9 / 5', label: 'App Store Rating' },
  { value: '98%',     label: 'Pre-Approval Accuracy' },
];

// ────────────────────────────────────────────────────────────────
export default function MortWise() {
  const [activeTab, setActiveTab] = useState<'30yr' | '20yr'>('30yr');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Inject Google Fonts for Playfair Display + DM Sans
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap';
    link.rel  = 'stylesheet';
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch {} };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: SANS, color: TEXT }}>

      {/* ══════════════════════════════ NAV ══════════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4" style={{ backgroundColor: TEAL }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-semibold" style={{ fontFamily: SERIF, color: BEIGE, letterSpacing: '-0.5px' }}>
            MortWise
          </span>
          <div className="hidden md:flex items-center gap-8">
            {['Solutions', 'Calculator', 'Resources', 'Company'].map(item => (
              <button key={item} className="text-sm font-medium transition-opacity hover:opacity-100"
                style={{ color: `${BEIGE}88` }}>
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button className="text-sm font-semibold" style={{ color: `${BEIGE}70` }}>Sign in</button>
            <button className="rounded-full px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: BEIGE, color: GREEN }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="pt-32 pb-0 px-6 text-center" style={{ backgroundColor: TEAL }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-10 text-sm font-semibold"
          style={{ backgroundColor: `${BEIGE}18`, color: BEIGE, border: `1px solid ${BEIGE}30` }}
        >
          <span style={{ color: ACCENT }}>✦</span>
          AI-Powered Mortgage Guidance — Now Available
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[1.1] max-w-3xl mx-auto mb-6"
          style={{ fontFamily: SERIF, color: BEIGE, fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '-1.5px' }}
        >
          Your Smartest<br />
          <em style={{ fontStyle: 'italic', color: 'white' }}>Mortgage Decision</em><br />
          Starts Here.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-xl mx-auto mb-10"
          style={{ color: `${BEIGE}80` }}
        >
          Pre-qualify, calculate payments, and compare mortgage scenarios — all in one AI-assisted platform built for every type of buyer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="rounded-full px-8 py-4 text-sm font-bold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: BEIGE, color: GREEN }}>
            Get Started Free
          </button>
          <button className="rounded-full px-8 py-4 text-sm font-bold flex items-center gap-2 hover:opacity-75 transition-opacity"
            style={{ border: `1px solid ${BEIGE}35`, color: BEIGE, backgroundColor: 'transparent' }}>
            See How It Works <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* ── Dashboard mockup (same 3-col layout, app palette) ── */}
        <motion.div
          initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-4 items-start">

            {/* Left */}
            <div className="hidden lg:flex flex-col gap-3 text-left">
              <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  <span className="text-xs font-semibold" style={{ color: TEXT }}>5 Opportunities Matched</span>
                </div>
                <div className="rounded-xl p-3 flex gap-3 items-center" style={{ backgroundColor: BEIGE }}>
                  <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop"
                    alt="Modern Villa" className="w-12 h-9 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <div className="font-bold text-xs" style={{ color: TEXT }}>Modern Villa</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">400k Mortgage • 24 Doc Sent</div>
                  </div>
                </div>
              </div>
              <div>
                <button className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold text-white"
                  style={{ backgroundColor: ACCENT }}>
                  <span>✦</span> AI suggestions
                </button>
              </div>
              <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Finance.</p>
                <p className="text-[10px] text-gray-400 mb-1.5">Today's Rate</p>
                <div className="font-bold mb-3" style={{ fontFamily: SERIF, color: TEXT, fontSize: '2.2rem', letterSpacing: '-1px', lineHeight: 1 }}>3.254%</div>
                <button className="rounded-full px-4 py-1.5 text-xs font-bold border"
                  style={{ borderColor: GREEN, color: GREEN }}>
                  Compare
                </button>
              </div>
            </div>

            {/* Center broker card */}
            <div className="relative rounded-3xl overflow-hidden" style={{ backgroundColor: GREEN, minHeight: '440px' }}>
              <div className="absolute top-0 left-0 p-5 z-10">
                <div className="font-bold text-base" style={{ fontFamily: SERIF, color: 'white' }}>Sarah Mitchell</div>
                <div className="text-xs mt-0.5" style={{ color: `${BEIGE}75` }}>Broker – A</div>
              </div>
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Sarah Mitchell" className="w-full h-full object-cover object-top absolute inset-0"
                style={{ minHeight: '440px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 z-10"
                style={{ background: 'linear-gradient(to top, rgba(26,51,38,0.75), transparent)' }} />
              <div className="absolute bottom-5 left-5 text-sm font-semibold z-20" style={{ color: `${BEIGE}90` }}>
                11:32 | Sarah × Client
              </div>
              <div className="absolute bottom-4 right-4 z-20 rounded-2xl px-3 py-2 flex items-center gap-2"
                style={{ backgroundColor: 'rgba(0,0,0,0.60)', backdropFilter: 'blur(6px)' }}>
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Client" className="w-8 h-8 rounded-xl object-cover" />
                <div>
                  <div className="text-white text-xs font-semibold">Laura</div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Candidate</div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="hidden lg:flex flex-col gap-3 text-left">
              <div className="rounded-2xl p-4 text-white" style={{ backgroundColor: GREEN }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[11px] font-bold rounded-full px-2.5 py-1"
                    style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}>Now</span>
                </div>
                <div className="font-bold text-sm" style={{ fontFamily: SERIF }}>Demo call with Sarah</div>
                <div className="text-xs mt-1" style={{ color: `${BEIGE}65` }}>09:30 am – 10:00 am</div>
              </div>
              <div className="bg-white rounded-2xl p-4" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div className="flex items-center gap-1.5 mb-3">
                  <span style={{ color: ACCENT }}>✦</span>
                  <span className="font-bold text-xs" style={{ color: TEXT }}>AI Recommendation</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] text-gray-400">Loan Term</span>
                  {(['30yr', '20yr'] as const).map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold transition-colors"
                      style={{ backgroundColor: activeTab === tab ? GREEN : 'transparent', color: activeTab === tab ? 'white' : '#9CA3AF' }}>
                      {tab === '30yr' ? '30yrs Fixed' : '20yrs Fixed'}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-[20px_1fr_auto_auto] gap-x-2 mb-2">
                  <div /><div className="text-[9px] text-gray-400">Rate</div>
                  <div className="text-[9px] text-gray-400">Points</div>
                  <div className="text-[9px] text-gray-400">Monthly</div>
                </div>
                {rateData.map((row, i) => (
                  <div key={i} className="grid grid-cols-[20px_1fr_auto_auto] gap-x-2 items-center py-1.5 border-b border-gray-50 last:border-0">
                    <img src={row.avatar} alt="" className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-[10px] font-bold" style={{ color: TEXT }}>{row.rate}</span>
                    <span className="text-[10px] text-gray-400">{row.points}</span>
                    <span className="text-[10px] text-gray-400">{row.payment}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════ STATS ══════════════════════════════ */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
              <div className="text-3xl md:text-4xl font-bold mb-1"
                style={{ fontFamily: SERIF, color: GREEN, letterSpacing: '-1px' }}>{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ TOOLS ══════════════════════════════ */}
      <section className="py-24 px-6" style={{ backgroundColor: MINT }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: '0.9px' }}>
              Everything You Need
            </p>
            <h2 className="font-bold leading-tight max-w-lg"
              style={{ fontFamily: SERIF, color: GREEN, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>
              Four powerful tools,<br />one seamless experience.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map(({ Icon, label, desc, iconBg, iconColor }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group hover:shadow-lg transition-shadow"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: iconBg }}>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1.5" style={{ fontFamily: SERIF, color: TEXT }}>{label}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs font-bold" style={{ color: ACCENT }}>
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ HOW IT WORKS ══════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ACCENT, letterSpacing: '0.9px' }}>
              Simple Process
            </p>
            <h2 className="font-bold"
              style={{ fontFamily: SERIF, color: GREEN, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>
              Your path to homeownership,<br />simplified in three steps.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                className="flex flex-col gap-4">
                <div className="text-6xl font-bold select-none" style={{ fontFamily: SERIF, color: MINT }}>
                  <span style={{ WebkitTextStroke: `2px ${ACCENT}50` } as React.CSSProperties}>{step.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: SERIF, color: GREEN }}>{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CTA ══════════════════════════════ */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: TEAL }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: ACCENT, letterSpacing: '0.9px' }}>
            Ready to Start?
          </p>
          <h2 className="font-bold mb-6 leading-tight"
            style={{ fontFamily: SERIF, color: BEIGE, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-1px' }}>
            Your dream home is closer than you think.
          </h2>
          <p className="text-lg mb-10" style={{ color: `${BEIGE}70` }}>
            Join thousands of Canadians who found their perfect mortgage with MortWise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-full px-8 py-4 text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: BEIGE, color: GREEN }}>
              <Download className="w-4 h-4" /> Download the App
            </button>
            <button className="rounded-full px-8 py-4 text-sm font-bold flex items-center gap-2 hover:opacity-75 transition-opacity"
              style={{ border: `1px solid ${BEIGE}35`, color: BEIGE, backgroundColor: 'transparent' }}>
              Try on Web <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════ FOOTER ══════════════════════════════ */}
      <footer className="py-16 px-6" style={{ backgroundColor: GREEN }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
            <div className="md:col-span-2">
              <div className="text-2xl font-semibold mb-3" style={{ fontFamily: SERIF, color: BEIGE, letterSpacing: '-0.5px' }}>
                MortWise
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: `${BEIGE}55` }}>
                An AI-powered mortgage platform built for self-employed Canadians and beyond. Clarity, trust, and smart guidance — from pre-qual to close.
              </p>
            </div>
            {[
              { heading: 'Product',  links: ['Pre-Qualification', 'Calculator', 'Scenarios', 'AI Assistant'] },
              { heading: 'Company',  links: ['About', 'Blog', 'Careers', 'Contact'] },
            ].map(col => (
              <div key={col.heading}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: `${BEIGE}55`, letterSpacing: '0.9px' }}>{col.heading}</div>
                <ul className="space-y-2.5">
                  {col.links.map(l => (
                    <li key={l}><a href="#" className="text-sm hover:opacity-100 transition-opacity"
                      style={{ color: `${BEIGE}65` }}>{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: `1px solid ${BEIGE}15`, color: `${BEIGE}40` }}>
            <div>© 2025 MortWise. All rights reserved.</div>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Security'].map(l => (
                <a key={l} href="#" className="hover:opacity-100 transition-opacity">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
