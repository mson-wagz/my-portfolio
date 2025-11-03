import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, Clock, Target, GraduationCap, Calendar, FileText, ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AcademmiHub from '../../assets/AcademmiHub.png'

export default function AcademiaHubCaseStudy() {
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
                  Academia Hub
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  A comprehensive academic platform redesign focused on enhancing student experience, improving engagement, and streamlining university administration processes.
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  href="https://www.figma.com/design/CIBUAu50oLPdWAhNTpwFEn/SOLO-PROJECT-EDU-LEARN?node-id=0-1&t=tN0BasigbLPcBoGe-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-black font-semibold rounded-lg hover:bg-[#F5A623]/90 transition-colors"
                >
                  View Case Study
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
                  src={AcademmiHub}
                  alt="Academia Hub Design"
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
              <p className="text-gray-300">University students, faculty, administrators, academic staff</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Clock className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-gray-300">12 weeks comprehensive redesign</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Target className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">My Role</h3>
              <p className="text-gray-300">UX Lead, Service Designer, User Research</p>
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
                The existing university academic platform suffered from poor information architecture, 
                fragmented user experiences, and outdated interfaces. Students struggled to navigate 
                course registration, access resources, and track academic progress efficiently.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">73%</div>
                  <div className="text-gray-300 text-sm">of students find the current system confusing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">12min</div>
                  <div className="text-gray-300 text-sm">average time to complete simple tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">45%</div>
                  <div className="text-gray-300 text-sm">abandon tasks due to complexity</div>
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
                  Academia Hub provides a unified, intuitive academic experience through streamlined navigation, 
                  personalized dashboards, and integrated services that connect all aspects of university life 
                  in one cohesive platform.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Centralized academic dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Calendar className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Integrated scheduling and course management</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <FileText className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Streamlined resource access and document management</span>
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
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Student Pain Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Confusing navigation and information architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Fragmented services across multiple platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Difficult course registration process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Limited mobile accessibility</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Faculty Needs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Efficient grade management and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Streamlined communication with students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Easy content distribution and assignment management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Comprehensive student progress tracking</span>
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
            <div className="grid md:grid-cols-6 gap-4">
              {[
                {
                  step: "01",
                  title: "Audit",
                  description: "Comprehensive analysis of existing system and user journeys"
                },
                {
                  step: "02", 
                  title: "Research",
                  description: "Stakeholder interviews and usability testing of current platform"
                },
                {
                  step: "03",
                  title: "Map",
                  description: "Service design mapping and information architecture restructuring"
                },
                {
                  step: "04",
                  title: "Design",
                  description: "Wireframing and high-fidelity interface design"
                },
                {
                  step: "05",
                  title: "Prototype",
                  description: "Interactive prototypes for key user flows"
                },
                {
                  step: "06",
                  title: "Validate",
                  description: "User testing and stakeholder feedback integration"
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
                  <div className="w-14 h-14 rounded-full bg-[#F5A623] text-black font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {phase.step}
                  </div>
                  <h3 className="text-base font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-300 text-xs">{phase.description}</p>
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
                  title: "Unified Dashboard",
                  description: "Personalized home screen displaying relevant academic information, deadlines, and quick actions based on user role"
                },
                {
                  title: "Smart Course Registration",
                  description: "Intelligent course selection with prerequisite checking, schedule conflict detection, and waitlist management"
                },
                {
                  title: "Resource Library",
                  description: "Centralized access to course materials, library resources, and academic tools with advanced search capabilities"
                },
                {
                  title: "Academic Progress Tracking",
                  description: "Visual progress indicators, degree planning tools, and graduation timeline tracking"
                },
                {
                  title: "Communication Hub",
                  description: "Integrated messaging system connecting students, faculty, and staff with context-aware notifications"
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
                The Academia Hub redesign successfully transformed the university's digital experience, 
                significantly improving user satisfaction and operational efficiency. The unified platform 
                reduced complexity while enhancing functionality across all user groups.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">84%</div>
                  <div className="text-gray-300">Improvement in user satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">58%</div>
                  <div className="text-gray-300">Reduction in task completion time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">91%</div>
                  <div className="text-gray-300">Successful first-time task completion</div>
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