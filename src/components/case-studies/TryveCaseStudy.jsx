import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, Clock, Target, Heart, Shield, MessageCircle, ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Soulspace from '../../assets/Soulspace.png'

export default function TryveCaseStudy() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#3A3A3A] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#3A3A3A]/95 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="text-xl font-bold tracking-tight cursor-pointer"
            onClick={() => navigate('/')}
          >
            PORTFO<span className="text-[#F5A623]">//</span>IO
          </motion.div>
          
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623] text-black hover:bg-[#F5A623]/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  Tryve
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  A seamless platform that connects therapists and patients for accessible, secure, and personalized mental health support.
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  href="https://www.figma.com/design/gkF6S66QSBjdw4g4GOHdbP/Tyrve?node-id=238-314&t=KROz3Yv5G2k99zMR-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-black font-semibold rounded-lg hover:bg-[#F5A623]/90 transition-colors"
                >
                  View Figma Design
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img
                  src={Soulspace}
                  alt="Soulspace Design"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Users className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Target Users</h3>
              <p className="text-gray-300">Individuals seeking mental health support, licensed therapists</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Clock className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-gray-300">6 weeks comprehensive design</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Target className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">My Role</h3>
              <p className="text-gray-300">Lead UX Designer, User Research, Prototyping</p>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#F5A623]">The Problem</h2>
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                Mental health support is often inaccessible due to geographical barriers, long waiting times, 
                high costs, and stigma. Many people struggle to find qualified therapists, while existing 
                platforms lack personalization and fail to create a sense of trust and comfort essential 
                for therapeutic relationships.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">76%</div>
                  <div className="text-gray-300 text-sm">of people can't access mental health care</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">3-6 months</div>
                  <div className="text-gray-300 text-sm">average wait time for therapy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">60%</div>
                  <div className="text-gray-300 text-sm">avoid seeking help due to stigma</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#F5A623]">The Solution</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  Tryve creates a secure, empathetic digital environment where users can easily connect 
                  with licensed therapists through various communication channels. The platform prioritizes 
                  trust, privacy, and personalized matching to ensure the best therapeutic relationships.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Heart className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Personalized therapist matching algorithm</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Shield className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">HIPAA-compliant security and privacy</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Multiple communication options (text, audio, video)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* User Research */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-[#F5A623]">User Research Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Patient Needs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Easy access to qualified therapists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Flexible scheduling and communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Affordable and transparent pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Complete privacy and confidentiality</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Therapist Needs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Efficient patient management tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Secure communication platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Streamlined billing and payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Professional development resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Design Process */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-[#F5A623]">Design Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Empathy",
                  description: "Interviews with patients and therapists to understand emotional needs"
                },
                {
                  step: "02", 
                  title: "Define",
                  description: "Identifying core problems and user pain points in mental health access"
                },
                {
                  step: "03",
                  title: "Ideate",
                  description: "Brainstorming solutions focused on trust, accessibility, and connection"
                },
                {
                  step: "04",
                  title: "Prototype",
                  description: "Creating interactive prototypes for key user journeys"
                },
                {
                  step: "05",
                  title: "Test",
                  description: "Usability testing with focus on emotional comfort and ease of use"
                }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F5A623] text-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-300 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-[#F5A623]">Key Features</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Smart Matching",
                  description: "AI-powered algorithm matches patients with therapists based on specialties, personality, communication style, and preferences"
                },
                {
                  title: "Flexible Sessions",
                  description: "Choose from text messaging, voice calls, video sessions, or a combination based on comfort level and needs"
                },
                {
                  title: "Progress Tracking",
                  description: "Mood tracking, goal setting, and progress visualization to help both patients and therapists monitor improvement"
                },
                {
                  title: "Crisis Support",
                  description: "24/7 crisis intervention resources and immediate support for users in emergency situations"
                },
                {
                  title: "Secure Messaging",
                  description: "End-to-end encrypted communication with read receipts and secure file sharing for homework and resources"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#F5A623]">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Design Showcase */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-[#F5A623]">Design Showcase</h2>
            
            {/* Landing Pages */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Landing & Core Pages</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300">
                    <img
                      src="/Soulspace/Landing page.png"
                      alt="Tryve Landing Page"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-semibold">Landing Page</h4>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300">
                    <img
                      src="/Soulspace/Sign in page.png"
                      alt="Tryve Sign In Page"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-semibold">Sign In Page</h4>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300">
                    <img
                      src="/Soulspace/Sign up page.png"
                      alt="Tryve Sign Up Page"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-semibold">Sign Up Page</h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Desktop Screens */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Desktop Experience</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300">
                      <img
                        src={`/Soulspace/Desktop - ${num}.png`}
                        alt={`Tryve Desktop Screen ${num}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="text-white font-semibold">Desktop View {num}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Screens */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Mobile Experience</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { num: 13, label: "Onboarding" },
                  { num: 14, label: "Profile Setup" },
                  { num: 15, label: "Therapist Browse" },
                  { num: 16, label: "Matching" },
                  { num: 18, label: "Chat Interface" },
                  { num: 19, label: "Session Booking" },
                  { num: 20, label: "Video Call" },
                  { num: 22, label: "Progress Tracking" },
                  { num: 24, label: "Settings" }
                ].map((screen, index) => (
                  <motion.div
                    key={screen.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300">
                      <img
                        src={`/Soulspace/iPhone 16 Plus - ${screen.num}.png`}
                        alt={`Tryve Mobile - ${screen.label}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="text-white font-semibold text-sm">{screen.label}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Landing Variations */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Landing Page Variations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300">
                    <img
                      src="/Soulspace/Landing page-1.png"
                      alt="Tryve Landing Variation 1"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-semibold">Landing Variation 1</h4>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300">
                    <img
                      src="/Soulspace/Landing page-2.png"
                      alt="Tryve Landing Variation 2"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-semibold">Landing Variation 2</h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-[#F5A623]">Results & Impact</h2>
            <div className="bg-gradient-to-br from-[#F5A623]/10 to-[#F5A623]/5 rounded-2xl p-8 border border-[#F5A623]/20">
              <p className="text-lg leading-relaxed text-gray-200 mb-6">
                Tryve's empathetic design approach successfully addresses the barriers to mental health care access. 
                The platform creates a safe, trustworthy environment that encourages users to seek help and 
                maintains long-term therapeutic relationships.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">92%</div>
                  <div className="text-gray-300">User trust rating in usability tests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">65%</div>
                  <div className="text-gray-300">Reduction in time to find therapist</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">4.8/5</div>
                  <div className="text-gray-300">Average user satisfaction score</div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">© 2025 Abigail Wagura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}