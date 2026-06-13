"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Users, Clock, Target, BookOpen, Brain, Users2, ArrowLeft, Home, Play, Pause } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import EduLearn from '../../assets/Edulearn.png'

const designImages = [
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
  { src: "/EDU LEARN/Studio Display Mockup.png", title: "Large Screen Experience", description: "Optimized for large displays", category: "Desktop" },
  { src: "/EDU LEARN/Studio Display Mockup-1.png", title: "Classroom Display", description: "Interactive whiteboard interface", category: "Desktop" },
  { src: "/EDU LEARN/Studio Display Mockup-2.png", title: "Presentation Mode", description: "Full-screen learning content", category: "Desktop" },
  { src: "/EDU LEARN/Login page.png", title: "Login Interface", description: "Secure student authentication", category: "Desktop" },
  { src: "/EDU LEARN/Sign up page.png", title: "Registration Flow", description: "New user onboarding", category: "Desktop" },
  { src: "/EDU LEARN/Signup page.png", title: "Account Creation", description: "Student enrollment process", category: "Desktop" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 1.png", title: "Tablet Dashboard", description: "Touch-optimized learning interface", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 2.png", title: "Course Navigation", description: "Intuitive tablet course browsing", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 3.png", title: "Interactive Content", description: "Touch-enabled learning materials", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 4.png", title: "Note Taking", description: "Digital annotation and notes", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 5.png", title: "Video Lessons", description: "Multimedia learning experience", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 7.png", title: "Assessment Mode", description: "Tablet-optimized testing", category: "Tablet" },
  { src: "/EDU LEARN/iPad Pro 12.9_ - 8.png", title: "Study Groups", description: "Collaborative tablet interface", category: "Tablet" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup.png", title: "Mobile Home", description: "Mobile learning hub", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-1.png", title: "Course List", description: "Browse courses on mobile", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-2.png", title: "Lesson View", description: "Mobile-optimized content", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-3.png", title: "Progress Tracker", description: "Track learning on the go", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-4.png", title: "Quick Quiz", description: "Mobile assessment interface", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-5.png", title: "Study Reminders", description: "Learning notifications", category: "Mobile" },
  { src: "/EDU LEARN/Floating iPhone 15 Pro Black Titanium Mockup-6.png", title: "Profile Settings", description: "Mobile account management", category: "Mobile" },
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
  { src: "/EDU LEARN/iPhone 14 & 15 Pro Max - 15.png", title: "Offline Mode", description: "Download content for offline study", category: "Mobile" },
]

const EduLearnCarousel = () => {
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
      {/* Filter and Control Buttons */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex gap-3 flex-wrap">
          {['All', 'Desktop', 'Tablet', 'Mobile'].map((category) => (
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

        {/* Navigation Arrows */}
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

        {/* Image Display */}
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
                className={`rounded-xl shadow-lg object-contain ${
                  currentImage?.category === 'Mobile' || currentImage?.category === 'Tablet'
                    ? 'max-h-[540px] w-auto'
                    : 'max-w-full max-h-[540px]'
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Info */}
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

      {/* Thumbnail Navigation */}
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

export default function EduLearnCaseStudy() {
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#1A1A1A]">EduLearn</h1>
                <p className="text-lg text-[#555] mb-8 leading-relaxed">
                  A comprehensive e-learning platform design focused on accessibility, engagement, and personalized learning experiences for students of all backgrounds.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img src={EduLearn} alt="EduLearn Design" className="w-full rounded-2xl shadow-lg border border-[#E8E4DF]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Carousel Section */}
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
              Explore all {designImages.length} screens from the EduLearn design system
            </p>
            <EduLearnCarousel />
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
              { Icon: Users, title: "Target Users", text: "Students, educators, professionals seeking skill development" },
              { Icon: Clock, title: "Timeline", text: "8 weeks comprehensive design" },
              { Icon: Target, title: "My Role", text: "Lead UX Designer, Accessibility Consultant, User Research" },
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
                Traditional e-learning platforms often fail to engage learners effectively, lack accessibility features,
                and provide one-size-fits-all experiences. Students struggle with motivation, progress tracking,
                and finding relevant content that matches their learning pace and style.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "67%", label: "of online courses are never completed" },
                  { value: "43%", label: "of learners find content irrelevant" },
                  { value: "71%", label: "struggle with self-motivation" },
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
                EduLearn creates an adaptive, inclusive learning environment that personalizes content delivery,
                incorporates gamification elements, and provides comprehensive accessibility features to ensure
                every learner can succeed.
              </p>
              <div className="space-y-3">
                {[
                  { Icon: BookOpen, text: "Adaptive learning paths based on individual progress" },
                  { Icon: Brain, text: "AI-powered content recommendations" },
                  { Icon: Users2, text: "Collaborative learning and peer interaction" },
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
                  title: "Learner Challenges",
                  items: [
                    "Difficulty maintaining motivation and engagement",
                    "Lack of personalized learning experiences",
                    "Limited accessibility options",
                    "Inadequate progress tracking and feedback",
                  ],
                },
                {
                  title: "Educator Needs",
                  items: [
                    "Tools for creating engaging content",
                    "Student progress analytics and insights",
                    "Efficient assessment and grading systems",
                    "Communication tools for student interaction",
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
                { step: "01", title: "Research", description: "Extensive user interviews with students, educators, and accessibility experts" },
                { step: "02", title: "Analyze", description: "Competitive analysis and identification of key pain points in existing platforms" },
                { step: "03", title: "Ideate", description: "Design workshops focusing on personalization and accessibility" },
                { step: "04", title: "Prototype", description: "Interactive prototypes with multiple learning pathways" },
                { step: "05", title: "Test", description: "Accessibility testing and usability validation with diverse user groups" },
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
                { title: "Adaptive Learning Engine", description: "AI-powered system that adjusts content difficulty and pacing based on individual learning patterns and preferences" },
                { title: "Universal Design", description: "Comprehensive accessibility features including screen reader support, keyboard navigation, and customizable visual settings" },
                { title: "Gamified Progress", description: "Achievement systems, learning streaks, and interactive challenges to maintain engagement and motivation" },
                { title: "Collaborative Spaces", description: "Virtual study groups, peer review systems, and discussion forums to foster community learning" },
                { title: "Smart Analytics", description: "Detailed progress tracking with actionable insights for both learners and educators" },
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
                EduLearn's user-centered design approach successfully addresses the key challenges in online education.
                The platform's adaptive features and accessibility focus create an inclusive learning environment
                that accommodates diverse learning needs and styles.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "78%", label: "Increase in course completion rates" },
                  { value: "89%", label: "Accessibility compliance score" },
                  { value: "4.7/5", label: "User satisfaction rating" },
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