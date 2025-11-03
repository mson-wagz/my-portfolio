import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Users, Clock, Target, BookOpen, Brain, Users2, ArrowLeft, Home, Play, Pause } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import EduLearn from '../../assets/Edulearn.png'

// Complete design images data with all your EduLearn images
const designImages = [
  // Desktop Views
  { src: "/EDU LEARN/Desktop - 1.png", title: "Main Dashboard", description: "Clean learning management interface", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 2.png", title: "Course Overview", description: "Comprehensive course structure display", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 3.png", title: "Learning Path", description: "Guided learning progression interface", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 4.png", title: "Course Catalog", description: "Browse and discover new courses", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 5.png", title: "Student Profile", description: "Personalized learning dashboard", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 6.png", title: "Interactive Lessons", description: "Engaging multimedia learning content", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 7.png", title: "Assessment Center", description: "Quiz and testing interface", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 8.png", title: "Progress Tracking", description: "Visual learning analytics", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 9.png", title: "Discussion Forum", description: "Collaborative learning space", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 10.png", title: "Resource Library", description: "Educational materials repository", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 11.png", title: "Calendar View", description: "Schedule and deadline management", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 12.png", title: "Instructor Tools", description: "Teaching and grading interface", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 13.png", title: "Analytics Dashboard", description: "Learning performance insights", category: "Desktop" },
  { src: "/EDU LEARN/Desktop - 14.png", title: "Settings Panel", description: "Platform customization options", category: "Desktop" },
  
  // Studio Display Mockups
  { src: "/EDU LEARN/Studio Display Mockup.png", title: "Large Screen Experience", description: "Optimized for large displays", category: "Desktop" },
  { src: "/EDU LEARN/Studio Display Mockup-1.png", title: "Classroom Display", description: "Interactive whiteboard interface", category: "Desktop" },
  { src: "/EDU LEARN/Studio Display Mockup-2.png", title: "Presentation Mode", description: "Full-screen learning content", category: "Desktop" },
  
  // Authentication Pages
  { src: "/EDU LEARN/Login page.png", title: "Login Interface", description: "Secure student authentication", category: "Desktop" },
  { src: "/EDU LEARN/Sign up page.png", title: "Registration Flow", description: "New user onboarding", category: "Desktop" },
  { src: "/EDU LEARN/Signup page.png", title: "Account Creation", description: "Student enrollment process", category: "Desktop" },
  
  // iPad Views
  { src: "/EDU LEARN/iPad Pro 12.9_ - 1.png", title: "Tablet Dashboard", description: "Touch-optimized learning interface", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 2.png", title: "Course Navigation", description: "Intuitive tablet course browsing", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 3.png", title: "Interactive Content", description: "Touch-enabled learning materials", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 4.png", title: "Note Taking", description: "Digital annotation and notes", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 5.png", title: "Video Lessons", description: "Multimedia learning experience", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 7.png", title: "Assessment Mode", description: "Tablet-optimized testing", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 8.png", title: "Study Groups", description: "Collaborative tablet interface", category: "Tablet" },
  
  // iPhone Floating Mockups
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup.png", title: "Mobile Home", description: "Mobile learning hub", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-1.png", title: "Course List", description: "Browse courses on mobile", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-2.png", title: "Lesson View", description: "Mobile-optimized content", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-3.png", title: "Progress Tracker", description: "Track learning on the go", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-4.png", title: "Quick Quiz", description: "Mobile assessment interface", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-5.png", title: "Study Reminders", description: "Learning notifications", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-6.png", title: "Profile Settings", description: "Mobile account management", category: "Mobile" },
  
  // iPhone 14/15 Pro Max Series
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 3.png", title: "Mobile Dashboard", description: "Enhanced mobile learning interface", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 4.png", title: "Course Details", description: "Detailed course information", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 5.png", title: "Learning Path Mobile", description: "Progressive learning on mobile", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 6.png", title: "Interactive Exercises", description: "Mobile learning activities", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 7.png", title: "Achievement System", description: "Gamified learning progress", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 8.png", title: "Discussion Mobile", description: "Mobile community features", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 9.png", title: "Search & Filter", description: "Find learning content easily", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 10.png", title: "Video Player", description: "Mobile video learning", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 11.png", title: "Assignment View", description: "Submit work on mobile", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 12.png", title: "Grade Book", description: "View academic progress", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 13.png", title: "Calendar Mobile", description: "Schedule management on mobile", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 14.png", title: "Help & Support", description: "Mobile assistance features", category: "Mobile" },
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 15.png", title: "Offline Mode", description: "Download content for offline study", category: "Mobile" }
]

