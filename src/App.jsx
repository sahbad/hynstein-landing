import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Hynstein - AI Product Innovation</title>
        <meta name="description" content="Hynstein builds innovative AI products that transform how people interact with technology. Discover Smata, our AI-powered reading companion." />
        <meta name="keywords" content="AI products, Smata, reading app, AI innovation, audiobooks" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </>
  )
}
