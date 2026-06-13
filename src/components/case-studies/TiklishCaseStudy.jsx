import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Target, Ticket, DollarSign, MessageSquare, ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Tiklish from '../../assets/Tiklish.png'

export default function TiklishCaseStudy() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A1A] font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E2DDD6]"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="text-lg font-bold tracking-tight text-[#1A1A1A] cursor-pointer"
            onClick={() => navigate('/')}
          >
            PORTFO<span className="text-[#C8703A]">//</span>IO
          </motion.div>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2DDD6] bg-white text-[#555] text-sm font-medium hover:border-[#C8703A] hover:text-[#C8703A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#C8703A] transition-colors"
            >
              <Home className="w-4 h-4" />
              Home
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C8703A] mb-3">Case Study</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#1A1A1A]">Tik-lish</h1>
                <p className="text-lg text-[#555] mb-8 leading-relaxed">
                  A peer-to-peer ticketing app that lets students securely resell and buy event tickets through instant paywall links — eliminating the chaos of massive group chats and endless DMs.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img src={Tiklish} alt="Tik-lish Design" className="w-full rounded-2xl shadow-lg border border-[#E8E4DF]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {[
              { Icon: Users, title: "Target Users", text: "College students, event organizers, young professionals" },
              { Icon: Clock, title: "Timeline", text: "4 weeks design sprint" },
              { Icon: Target, title: "My Role", text: "Product Designer, UX Researcher, Prototyping" },
            ].map(({ Icon, title, text }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-[#E8E4DF] shadow-sm">
                <Icon className="w-7 h-7 text-[#C8703A] mb-3" />
                <h3 className="text-base font-semibold mb-1 text-[#1A1A1A]">{title}</h3>
                <p className="text-[#666] text-sm">{text}</p>
              </div>
            ))}
          </motion.div>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">The Problem</h2>
            <div className="bg-white rounded-2xl p-8 border border-[#E8E4DF] shadow-sm">
              <p className="text-base leading-relaxed text-[#444] mb-8">
                Students struggle with chaotic ticket reselling through massive group chats and social media DMs.
                The current process is unreliable, unsafe, and time-consuming, with high risks of scams,
                no payment protection, and difficulty finding legitimate sellers or buyers.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "68%", label: "of students have been scammed buying tickets" },
                  { value: "300+", label: "messages per day in event group chats" },
                  { value: "45 min", label: "average time to complete a ticket sale" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="text-2xl font-bold text-red-500 mb-1">{stat.value}</div>
                    <div className="text-[#666] text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">The Solution</h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <p className="text-base leading-relaxed text-[#444]">
                Tik-lish creates a streamlined, secure marketplace specifically for student ticket reselling.
                The app features instant payment processing, buyer protection, and a clean interface that
                eliminates the chaos of group chat negotiations.
              </p>
              <div className="space-y-3">
                {[
                  { Icon: Ticket, text: "Instant paywall links for quick transactions" },
                  { Icon: DollarSign, text: "Secure payment processing with buyer protection" },
                  { Icon: MessageSquare, text: "Clean interface eliminating group chat chaos" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E8E4DF]">
                    <Icon className="w-5 h-5 text-[#C8703A] flex-shrink-0" />
                    <span className="text-[#444] text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* User Research */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#1A1A1A]">User Research Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Buyer Pain Points",
                  items: [
                    "Difficulty verifying ticket authenticity",
                    "Fear of being scammed or overcharged",
                    "Time-consuming search through group chats",
                    "Unsafe payment methods (Venmo, cash)",
                  ],
                },
                {
                  title: "Seller Pain Points",
                  items: [
                    "Managing multiple interested buyers",
                    "Dealing with payment delays and disputes",
                    "Constant notifications from group chats",
                    "Risk of last-minute buyer cancellations",
                  ],
                },
              ].map(({ title, items }, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-[#E8E4DF] shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-[#C8703A]">{title}</h3>
                  <ul className="space-y-3">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8703A] mt-2 flex-shrink-0" />
                        <span className="text-[#555] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Design Process */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-[#1A1A1A]">Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discover", description: "Student interviews and group chat analysis to understand ticket reselling behavior" },
                { step: "02", title: "Define", description: "Mapping user journeys and identifying key friction points in current process" },
                { step: "03", title: "Design", description: "Creating streamlined flows focused on speed and security" },
                { step: "04", title: "Validate", description: "Prototype testing with student focus groups and iteration" },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1A1A1A] text-white font-bold text-base flex items-center justify-center mx-auto mb-3 hover:bg-[#C8703A] transition-colors">
                    {phase.step}
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-[#1A1A1A]">{phase.title}</h3>
                  <p className="text-[#777] text-xs leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Key Features</h2>
            <div className="space-y-4">
              {[
                { title: "Instant Paywall Links", description: "Sellers create secure payment links that buyers can access immediately, eliminating negotiation delays" },
                { title: "Verification System", description: "Ticket authenticity verification through QR codes and integration with official ticketing platforms" },
                { title: "Escrow Protection", description: "Payment held in escrow until ticket transfer is confirmed, protecting both buyers and sellers" },
                { title: "Smart Matching", description: "Algorithm matches buyers with sellers based on location, price range, and event preferences" },
                { title: "University Network", description: "Campus-specific marketplaces ensuring transactions stay within trusted student communities" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-white rounded-xl p-6 border border-[#E8E4DF] shadow-sm"
                >
                  <h3 className="text-base font-semibold mb-2 text-[#C8703A]">{feature.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Results & Impact</h2>
            <div className="bg-white rounded-2xl p-8 border border-[#C8703A]/20 shadow-sm">
              <p className="text-base leading-relaxed text-[#444] mb-8">
                Tik-lish successfully streamlines the student ticket reselling experience by addressing the core
                issues of trust, speed, and security. The design reduces transaction time while increasing
                user confidence through built-in protection mechanisms.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "85%", label: "Reduction in transaction time" },
                  { value: "96%", label: "User trust score in testing" },
                  { value: "0%", label: "Scam incidents in prototype testing" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-[#F2EEE9] rounded-xl">
                    <div className="text-2xl font-bold text-[#C8703A] mb-1">{stat.value}</div>
                    <div className="text-[#666] text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      <footer className="py-8 border-t border-[#E2DDD6] mt-16 bg-[#F8F7F4]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#AAA] text-xs">© 2025 Abigail Wagura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}