// Enhanced Carousel Component for EduLearn
const EduLearnCarousel = () => {
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
    setTimeout(() => setIsPaused(false), 3000)
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
          {['All', 'Desktop', 'Tablet', 'Mobile'].map((category) => (
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

        {/* Image Display */}
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
                    currentImage?.category === 'Mobile' || currentImage?.category === 'Tablet'
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
                  layoutId="eduLearnActiveIndicator"
                  className="absolute inset-0 bg-[#F5A623]/30 flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-[#F5A623] rounded-full" />
                </motion.div>
              )}
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

export default function EduLearnCaseStudy() {
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
                  EduLearn
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  A comprehensive e-learning platform design focused on accessibility, engagement, and personalized learning experiences for students of all backgrounds.
                </motion.p>

              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img
                  src={EduLearn}
                  alt="EduLearn Design"
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
              Explore all {designImages.length} screens from the EduLearn design system
            </p>
            <EduLearnCarousel />
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
              <p className="text-gray-300">Students, educators, professionals seeking skill development</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Clock className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-gray-300">8 weeks comprehensive design</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Target className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold mb-2">My Role</h3>
              <p className="text-gray-300">Lead UX Designer, Accessibility Consultant, User Research</p>
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
                Traditional e-learning platforms often fail to engage learners effectively, lack accessibility features, 
                and provide one-size-fits-all experiences. Students struggle with motivation, progress tracking, 
                and finding relevant content that matches their learning pace and style.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">67%</div>
                  <div className="text-gray-300 text-sm">of online courses are never completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">43%</div>
                  <div className="text-gray-300 text-sm">of learners find content irrelevant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">71%</div>
                  <div className="text-gray-300 text-sm">struggle with self-motivation</div>
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
                  EduLearn creates an adaptive, inclusive learning environment that personalizes content delivery, 
                  incorporates gamification elements, and provides comprehensive accessibility features to ensure 
                  every learner can succeed.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <BookOpen className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Adaptive learning paths based on individual progress</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Brain className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">AI-powered content recommendations</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Users2 className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">Collaborative learning and peer interaction</span>
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
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Learner Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Difficulty maintaining motivation and engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Lack of personalized learning experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Limited accessibility options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Inadequate progress tracking and feedback</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-[#F5A623]">Educator Needs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Tools for creating engaging content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Student progress analytics and insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Efficient assessment and grading systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Communication tools for student interaction</span>
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
                  title: "Research",
                  description: "Extensive user interviews with students, educators, and accessibility experts"
                },
                {
                  step: "02", 
                  title: "Analyze",
                  description: "Competitive analysis and identification of key pain points in existing platforms"
                },
                {
                  step: "03",
                  title: "Ideate",
                  description: "Design workshops focusing on personalization and accessibility"
                },
                {
                  step: "04",
                  title: "Prototype",
                  description: "Interactive prototypes with multiple learning pathways"
                },
                {
                  step: "05",
                  title: "Test",
                  description: "Accessibility testing and usability validation with diverse user groups"
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
                  title: "Adaptive Learning Engine",
                  description: "AI-powered system that adjusts content difficulty and pacing based on individual learning patterns and preferences"
                },
                {
                  title: "Universal Design",
                  description: "Comprehensive accessibility features including screen reader support, keyboard navigation, and customizable visual settings"
                },
                {
                  title: "Gamified Progress",
                  description: "Achievement systems, learning streaks, and interactive challenges to maintain engagement and motivation"
                },
                {
                  title: "Collaborative Spaces",
                  description: "Virtual study groups, peer review systems, and discussion forums to foster community learning"
                },
                {
                  title: "Smart Analytics",
                  description: "Detailed progress tracking with actionable insights for both learners and educators"
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
                EduLearn's user-centered design approach successfully addresses the key challenges in online education. 
                The platform's adaptive features and accessibility focus create an inclusive learning environment 
                that accommodates diverse learning needs and styles.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">78%</div>
                  <div className="text-gray-300">Increase in course completion rates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">89%</div>
                  <div className="text-gray-300">Accessibility compliance score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F5A623] mb-2">4.7/5</div>
                  <div className="text-gray-300">User satisfaction rating</div>
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