import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Users, Clock, Target, ArrowLeft, Home, Play, Pause } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Novelnest from '../../assets/Novelnest.png'

const designImages = [
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 39.png", title: "Welcome Screen", description: "App introduction and onboarding", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 40.png", title: "Sign Up Flow", description: "User registration process", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 41.png", title: "Login Interface", description: "Secure user authentication", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 42.png", title: "Profile Setup", description: "Personalize your reading preferences", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 43.png", title: "Genre Selection", description: "Choose your favorite book genres", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 45.png", title: "Home Feed", description: "Personalized book recommendations", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 46.png", title: "Book Discovery", description: "Explore trending and new releases", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 47.png", title: "Book Details", description: "Detailed book information and reviews", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 48.png", title: "Reading Progress", description: "Track your reading journey", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 49.png", title: "Library Management", description: "Organize your personal collection", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 50.png", title: "Search Function", description: "Find books by title, author, or genre", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 52.png", title: "Reading Goals", description: "Set and track reading objectives", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 53.png", title: "Community Features", description: "Connect with fellow readers", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 14 & 15 Pro Max - 54.png", title: "Settings Panel", description: "Customize app preferences", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 1.png", title: "Main Dashboard", description: "Enhanced mobile home experience", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 2.png", title: "Book Browse", description: "Swipe through recommendations", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 3.png", title: "Reading Stats", description: "Detailed progress analytics", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 4.png", title: "User Profile", description: "Personal reading profile", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 5.png", title: "Onboarding Step 1", description: "Welcome to Novel Nest", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 6.png", title: "Onboarding Step 2", description: "Setup reading preferences", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 7.png", title: "Advanced Search", description: "Filter and find specific books", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 8.png", title: "Book Info Mobile", description: "Mobile-optimized book details", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 9.png", title: "Reading Mode", description: "Distraction-free reading interface", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 10.png", title: "Reading Settings", description: "Customize reading experience", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 11.png", title: "Bookmarks", description: "Save and organize favourite passages", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 12.png", title: "Notes & Highlights", description: "Personal reading annotations", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 13.png", title: "Social Features", description: "Share and discuss with friends", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 14.png", title: "Reading Challenges", description: "Join community reading events", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 15.png", title: "Book Reviews", description: "Read and write book reviews", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 16.png", title: "Wishlist", description: "Save books for future reading", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 17.png", title: "Notification Center", description: "Stay updated with reading reminders", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 18.png", title: "Achievement System", description: "Unlock reading milestones", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 19.png", title: "Book Clubs", description: "Join and create reading groups", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 20.png", title: "Author Profiles", description: "Discover author information", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 21.png", title: "Reading History", description: "Track your reading journey", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 22.png", title: "Recommendation Engine", description: "AI-powered book suggestions", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 23.png", title: "Offline Reading", description: "Download books for offline access", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 24.png", title: "Audio Integration", description: "Switch between reading and listening", category: "Mobile" },
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 25.png", title: "Support & Help", description: "User assistance and FAQs", category: "Mobile" },
]

const EnhancedDesignCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState('All')
  const [isPlaying, setIsPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const filteredImages = filter === 'All' ? designImages : designImages.filter(img => img.category === filter)

  useEffect(() => {
    if (!isPlaying || isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPlaying, isPaused, filteredImages.length])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000)
  }
  const togglePlayPause = () => setIsPlaying(!isPlaying)
  const currentImage = filteredImages[currentIndex]

  return (
    <div className="relative">
      {/* Filter and Controls */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex gap-3 flex-wrap">
          {['All', 'Mobile'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setFilter(category); setCurrentIndex(0) }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-[#C8703A] text-white shadow-sm'
                  : 'bg-white border border-[#E2DDD6] text-[#555] hover:border-[#C8703A] hover:text-[#C8703A]'
              }`}
            >
              {category}{filter === category && ` (${filteredImages.length})`}
            </motion.button>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayPause}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#C8703A] transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </motion.button>
      </div>

      {/* Main Carousel */}
      <div
        className="relative bg-white rounded-2xl border border-[#E8E4DF] shadow-sm overflow-hidden p-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="w-full h-1 bg-[#E8E4DF]">
            <motion.div
              className="h-full bg-[#C8703A]"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / filteredImages.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shadow-lg hover:bg-[#C8703A] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shadow-lg hover:bg-[#C8703A] transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        <div className="relative h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative max-w-full max-h-full flex items-center justify-center"
            >
              <img
                src={currentImage?.src}
                alt={currentImage?.title}
                className="rounded-xl shadow-lg object-contain max-h-[540px] w-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          key={`info-${currentIndex}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-center mt-6"
        >
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{currentImage?.title}</h3>
          <p className="text-[#666] text-sm mb-3">{currentImage?.description}</p>
          <div className="flex items-center justify-center gap-3">
            <span className="inline-block px-3 py-1 bg-[#C8703A]/10 text-[#C8703A] rounded-full text-xs font-semibold border border-[#C8703A]/20">
              {currentImage?.category}
            </span>
            <span className="text-[#AAA] text-xs">Screen {currentIndex + 1} of {filteredImages.length}</span>
          </div>
        </motion.div>
      </div>

      {/* Thumbnails */}
      <div className="mt-6">
        <div className="flex justify-center gap-2 flex-wrap max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-[#C8703A] shadow-md ring-2 ring-[#C8703A]/20'
                  : 'border-[#E8E4DF] hover:border-[#C8703A]/50'
              }`}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-[#C8703A]/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#C8703A] rounded-full" />
                </div>
              )}
              <div className="absolute bottom-0 right-0 bg-[#1A1A1A]/70 text-white text-[10px] px-1 rounded-tl">
                {index + 1}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {isPlaying && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EEE9] rounded-full text-xs text-[#888]">
            <div className="w-1.5 h-1.5 bg-[#C8703A] rounded-full animate-pulse" />
            Auto-playing · {isPaused ? 'paused' : 'next in 4s'}
          </div>
        </div>
      )}
    </div>
  )
}

export default function NovelNestCaseStudy() {
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#1A1A1A]">Novel Nest</h1>
                <p className="text-lg text-[#555] mb-8 leading-relaxed">
                  A modern web design for book lovers featuring a clean, intuitive interface that makes discovering and organizing your next great read effortless.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img src={Novelnest} alt="Novel Nest Design" className="w-full rounded-2xl shadow-lg border border-[#E8E4DF]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C8703A] mb-2 text-center">Design Showcase</p>
            <h2 className="text-3xl font-bold mb-2 text-[#1A1A1A] text-center">Complete Design Showcase</h2>
            <p className="text-center text-[#777] mb-10 text-base">
              Explore all {designImages.length} screens from the Novel Nest design system
            </p>
            <EnhancedDesignCarousel />
          </motion.section>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {[
              { Icon: Users, title: "Target Users", text: "Book enthusiasts, casual readers, and literature students" },
              { Icon: Clock, title: "Timeline", text: "3 weeks design sprint" },
              { Icon: Target, title: "My Role", text: "UI/UX Designer, User Research" },
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
              <p className="text-base leading-relaxed text-[#444]">
                Book lovers often struggle with fragmented reading experiences across multiple platforms.
                Existing book discovery apps lack personalization, have cluttered interfaces, and don't
                provide a seamless way to track reading progress, manage collections, and connect with
                fellow readers in a meaningful way.
              </p>
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
                Novel Nest provides a unified, elegant platform that combines book discovery,
                progress tracking, and community features in one beautifully designed interface.
                The app focuses on simplicity while offering powerful personalization features.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized book recommendations",
                  "Clean, distraction-free reading interface",
                  "Smart progress tracking and goals",
                  "Community features for book discussions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#E8E4DF]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8703A] mt-2 flex-shrink-0" />
                    <span className="text-[#444] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
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
                { step: "01", title: "Research", description: "User interviews with book enthusiasts to understand pain points" },
                { step: "02", title: "Ideation", description: "Sketching and wireframing key user flows and features" },
                { step: "03", title: "Design", description: "Creating high-fidelity mockups with focus on typography and readability" },
                { step: "04", title: "Testing", description: "Usability testing and iteration based on user feedback" },
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
                { title: "Smart Discovery", description: "AI-powered recommendations based on reading history, genres, and community ratings" },
                { title: "Reading Progress", description: "Visual progress tracking with reading goals, streaks, and milestone celebrations" },
                { title: "Personal Library", description: "Organize books into custom shelves with tags, ratings, and personal notes" },
                { title: "Community Hub", description: "Join book clubs, participate in discussions, and share reviews with fellow readers" },
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
                The Novel Nest design successfully addresses the core problems of book discovery and
                reading management through a user-centered approach. The clean, intuitive interface
                reduces cognitive load while powerful features enhance the reading experience.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "95%", label: "User satisfaction in testing" },
                  { value: "40%", label: "Faster book discovery" },
                  { value: "3×", label: "More engagement with reading goals" },
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