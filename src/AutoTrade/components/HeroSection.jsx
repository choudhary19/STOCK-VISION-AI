import React from 'react'

function HeroSection({title, subtitle}) {
    return (
        <div className="hero-section text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-4">{subtitle}</p>
          </div>
        </div>
      );
}

export default HeroSection
