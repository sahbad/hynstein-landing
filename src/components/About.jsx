import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Hynstein</h2>
          <p className="text-xl text-gray-600">Building AI products that matter</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              At Hynstein, we believe in the transformative power of AI to enhance human experiences.
              We're not just building products; we're creating solutions that make a real difference
              in people's lives.
            </p>
            <p className="text-gray-600">
              Our focus is on developing innovative AI products that are accessible, practical,
              and impactful. We're starting with Smata, revolutionizing how people experience books,
              and we're just getting started.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold mb-4">Why Choose Hynstein?</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                  <span>Focused on innovation and user experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                  <span>Building products with real-world impact</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                  <span>Committed to accessibility and usability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
