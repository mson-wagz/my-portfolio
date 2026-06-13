import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, Clock, Target, Heart, Shield, MessageCircle, ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Soulspace from '../../assets/Soulspace.png'

export default function TryveCaseStudy() {
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#1A1A1A]">Soulspace</h1>
                <p className="text-lg text-[#555] mb-8 leading-relaxed">
                  A seamless platform that connects therapists and patients for accessible, secure, and personalized mental health support.
                </p>
                <motion.a
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  href="https://www.figma.com/design/gkF6S66QSBjdw4g4GOHdbP/Tyrve?node-id=238-314&t=KROz3Yv5G2k99zMR-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white font-semibold rounded-full hover:bg-[#C8703A] transition-colors shadow-md"
                >
                  View Figma Design
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img src={Soulspace} alt="Soulspace Design" className="w-full rounded-2xl shadow-lg border border-[#E8E4DF]" />
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
              { Icon: Users, title: "Target Users", text: "Individuals seeking mental health support, licensed therapists" },
              { Icon: Clock, title: "Timeline", text: "6 weeks comprehensive design" },
              { Icon: Target, title: "My Role", text: "Lead UX Designer, User Research, Prototyping" },
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
                Mental health support is often inaccessible due to geographical barriers, long waiting times,
                high costs, and stigma. Many people struggle to find qualified therapists, while existing
                platforms lack personalization and fail to create a sense of trust and comfort essential
                for therapeutic relationships.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "76%", label: "of people can't access mental health care" },
                  { value: "3–6 mo", label: "average wait time for therapy" },
                  { value: "60%", label: "avoid seeking help due to stigma" },
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
                Tryve creates a secure, empathetic digital environment where users can easily connect
                with licensed therapists through various communication channels. The platform prioritizes
                trust, privacy, and personalized matching to ensure the best therapeutic relationships.
              </p>
              <div className="space-y-3">
                {[
                  { Icon: Heart, text: "Personalized therapist matching algorithm" },
                  { Icon: Shield, text: "HIPAA-compliant security and privacy" },
                  { Icon: MessageCircle, text: "Multiple communication options (text, audio, video)" },
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
                  title: "Patient Needs",
                  items: [
                    "Easy access to qualified therapists",
                    "Flexible scheduling and communication",
                    "Affordable and transparent pricing",
                    "Complete privacy and confidentiality",
                  ],
                },
                {
                  title: "Therapist Needs",
                  items: [
                    "Efficient patient management tools",
                    "Secure communication platform",
                    "Streamlined billing and payments",
                    "Professional development resources",
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
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Empathy", description: "Interviews with patients and therapists to understand emotional needs" },
                { step: "02", title: "Define", description: "Identifying core problems and user pain points in mental health access" },
                { step: "03", title: "Ideate", description: "Brainstorming solutions focused on trust, accessibility, and connection" },
                { step: "04", title: "Prototype", description: "Creating interactive prototypes for key user journeys" },
                { step: "05", title: "Test", description: "Usability testing with focus on emotional comfort and ease of use" },
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
                { title: "Smart Matching", description: "AI-powered algorithm matches patients with therapists based on specialties, personality, communication style, and preferences" },
                { title: "Flexible Sessions", description: "Choose from text messaging, voice calls, video sessions, or a combination based on comfort level and needs" },
                { title: "Progress Tracking", description: "Mood tracking, goal setting, and progress visualization to help both patients and therapists monitor improvement" },
                { title: "Crisis Support", description: "24/7 crisis intervention resources and immediate support for users in emergency situations" },
                { title: "Secure Messaging", description: "End-to-end encrypted communication with read receipts and secure file sharing for homework and resources" },
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

          {/* Design Showcase */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-[#1A1A1A]">Design Showcase</h2>

            {/* Landing Pages */}
            <div className="mb-14">
              <h3 className="text-xl font-semibold mb-6 text-[#1A1A1A]">Landing & Core Pages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { src: "/Soulspace/Landing page.png", label: "Landing Page" },
                  { src: "/Soulspace/Sign in page.png", label: "Sign In Page" },
                  { src: "/Soulspace/Sign up page.png", label: "Sign Up Page" },
                ].map(({ src, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative overflow-hidden rounded-xl border border-[#E8E4DF] hover:border-[#C8703A]/50 hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <img src={src} alt={label} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-semibold">{label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Screens */}
            <div className="mb-14">
              <h3 className="text-xl font-semibold mb-6 text-[#1A1A1A]">Desktop Experience</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6,7,8,9,10,11].map((num, index) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group relative overflow-hidden rounded-xl border border-[#E8E4DF] hover:border-[#C8703A]/50 hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <img src={`/Soulspace/Desktop - ${num}.png`} alt={`Desktop View ${num}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-semibold">Desktop View {num}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Screens */}
            <div className="mb-14">
              <h3 className="text-xl font-semibold mb-6 text-[#1A1A1A]">Mobile Experience</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { num: 13, label: "Onboarding" },
                  { num: 14, label: "Profile Setup" },
                  { num: 15, label: "Therapist Browse" },
                  { num: 16, label: "Matching" },
                  { num: 18, label: "Chat Interface" },
                  { num: 19, label: "Session Booking" },
                  { num: 20, label: "Video Call" },
                  { num: 22, label: "Progress Tracking" },
                  { num: 24, label: "Settings" },
                ].map((screen, index) => (
                  <motion.div
                    key={screen.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group relative overflow-hidden rounded-2xl border border-[#E8E4DF] hover:border-[#C8703A]/50 hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <img src={`/Soulspace/iPhone 16 Plus - ${screen.num}.png`} alt={screen.label} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs font-semibold">{screen.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Landing Variations */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#1A1A1A]">Landing Page Variations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { src: "/Soulspace/Landing page-1.png", label: "Landing Variation 1" },
                  { src: "/Soulspace/Landing page-2.png", label: "Landing Variation 2" },
                ].map(({ src, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative overflow-hidden rounded-xl border border-[#E8E4DF] hover:border-[#C8703A]/50 hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <img src={src} alt={label} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-semibold">{label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                Tryve's empathetic design approach successfully addresses the barriers to mental health care access.
                The platform creates a safe, trustworthy environment that encourages users to seek help and
                maintains long-term therapeutic relationships.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "92%", label: "User trust rating in usability tests" },
                  { value: "65%", label: "Reduction in time to find therapist" },
                  { value: "4.8/5", label: "Average user satisfaction score" },
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