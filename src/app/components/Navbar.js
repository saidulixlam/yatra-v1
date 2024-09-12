"use client"; // Add this to use client-side functionality

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 text-gray-700 shadow-md z-20 relative">
      <div className="flex items-center justify-between p-4 lg:px-8 w-full">
        <div className="flex-shrink-0">
          <Link href="/">
          {/* logo */}
            <Image
              src="/images/volunteer-yatra-logo.png" 
              alt="Logo"
              width={150} 
              height={80} 
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex flex-1 items-center">
          {/* Middle Links */}
          <div className="flex-1 flex justify-center space-x-6 font-bold">
            <Link href="/opportunities" className="hover:text-gray-400">Opportunities</Link>
            <Link href="/experience" className="hover:text-gray-400">Experience</Link>
          </div>

          {/* Right Side Links */}
          <div className="flex space-x-4 font-bold">
            {/* Login Button */}
            <Link
              href="/login"
              className="border border-gray-300 py-2 px-4 rounded-md text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>

            {/* Signup Button */}
            <Link
              href="/signup"
              className="bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Signup
            </Link>
          </div>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center space-y-1"
        >
          <div className="w-6 h-1 bg-gray-700"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
        </button>

        {/* Mobile Sidebar Menu */}
        <div className={`fixed inset-y-0 right-0 bg-gray-800 text-white p-6 transform transition-transform ${isOpen ? "translate-x-0 w-1/2" : "translate-x-full w-0"} md:hidden`}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-400"
          >
            &times;
          </button>
          <nav className="flex flex-col space-y-2 mt-8 w-full">
            <Link href="/opportunities" className="relative block w-full border-b border-gray-600 py-4 hover:text-gray-400">Opportunities</Link>
            <Link href="/experience" className="relative block w-full border-b border-gray-600 py-4 hover:text-gray-400">Experience</Link>
            <Link href="/login" className="relative block w-full border-b border-gray-600 py-4 hover:text-gray-400">Login</Link>
            <Link href="/signup" className="relative block w-full border-b border-gray-600 py-4 hover:text-gray-400">Signup</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
