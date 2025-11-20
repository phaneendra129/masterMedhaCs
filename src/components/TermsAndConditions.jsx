import React from 'react'

const TermsAndConditions = () => {
  return (
    <div><div className="max-w-4xl mx-auto">
          {/* <!-- Header and Call-to-Action Link --> */}
          <header className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-8 transition duration-300 hover:shadow-xl">
        <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition'>
        <a
                href="/"
                className="text-white-600 hover:text-black-800 font-medium text-lg transition duration-150 ease-in-out "
              >
                Go to Home
              </a>
        </button>
       
            <h1 className="text-3xl sm:text-2xl font-extrabold text-indigo-700 mb-4 mt-4">
            Medha Consultancy Services WhatsApp API Agreement
            </h1>
            <p className="text-gray-600 mb-6">
              Please review the terms of service that govern your access and use
              of the Medha Consultancy Services WhatsApp API platform.
            </p>

            {/* <!-- The required anchor link for scrolling --> */}
          </header>

          {/* <!-- Main Summary Section --> */}
          <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-10 border-t-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Summary of Agreement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using the Medha Consultancy Services WhatsApp API, you agree to comply with all
              applicable laws, WhatsApp policies, and these Terms & Conditions.
              You are responsible for your account, data security, and proper
              use of the API, including avoiding spam or unauthorized messaging.
              Fees apply based on your chosen plan and are non-refundable unless
              stated otherwise. Misuse may result in suspension or termination
              of your access. We may update these terms from time to time, and
              continued use means acceptance of any changes.
            </p>
          </section>

          {/* <!-- Detailed Terms and Conditions List -->
<!-- This section has the ID that the anchor link targets --> */}
          <section
            id="terms-list"
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-green-500"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Detailed Terms and Conditions List
            </h2>

            <div className="space-y-6">
              {/* <!-- Term 1 --> */}
              <article className="p-4 border border-gray-200 rounded-lg transition duration-150 hover:bg-gray-50">
                <div className="flex items-start">
                  <span className="text-xl font-bold text-green-600 mr-3 mt-1">
                    1.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      User Consent is Non-Negotiable
                    </h3>
                    <p className="text-gray-600">
                      You must obtain clear, verifiable, and explicit consent
                      from users before sending them any message.
                    </p>
                  </div>
                </div>
              </article>

              {/* <!-- Term 2 --> */}
              <article className="p-4 border border-gray-200 rounded-lg transition duration-150 hover:bg-gray-50">
                <div className="flex items-start">
                  <span className="text-xl font-bold text-green-600 mr-3 mt-1">
                    2.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Message Categories and Templates
                    </h3>
                    <p className="text-gray-600">
                      You must obtain clear, verifiable, and explicit consent
                      from users before sending them any message.
                    </p>
                  </div>
                </div>
              </article>

              {/* <!-- Term 3 (Added for structure completeness) --> */}
              <article className="p-4 border border-gray-200 rounded-lg transition duration-150 hover:bg-gray-50">
                <div className="flex items-start">
                  <span className="text-xl font-bold text-green-600 mr-3 mt-1">
                    3.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Prohibited Content and Use
                    </h3>
                    <p className="text-gray-600">
                      The API must not be used for illegal, abusive, harmful, or
                      unauthorized content, including spam or phishing attempts.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <p className="mt-8 text-sm text-gray-500 text-center">
              Last Updated: November 2025
            </p>
          </section>
        </div></div>
  )
}

export default TermsAndConditions