import React from 'react'

const OurServices = () => {
  return (
    <div> 
    <section className="px-6 py-16 bg-gradient-to-b from-sky-50 to-white reveal">
    <h2 className="text-4xl font-semibold text-center text-[#0c4a6e] mb-10">
      Our Services
    </h2>
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {/* Ideation to Execution */}
      <div className="group bg-white p-8 rounded-3xl shadow-lg border border-sky-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
        <h3 className="text-2xl font-semibold text-[#0c4a6e] mb-4">
          Ideation to Execution
        </h3>
        <ul className="text-left space-y-2 text-gray-700">
          <li>• Listen to your ideas, dreams, and passions</li>
          <li>• Convert them into workable business models</li>
          <li>• Break down into short, medium & long-term goals</li>
          <li>• Mentor during the initial stages</li>
          <li>• Connect with like-minded collaborators</li>
          <li>
            • Oversee initial executions & provide visibility to
            stakeholders
          </li>
        </ul>
      </div>

      {/* Solutions for Existing Businesses */}
      <div className="group bg-white p-8 rounded-3xl shadow-lg border border-sky-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
        <h3 className="text-2xl font-semibold text-[#0c4a6e] mb-4">
          Solutions for Existing Businesses
        </h3>
        <ul className="text-left space-y-2 text-gray-700">
          <li>• Digital Presence Planning & Execution</li>
          <li>• Define KPIs and measure outreach & visibility</li>
          <li>• Financial process optimization</li>
          <li>• Define workflows across departments</li>
          <li>• Identify right technology platforms & capable agencies</li>
          <li>• Monitor and support technology adoptions</li>
        </ul>
      </div>
    </div>
  </section>
  </div>
  )
}

export default OurServices