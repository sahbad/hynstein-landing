import React from 'react'
import { FiBookOpen, FiHeadphones, FiUsers, FiAward } from 'react-icons/fi'

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Innovative solutions that enhance human experiences</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">Smata</h3>
                <p className="text-gray-600 mb-6">
                  Transform your reading experience with AI-powered features. Smata makes reading more engaging,
                  interactive, and social than ever before.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <FiBookOpen className="text-indigo-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold">Diverse Library</h4>
                      <p className="text-sm text-gray-600">Access a wide range of books</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiHeadphones className="text-indigo-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold">AI Audiobooks</h4>
                      <p className="text-sm text-gray-600">Listen to any book</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiUsers className="text-indigo-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold">Community</h4>
                      <p className="text-sm text-gray-600">Connect with readers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiAward className="text-indigo-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold">Progress Tracking</h4>
                      <p className="text-sm text-gray-600">Monitor your journey</p>
                    </div>
                  </div>
                </div>
                <a href="https://trysmata.com" className="btn-primary inline-block mt-8">
                  Try Smata Now
                </a>
              </div>
              <div className="md:w-1/2 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <img 
                  src="/images/smata-screenshot.png" 
                  alt="Smata App Screenshot"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
