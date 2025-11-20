import React from 'react'

const PrivatePolicy = () => {
  return (
    <div> <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
            <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition'>
        <a
                href="/"
                className="text-white-600 hover:text-black-800 font-medium text-lg transition duration-150 ease-in-out "
              >
                Go to Home
              </a>
        </button>
            </div>

            <div
              id="privacy-policy-content"
              className="bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:p-10 scroll-mt-20"
            >
              <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2">
                Privacy Policy
              </h1>

              <p className="text-gray-600 mb-8">
                Your privacy is important to us. This Privacy Policy outlines
                how to Automate your Business with a few mouse clicks! collects,
                uses, discloses, and protects your personal information when you
                use our services, including WhatsApp API solutions, email
                marketing software, CRM software, and other related services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    1. Personal Information 📝
                  </h3>
                  <p className="text-gray-700">
                    When you use our Services, we may collect personal
                    information such as your name, email address,
                    phone number, and company details.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2. Usage Information 💻
                  </h3>
                  <p className="text-gray-700">
                    We collect information about how you interact with our
                    Services, including your IP address, device type,
                    and browser information.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    3. Cookies 🍪
                  </h3>
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to
                    enhance your user experience and collect data on your usage
                    patterns.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t">
                What do we do with the information?
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4">
                <li className="pl-2">
                  <span className="font-medium text-gray-800">
                    To provide and maintain our Services.
                  </span>
                </li>
                <li className="pl-2">
                  <span className="font-medium text-gray-800">
                    To improve, personalize and expand our Services.
                  </span>
                </li>
                <li className="pl-2">
                  <span className="font-medium text-gray-800">
                    To communicate with you about your account, updates, and
                    promotional materials.
                  </span>
                </li>
                <li className="pl-2">
                  <span className="font-medium text-gray-800">
                    To monitor and analyze the usage of our Services.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div></div>
  )
}

export default PrivatePolicy