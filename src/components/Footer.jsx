import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hynstein</h3>
            <p className="text-gray-400">
              Building innovative AI products that enhance human experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://trysmata.com" className="text-gray-400 hover:text-white">
                  Smata
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hynstein. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
