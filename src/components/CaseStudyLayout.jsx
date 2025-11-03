import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'

export default function CaseStudyLayout() {
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
        <Outlet />
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