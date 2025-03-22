import React from 'react'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">Hynstein</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-indigo-600">Products</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="https://trysmata.com" className="btn-primary">Try Smata</a>
          </div>
          <div className="md:hidden">
            <button className="p-2">
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
