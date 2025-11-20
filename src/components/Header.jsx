import logo from '../images/Fresh_Thinking_final-02.jpg'
import React from 'react'

function Header() {
  return (
    <div>
       <img
                src={logo}
                alt="Medha Consultancy Services Logo"
                className="mx-auto w-44 h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <h1 className="text-5xl font-extrabold mt-5 text-[#0c4a6e] tracking-wide">
                Medha Consultancy Services
              </h1>
              <p className="text-xl mt-3 text-gray-600 italic animate-fade-up">
                Empowering entrepreneurs — from idea to execution
              </p>
    </div>
  )
}

export default Header
