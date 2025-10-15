import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 pt-5  ml-7 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 gap-72 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          PORTFO<span className="text-brand">///</span> IO
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 gap-20 text-white  font-medium">
          <li><a href="#home" className="hover:text-brand transition">Home</a></li>
          <li><a href="#about" className="hover:text-brand transition">About</a></li>
          <li><a href="#projects" className="hover:text-brand transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-brand transition">Contact</a></li>
        </ul>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <li><a href="#home" className="block text-gray-700 hover:text-brand">Home</a></li>
          <li><a href="#about" className="block text-gray-700 hover:text-brand">About</a></li>
          <li><a href="#projects" className="block text-gray-700 hover:text-brand">Projects</a></li>
          <li><a href="#contact" className="block text-gray-700 hover:text-brand">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
