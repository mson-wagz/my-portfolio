"use client"

import  React from "react"
import resume from '../src/assets/resume.pdf';
import hero from '../src/assets/hero.png'
import emailjs from '@emailjs/browser';


import { useState, useEffect, useRef } from "react"
// eslint-disable-next-line no-unused-vars
import { motion,useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Linkedin, Github, Dribbble, Mail, CheckCircle, XCircle, Phone, Send } from "lucide-react"


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("ui-ux")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const aboutRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const aboutSection = aboutRef.current
    if (aboutSection) {
      aboutSection.addEventListener("mousemove", handleMouseMove)
      return () => aboutSection.removeEventListener("mousemove", handleMouseMove)
    }
  }, [aboutRef])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_qkajlvo',      // Replace with your Service ID
        'template_xtk35dm',     // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'abigailwagura1@gmail.com'
        },
        'v8Yq3uHZCQBv8P2GC'       // Replace with your Public Key
      );

      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/abigail-wagura-2708a12a5/" },
    { Icon: Github, href: "https://github.com/mson-wagz" },
    { Icon: Dribbble, href: "https://dribbble.com/yourname" },
    { Icon: Mail, href: "mailto:yourname@email.com" },
  ]
  

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
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold tracking-tight">
            PORTFO<span className="text-[#F5A623]">//</span>IO
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ color: "#F5A623" }}
                className="text-sm font-medium transition-colors cursor-pointer relative"
              >
                {item}
                {item === "Home" && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
                )}
              </motion.a>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {[Linkedin, Github, Dribbble].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: "#F5A623" }}
                whileTap={{ scale: 0.9 }}
                className="transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url(/src/assets/Main-bg.png)] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border-2 border-cyan-500/60 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-cyan-500/5 to-transparent"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div style={{ opacity, scale }}>
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight"
                >
                  Abigail Wagura
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
                >
                  UI/UX Designer & Full Stack Developer
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center overflow-hidden rounded-full shadow-2xl shadow-[#F5A623]/40 group"
                  >
                    
                    <a
                        href={resume}
                        download="Abigail_Wagura_Resume.pdf"
                        className="px-4 py-4 w-60 font-medium bg-brand text-white rounded-lg hover:bg-brand/90 transition"
                        >
                        Download Resume
                        </a>
                    {/* <span className="bg-white px-5 py-4 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="w-6 h-6 text-black" />
                      </motion.div>
                    </span> */}
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <img
                      src={hero}
                      alt="Abigail Wagura"
                      width={500}
                      height={500}
                      className="relative z-10 rounded-2xl bg-black object-cover w-full h-full"
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
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-[#F5A623] rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-[#F5A623] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section with Torch Effect */}
      <section id="about" ref={aboutRef} className="py-32 relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 166, 35, 0.2), transparent 50%)`,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-2xl"
              >
                (\)
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl text-[#F5A623] font-semibold text-balance">
              Explore the Creativity & More
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-10 md:p-16 shadow-2xl"
          >
            <p className="text-gray-800 leading-relaxed text-lg md:text-xl text-pretty">
              I'm a passionate UI/UX designer and full-stack developer with a deep drive to turn digital experiences
              into art that are both visually captivating and highly functional. With a strong foundation in design
              thinking, frontend engineering, and backend development, I bridge the gap between aesthetics, usability,
              and technical performance.
              <br />
              <br />
              My goal is to build end-to-end solutions, from intuitive user interfaces to robust backend systems, that
              not only look great but also deliver seamless, efficient, and meaningful interactions. I'm continuously
              seeking, experimenting with emerging technologies, and refining my craft to stay at the forefront of
              modern design and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Services
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-1">
            {[
              {
                number: "01.",
                title: "UI Design",
                description: "Modern, clean, and responsive interfaces that align with your brand.",
              },
              {
                number: "02.",
                title: "UX Research & Strategy",
                description: "Deep user insights and purposeful design with purpose.",
              },
              {
                number: "03.",
                title: "Design Systems",
                description: "Scalable component libraries and style guides for consistent branding.",
              },
              {
                number: "04.",
                title: "Web Apps",
                description: "Interactive, scalable and user-focused platforms built for performance and reliability.",
              },
              {
                number: "05.",
                title: "QA Testing",
                description:
                  "Comprehensive testing to guarantee reliability, usability, and seamless user experiences.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="flex items-center gap-8 p-8 rounded-xl border-b border-white/10 hover:bg-white/5 transition-all duration-300">
                  <span className="text-3xl font-bold text-gray-500 group-hover:text-[#F5A623] transition-colors min-w-[60px]">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#F5A623] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{service.description}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -45 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0 cursor-pointer shadow-lg shadow-[#F5A623]/30"
                  >
                    <ArrowRight className="w-6 h-6 text-black" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-6 mb-16">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("ui-ux")}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === "ui-ux"
                    ? "bg-[#F5A623] text-black shadow-lg shadow-[#F5A623]/40"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                UI UX Designs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("web")}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === "web"
                    ? "bg-[#F5A623] text-black shadow-lg shadow-[#F5A623]/40"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                Web Projects
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-10"
            >
              {[
                {
                  title: "Novel Nest",
                  description:
                    "A module web design for book lovers featuring a clean, modern interface with intuitive navigation.",
                    img:"/src/assets/Novelnest.png",
                    link:"https://www.figma.com/design/RhrJeDqmiLx0Yna6EX6etR/NOVEL-APP?node-id=0-1&t=szf0ldSPlAFWX4m4-1"
                    
                },
                {
                  title: "E-learning Platform",
                  description:
                    "A comprehensive design for an e-learning platform with a focus on user experience and accessibility.",
                    img:"/src/assets/Edulearn.png",
                    link:"https://www.figma.com/design/CIBUAu50oLPdWAhNTpwFEn/SOLO-PROJECT-EDU-LEARN?node-id=0-1&t=tN0BasigbLPcBoGe-1"
                
                },
                {
                  title: "Tryve",
                  description:
                    "A seamless platform that connects therapists and patients for accessible, secure, and personalized mental health support.",
                    img:"/src/assets/Tryve.png",
                    link:"https://www.figma.com/design/gkF6S66QSBjdw4g4GOHdbP/Tyrve?node-id=238-314&t=KROz3Yv5G2k99zMR-1"
                //   image: "/mobile-education-app.jpg",
                },
                {
                  title: "Academia/Uni Case Study",
                  description:
                    "A detailed case study on enhancing the academic platform user experience and engagement.",
                    img:"/src/assets/AcademmiHub.png",
                    link:"https://www.figma.com/design/CIBUAu50oLPdWAhNTpwFEn/SOLO-PROJECT-EDU-LEARN?node-id=0-1&t=tN0BasigbLPcBoGe-1"
                    

                //   image: "/university-platform-design.jpg",
                },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A3A3A] via-[#3A3A3A]/60 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#F5A623] transition-colors">
                        {project.title}
                      </h3>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -45 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F5A623]/30"
                        onClick={(e) => e.stopPropagation()}
                        >
                        <ArrowRight className="w-6 h-6 text-black" />
                        </motion.a>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Let's Work Together</h2>

            <div className=" mb-16">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#F5A623]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F5A623] to-[#FF8C00] flex items-center justify-center shadow-lg shadow-[#F5A623]/30">
                  <Mail className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2 font-medium">Email</p>
                  <p className="font-bold text-lg">abigailwagura1@gmail.com</p>
                </div>
              </motion.div>
            </div>

            {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus === 'success'
                  ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                  : 'bg-red-500/20 border border-red-500/50 text-red-300'
              }`}
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6" />
                  <span className="font-medium">Failed to send message. Please try again or email directly.</span>
                </>
              )}
            </motion.div>
          )}

            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/20 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 focus:border-[#F5A623] text-white h-14 rounded-xl text-lg transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-300">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 focus:border-[#F5A623] text-white h-14 rounded-xl text-lg transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-300">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-white/5 border-white/20 focus:border-[#F5A623] text-white resize-none rounded-xl text-lg transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full bg-gradient-to-r from-[#F5A623] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#F5A623] text-black font-bold py-7 text-lg rounded-xl shadow-lg shadow-[#F5A623]/40 overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Send className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3 w-6 h-6" />
                      </>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-gray-400 text-sm">© 2025 Abigail Wagura. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {socialLinks.map(({  href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.3, color: "#F5A623", y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#F5A623] transition-colors"
                >
                  
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
