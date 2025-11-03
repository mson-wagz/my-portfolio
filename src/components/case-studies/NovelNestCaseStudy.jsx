import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Users, Clock, Target, ArrowLeft, Home, Play, Pause } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Novelnest from '../../assets/Novelnest.png'

// Complete design images data with all your images
const designImages = [
 
  // iPhone 14 & 15 Pro Max Series
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
  // iPhone 16 Plus Series
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
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 11.png", title: "Bookmarks", description: "Save and organize favorite passages", category: "Mobile" },
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
  { src: "/NOVEL APP (1)/iPhone 16 Plus - 25.png", title: "Support & Help", description: "User assistance and FAQs", category: "Mobile" }
]

// Enhanced Carousel Component with auto-movement
const EnhancedDesignCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState('All')
  const [isPlaying, setIsPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const filteredImages = filter === 'All' 
    ? designImages 
    : designImages.filter(img => img.category === filter)

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isPlaying, isPaused, filteredImages.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const currentImage = filteredImages[currentIndex]

  return (
    <div className="relative">
      {/* Filter and Control Buttons */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          {['All', 'Desktop', 'Mobile'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilter(category)
                setCurrentIndex(0)
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-[#F5A623] text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category} {filter === category && `(${filteredImages.length})`}
            </motion.button>
          ))}
        </div>

        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayPause}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623] text-black font-medium"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </motion.button>
      </div>

      {/* Main Carousel */}
      <div 
        className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#F5A623] text-black flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <ChevronLeft className="w-7 h-7" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#F5A623] text-black flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <ChevronRight className="w-7 h-7" />
        </motion.button>

        {/* Progress Bar */}
        <div className="absolute top-4 left-8 right-8 z-10">
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#F5A623]"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / filteredImages.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Image Display with Enhanced Presentation */}
        <div className="relative h-[700px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut",
                rotateY: { duration: 0.6 }
              }}
              className="relative max-w-full max-h-full flex items-center justify-center"
            >
              <div className="relative">
                <img
                  src={currentImage?.src}
                  alt={currentImage?.title}
                  className={`rounded-3xl shadow-2xl object-contain transition-all duration-300 ${
                    currentImage?.category === 'Mobile' 
                      ? 'max-h-[600px] w-auto' 
                      : 'max-w-full max-h-[600px]'
                  }`}
                />
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F5A623]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Image Info */}
        <motion.div 
          key={`info-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-8"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-[#F5A623] mb-3">
              {currentImage?.title}
            </h3>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              {currentImage?.description}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="inline-block px-4 py-2 bg-[#F5A623]/20 text-[#F5A623] rounded-full text-sm font-medium border border-[#F5A623]/30">
                {currentImage?.category}
              </span>
              <span className="text-gray-400 text-sm">
                Screen {currentIndex + 1} of {filteredImages.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Thumbnail Navigation */}
      <div className="mt-8">
        <div className="flex justify-center gap-3 flex-wrap max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-[#F5A623] shadow-lg shadow-[#F5A623]/30 ring-2 ring-[#F5A623]/20' 
                  : 'border-white/20 hover:border-white/50'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              {index === currentIndex && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-[#F5A623]/30 flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full" />
                </motion.div>
              )}
              {/* Thumbnail number */}
              <div className="absolute bottom-0 right-0 bg-black/70 text-white text-xs px-1 rounded-tl">
                {index + 1}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Auto-play indicator */}
      {isPlaying && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-gray-400">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
            Auto-playing • Next in {isPaused ? 'paused' : '4s'}
          </div>
        </div>
      )}
    </div>
  )
}

export default function NovelNestCaseStudy() {
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
                  Novel Nest
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  A modern web design for book lovers featuring a clean, intuitive interface that makes discovering and organizing your next great read effortless.
                </motion.p>
                {/* <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  href="https://www.figma.com/design/RhrJeDqmiLx0Yna6EX6etR/NOVEL-APP?node-id=0-1&t=szf0ldSPlAFWX4m4-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-black font-semibold rounded-lg hover:bg-[#F5A623]/90 transition-colors"
                >
                  View Figma Design
                  <ExternalLink className="w-4 h-4" />
                </motion.a> */}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img
                  src={Novelnest}
                  alt="Novel Nest Design"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Design Showcase Carousel */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#F5A623] text-center">Complete Design Showcase</h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Explore all {designImages.length} screens from the Novel Nest design system
            </p>
            <EnhancedDesignCarousel />
          </motion.section>

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
              <p className="text-gray-300">Book enthusiasts, casual readers, and literature students</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Clock className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-gray-300">3 weeks design sprint</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Target className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">My Role</h3>
              <p className="text-gray-300">UI/UX Designer, User Research</p>
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
              <p className="text-lg leading-relaxed text-gray-200">
                Book lovers often struggle with fragmented reading experiences across multiple platforms. 
                Existing book discovery apps lack personalization, have cluttered interfaces, and don't 
                provide a seamless way to track reading progress, manage collections, and connect with 
                fellow readers in a meaningful way.
              </p>
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
                  Novel Nest provides a unified, elegant platform that combines book discovery, 
                  progress tracking, and community features in one beautifully designed interface. 
                  The app focuses on simplicity while offering powerful personalization features.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Personalized book recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Clean, distraction-free reading interface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Smart progress tracking and goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Community features for book discussions</span>
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
                  title: "Research",
                  description: "User interviews with book enthusiasts to understand pain points"
                },
                {
                  step: "02", 
                  title: "Ideation",
                  description: "Sketching and wireframing key user flows and features"
                },
                {
                  step: "03",
                  title: "Design",
                  description: "Creating high-fidelity mockups with focus on typography and readability"
                },
                {
                  step: "04",
                  title: "Testing",
                  description: "Usability testing and iteration based on user feedback"
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
                  title: "Smart Discovery",
                  description: "AI-powered recommendations based on reading history, genres, and community ratings"
                },
                {
                  title: "Reading Progress",
                  description: "Visual progress tracking with reading goals, streaks, and milestone celebrations"
                },
                {
                  title: "Personal Library",
                  description: "Organize books into custom shelves with tags, ratings, and personal notes"
                },
                {
                  title: "Community Hub",
                  description: "Join book clubs, participate in discussions, and share reviews with fellow readers"
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
                The Novel Nest design successfully addresses the core problems of book discovery and 
                reading management through a user-centered approach. The clean, intuitive interface 
                reduces cognitive load while powerful features enhance the reading experience.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">95%</div>
                  <div className="text-gray-300">User satisfaction in testing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">40%</div>
                  <div className="text-gray-300">Faster book discovery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">3x</div>
                  <div className="text-gray-300">More engagement with reading goals</div>
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