"use client"

import React from "react";
import hero from "./assets/hero.png"
import emailjs from '@emailjs/browser';
import AcademmiHub from './assets/AcademmiHub.png'
import Soulspace from './assets/Soulspace.png'
import Novelnest from './assets/Novelnest.png'
import EduLearn from './assets/Edulearn.png'
import AfyaBuddy from './assets/AfyaBuddy.png'
import MwanafunziHub from './assets/MwanafunziHub.png'
import Tiklish from './assets/Tiklish.png'

import { useState, useEffect, useRef } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Linkedin, Github, Dribbble, Mail, CheckCircle, XCircle, Send, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("ui-ux")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const aboutRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect()
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }
    }
    const aboutSection = aboutRef.current
    if (aboutSection) {
      aboutSection.addEventListener("mousemove", handleMouseMove)
      return () => aboutSection.removeEventListener("mousemove", handleMouseMove)
    }
  }, [aboutRef])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      const result = await emailjs.send(
        'service_qkajlvo',
        'template_xtk35dm',
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_email: 'abigailwagura1@gmail.com' },
        'v8Yq3uHZCQBv8P2GC'
      )
      console.log('SUCCESS!', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('FAILED...', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/abigail-wagura-2708a12a5/" },
    { Icon: Github, href: "https://github.com/mson-wagz" },
    { Icon: Dribbble, href: "https://dribbble.com/yourname" },
    { Icon: Mail, href: "mailto:abigailwagura1@gmail.com" },
  ]

  const services = [
    { number: "01", title: "UI Design", description: "Modern, clean, and responsive interfaces that align with your brand." },
    { number: "02", title: "UX Research & Strategy", description: "Deep user insights and purposeful design decisions grounded in research." },
    { number: "03", title: "Design Systems", description: "Scalable component libraries and style guides for consistent branding." },
    { number: "04", title: "Web Apps", description: "Interactive, scalable platforms built for performance and reliability." },
    { number: "05", title: "QA Testing", description: "Comprehensive testing to guarantee reliability, usability, and seamless experiences." },
  ]

  const projects = [
    {
      title: "Novel Nest",
      description: "A module web design for book lovers featuring a clean, modern interface with intuitive navigation.",
      img: Novelnest,
      link: "/case-study/novel-nest",
      externalLink: "https://www.figma.com/design/RhrJeDqmiLx0Yna6EX6etR/NOVEL-APP?node-id=0-1",
      category: "ui-ux",
      slug: "novel-nest"
    },
    {
      title: "E-learning Platform",
      description: "A comprehensive design for an e-learning platform focused on user experience and accessibility.",
      img: EduLearn,
      link: "/case-study/edulearn",
      externalLink: "https://www.figma.com/design/CIBUAu50oLPdWAhNTpwFEn/SOLO-PROJECT-EDU-LEARN?node-id=0-1",
      category: "ui-ux",
      slug: "edulearn"
    },
    {
      title: "Soulspace",
      description: "A seamless platform connecting therapists and patients for accessible, secure mental health support.",
      img: Soulspace,
      link: "/case-study/tryve",
      externalLink: "https://www.figma.com/design/gkF6S66QSBjdw4g4GOHdbP/Tyrve?node-id=238-314",
      category: "ui-ux",
      slug: "soulsp"
    },
    {
      title: "Tik-lish",
      description: "A peer-to-peer ticketing app that lets students securely resell and buy event tickets through instant paywall links.",
      img: Tiklish,
      link: "/case-study/tiklish",
      category: "ui-ux",
      slug: "tiklish"
    },
    {
      title: "AfyaBuddy",
      description: "An AI-powered first aid assistant providing quick, step-by-step guidance during medical emergencies.",
      img: AfyaBuddy,
      link: "https://celadon-mousse-1866c3.netlify.app/",
      category: "web"
    },
    {
      title: "MwanafunziHub",
      description: "A comprehensive student portal designed to streamline academic management and enhance communication.",
      img: MwanafunziHub,
      link: "https://mwanafunzi-hub-r1uq.onrender.com/",
      category: "web"
    }
  ]

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A1A] font-sans">

      {/* ── Navigation ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E2DDD6]"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.04 }} className="text-lg font-bold tracking-tight text-[#1A1A1A]">
            PORTFO<span className="text-[#C8703A]">//</span>IO
          </motion.div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.2 }}
                className="text-sm font-medium text-[#555] hover:text-[#C8703A] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8703A] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.slice(0, 3).map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#C8703A" }}
                whileTap={{ scale: 0.9 }}
                className="text-[#888] hover:text-[#C8703A] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#E2DDD6] hover:bg-[#EDE9E4] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-[#E2DDD6] bg-[#F8F7F4]"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                {["Home", "About", "Projects", "Contact"].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium py-2 px-3 rounded-lg hover:bg-[#EDE9E4] text-[#333] transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="flex items-center gap-4 pt-4 border-t border-[#E2DDD6] mt-2">
                  {socialLinks.slice(0, 3).map(({ Icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="text-[#888] hover:text-[#C8703A] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(#1A1A1A 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Warm accent blob */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C8703A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="border border-[#DEDAD4] rounded-2xl p-8 md:p-12 lg:p-16 bg-white/60 shadow-sm"
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div style={{ opacity, scale }}>
                {/* Eyebrow */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C8703A] mb-4"
                >
                  UI/UX Designer & Full Stack Developer
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 0.45 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.08] tracking-tight text-[#1A1A1A]"
                >
                  Abigail<br />Wagura
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 0.6 }}
                  className="text-[#666] text-base sm:text-lg leading-relaxed mb-10 max-w-md"
                >
                  Crafting experiences where design precision meets engineering rigour — from pixel to production.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                 
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#DEDAD4] bg-white text-[#1A1A1A] text-sm font-semibold hover:border-[#C8703A] hover:text-[#C8703A] transition-colors"
                  >
                    View Work
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.55 }}
                className="order-first lg:order-last flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Decorative ring */}
                  <div className="absolute inset-[-12px] rounded-2xl border border-[#C8703A]/20" />
                  <div className="absolute inset-[-24px] rounded-2xl border border-[#C8703A]/10" />
                  <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto aspect-square">
                    <img
                      src={hero}
                      alt="Abigail Wagura"
                      className="rounded-2xl object-cover w-full h-full shadow-xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-9 border border-[#BDBAB5] rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1 h-2 bg-[#C8703A] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── About ── */}
      <section id="about" ref={aboutRef} className="py-24 md:py-36 relative overflow-hidden px-6">
        {/* Torch light effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200, 112, 58, 0.08), transparent 55%)`,
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C8703A] mb-3">Who I am</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-14 text-[#1A1A1A]">About Me</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-semibold text-[#C8703A] mb-12 max-w-2xl"
          >
            Explore the Creativity & More
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid md:grid-cols-5 gap-8 items-start"
          >
            {/* Main bio block */}
            <div className="md:col-span-3 bg-white rounded-2xl p-8 md:p-10 border border-[#E8E4DF] shadow-sm">
              <p className="text-[#444] leading-[1.9] text-base sm:text-lg">
                I'm a passionate UI/UX designer and full-stack developer with a deep drive to turn digital experiences
                into art that are both visually captivating and highly functional. With a strong foundation in design
                thinking, frontend engineering, and backend development, I bridge the gap between aesthetics, usability,
                and technical performance.
              </p>
              <p className="text-[#444] leading-[1.9] text-base sm:text-lg mt-5">
                My goal is to build end-to-end solutions — from intuitive user interfaces to robust backend systems —
                that not only look great but deliver seamless, efficient, and meaningful interactions. I'm continuously
                experimenting with emerging technologies and refining my craft to stay at the forefront of modern
                design and development.
              </p>
            </div>

            {/* Stat cards */}
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4">
              {[
                { label: "Projects Shipped", value: "10+" },
                { label: "Years of Practice", value: "3+" },
                { label: "Design & Dev", value: "Both" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-[#E8E4DF] shadow-sm"
                >
                  <p className="text-3xl font-bold text-[#1A1A1A] mb-1">{stat.value}</p>
                  <p className="text-sm text-[#888]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-36 bg-[#F2EEE9] relative px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C8703A] mb-3">What I offer</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A]">Services</h2>
          </motion.div>

          <div className="max-w-4xl space-y-px">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 px-2 border-b border-[#DEDAD4] hover:border-[#C8703A]/50 transition-all duration-300">
                  <span className="text-sm font-mono text-[#C8703A] min-w-[36px]">{service.number}</span>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#C8703A] transition-colors mb-1">
                      {service.title}
                    </h3>
                    <p className="text-[#777] text-sm sm:text-base">{service.description}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: -45 }}
                    className="w-9 h-9 rounded-full border border-[#DEDAD4] group-hover:border-[#C8703A] group-hover:bg-[#C8703A] flex items-center justify-center flex-shrink-0 transition-all duration-300 self-start sm:self-center"
                  >
                    <ArrowRight className="w-4 h-4 text-[#1A1A1A] group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 md:py-36 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C8703A] mb-3">Selected work</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-10">Projects</h2>

            {/* Tab switcher */}
            <div className="inline-flex items-center gap-1 bg-[#EFECE8] rounded-full p-1">
              {["ui-ux", "web"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-white text-[#1A1A1A] shadow-sm"
                      : "text-[#888] hover:text-[#444]"
                  }`}
                >
                  {tab === "ui-ux" ? "UI / UX Designs" : "Web Projects"}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            >
              {projects.filter(p => p.category === activeTab).map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl border border-[#E8E4DF] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#C8703A]/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F2EEE9]">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#C8703A] transition-colors">
                        {project.title}
                      </h3>
                      <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.12, rotate: -45 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 hover:bg-[#C8703A] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.a>
                      {/* {(project.slug || project.category === "web" ) && (
                        <motion.a
                          href={project.category === "web" ? project.link : undefined}
                          target={project.category === "web" ? "_blank" : "_self"}
                          rel={project.category === "web" ? "noopener noreferrer" : undefined}
                          whileHover={{ scale: 1.12, rotate: -45 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 hover:bg-[#C8703A] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.a>
                      )}
                      {(project.slug || project.category === "ui-ux" ) && (
                        <motion.a
                          href={project.category === "ui-ux" ? project.link : undefined}
                          target={project.category === "ui-ux" ? "_blank" : "_self"}
                          rel={project.category === "ui-ux" ? "noopener noreferrer" : undefined}
                          whileHover={{ scale: 1.12, rotate: -45 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 hover:bg-[#C8703A] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.a>
                      )} */}
                    </div>

                    <p className="text-[#666] text-sm sm:text-base leading-relaxed mb-4">{project.description}</p>

                    {project.slug && (
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-1.5 text-[#C8703A] text-sm font-semibold hover:gap-2.5 transition-all"
                      >
                        View Case Study
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 md:py-36 bg-[#F2EEE9] px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C8703A] mb-3 text-center">Get in touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#1A1A1A]">Let's Work Together</h2>
            <p className="text-center text-[#777] mb-12 text-base sm:text-lg">
              Have a project in mind? I'd love to hear about it.
            </p>

            {/* Email card */}
            <motion.a
              href="mailto:abigailwagura1@gmail.com"
              whileHover={{ y: -4 }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-[#E8E4DF] hover:border-[#C8703A]/40 hover:shadow-md transition-all duration-300 mb-10"
            >
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-[#888] font-medium mb-0.5 uppercase tracking-wider">Email</p>
                <p className="font-semibold text-[#1A1A1A]">abigailwagura1@gmail.com</p>
              </div>
            </motion.a>

            {/* Status message */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                    submitStatus === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-700'
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <><CheckCircle className="w-5 h-5 flex-shrink-0" /><span>Message sent! I'll get back to you shortly.</span></>
                  ) : (
                    <><XCircle className="w-5 h-5 flex-shrink-0" /><span>Failed to send. Please email directly.</span></>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-[#E8E4DF] p-8 md:p-10 shadow-sm space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#555] mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="bg-[#F8F7F4] border-[#E2DDD6] focus:border-[#C8703A] text-[#1A1A1A] h-12 rounded-xl placeholder:text-[#BBB] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#555] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="john@example.com"
                    className="bg-[#F8F7F4] border-[#E2DDD6] focus:border-[#C8703A] text-[#1A1A1A] h-12 rounded-xl placeholder:text-[#BBB] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#555] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="bg-[#F8F7F4] border-[#E2DDD6] focus:border-[#C8703A] text-[#1A1A1A] resize-none rounded-xl placeholder:text-[#BBB] transition-all"
                />
              </div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1A1A] hover:bg-[#C8703A] text-white font-semibold py-6 rounded-xl text-base transition-all duration-300 shadow-md"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
                    )}
                  </span>
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 border-t border-[#E2DDD6] bg-[#F8F7F4] px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#AAA] text-xs">© 2025 Abigail Wagura. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#AAA] hover:text-[#C8703A] transition-colors"
              >
                <Icon className="w-4.5 h-4.5" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}