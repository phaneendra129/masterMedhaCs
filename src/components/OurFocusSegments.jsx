import React from 'react'

const OurFocusSegments = () => {
  return (
    <div>
       <section className="px-6 py-16 text-center bg-white reveal">
        <h2 className="text-4xl font-semibold text-[#0c4a6e] mb-8">
          Our Focus Segments
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            '🌾 Agriculture & Farming',
            '🍲 Food Manufacturing',
            '💼 Service Organizations (Tech & Solutions)',
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-sky-50 rounded-xl shadow-md w-64 border border-sky-100 hover:bg-sky-100 hover:scale-105 transition-all duration-400"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurFocusSegments
