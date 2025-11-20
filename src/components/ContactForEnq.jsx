import React,{useRef } from "react";
// import emailjs from "emailjs-com";

const ContacForEnq = () => {
  // const { register, handleSubmit } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
console.log("form.current", form.current)
    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",     // Replace
    //     "YOUR_TEMPLATE_ID",    // Replace
    //     form.current,
    //     "YOUR_PUBLIC_KEY"      // Replace
    //   )
    //   .then(
    //     (result) => {
    //       console.log("SUCCESS!", result.text);
    //       alert("Email Sent Successfully!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //       alert("Email Sending Failed!");
    //     }
    //   );
  };

  return (
    <div>
      <section className="px-6 py-16 bg-gradient-to-b from-sky-50 to-white text-center reveal">
        <h2 className="text-4xl font-semibold text-[#0c4a6e] mb-10">
          Contact Us
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-sky-100">
            <h3 className="text-2xl font-semibold text-[#0c4a6e] mb-4">
              Reach Out To Us
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Mahesh Kiran T B</strong>
            </p>
            <p className="text-gray-700 mb-2">
              📞 Mob:{" "}
              <a
                href="tel:+919902016176"
                className="text-[#0c4a6e] hover:underline"
              >
                +91 99020 16176
              </a>
            </p>
            <p className="text-gray-700 mb-2">
              📧 Email:{" "}
              <a
                href="mailto:maheshkiran@gmail.com"
                className="text-[#0c4a6e] hover:underline"
              >
                maheshkiran@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              💼 Support Email:{" "}
              <a
                href="mailto:support@medhacs.in"
                className="text-[#0c4a6e] hover:underline"
              >
                support@medhacs.in
              </a>
            </p>
          </div>

          {/* Write to Us Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-sky-100">
            <h3 className="text-2xl font-semibold text-[#0c4a6e] mb-4">
              Write to Us
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full border border-sky-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Mobile No.
                </label>
                <input
                  required
                  type="tel"
                  className="w-full border border-sky-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full border border-sky-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Query
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full border border-sky-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Write your query here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0c4a6e] text-white font-semibold py-3 rounded-lg hover:bg-sky-700 transition-colors duration-300"
              >
                Submit
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <a
                  href="/"
                  className="text-white-600 hover:text-black-800 font-medium text-lg transition duration-150 ease-in-out "
                >
                  Go to Home
                </a>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContacForEnq;
