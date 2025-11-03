import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, Clock, Target, Ticket, DollarSign, MessageSquare, ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Tiklish from '../../assets/Tiklish.png'

export default function TiklishCaseStudy() {
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
                  Tik-lish
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  A peer-to-peer ticketing app that lets students securely resell and buy event tickets through instant paywall links—eliminating the chaos of massive group chats and endless DMs.
                </motion.p>
               
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img
                  src={Tiklish}
                  alt="Tik-lish Design"
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
              <p className="text-gray-300">College students, event organizers, young professionals</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Clock className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-gray-300">4 weeks design sprint</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Target className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">My Role</h3>
              <p className="text-gray-300">Product Designer, UX Researcher, Prototyping</p>
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
                Students struggle with chaotic ticket reselling through massive group chats and social media DMs. 
                The current process is unreliable, unsafe, and time-consuming, with high risks of scams, 
                no payment protection, and difficulty finding legitimate sellers or buyers.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">68%</div>
                  <div className="text-gray-300 text-sm">of students have been scammed buying tickets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">300+</div>
                  <div className="text-gray-300 text-sm">messages per day in event group chats</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">45min</div>
                  <div className="text-gray-300 text-sm">average time to complete a ticket sale</div>
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
                  Tik-lish creates a streamlined, secure marketplace specifically for student ticket reselling. 
                  The app features instant payment processing, buyer protection, and a clean interface that 
                  eliminates the chaos of group chat negotiations.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Ticket className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Instant paywall links for quick transactions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <DollarSign className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Secure payment processing with buyer protection</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Clean interface eliminating group chat chaos</span>
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
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Buyer Pain Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Difficulty verifying ticket authenticity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Fear of being scammed or overcharged</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Time-consuming search through group chats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Unsafe payment methods (Venmo, cash)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Seller Pain Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Managing multiple interested buyers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Dealing with payment delays and disputes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Constant notifications from group chats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Risk of last-minute buyer cancellations</span>
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
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discover",
                  description: "Student interviews and group chat analysis to understand ticket reselling behavior"
                },
                {
                  step: "02", 
                  title: "Define",
                  description: "Mapping user journeys and identifying key friction points in current process"
                },
                {
                  step: "03",
                  title: "Design",
                  description: "Creating streamlined flows focused on speed and security"
                },
                {
                  step: "04",
                  title: "Validate",
                  description: "Prototype testing with student focus groups and iteration"
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
                  title: "Instant Paywall Links",
                  description: "Sellers create secure payment links that buyers can access immediately, eliminating negotiation delays"
                },
                {
                  title: "Verification System",
                  description: "Ticket authenticity verification through QR codes and integration with official ticketing platforms"
                },
                {
                  title: "Escrow Protection",
                  description: "Payment held in escrow until ticket transfer is confirmed, protecting both buyers and sellers"
                },
                {
                  title: "Smart Matching",
                  description: "Algorithm matches buyers with sellers based on location, price range, and event preferences"
                },
                {
                  title: "University Network",
                  description: "Campus-specific marketplaces ensuring transactions stay within trusted student communities"
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
                Tik-lish successfully streamlines the student ticket reselling experience by addressing the core 
                issues of trust, speed, and security. The design reduces transaction time while increasing 
                user confidence through built-in protection mechanisms.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">85%</div>
                  <div className="text-gray-300">Reduction in transaction time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">96%</div>
                  <div className="text-gray-300">User trust score in testing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">0%</div>
                  <div className="text-gray-300">Scam incidents in prototype testing</div>
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