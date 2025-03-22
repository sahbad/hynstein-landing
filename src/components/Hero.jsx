import React from 'react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Building the Future with
          <span className="gradient-text"> AI Innovation</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          We create AI-powered products that transform how people interact with technology.
          Our mission is to make AI accessible, practical, and impactful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="btn-primary">
            Explore Our Products
          </a>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
