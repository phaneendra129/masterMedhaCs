import { React, lazy } from "react";
// import PrivatePolicy from "./PrivatePolicy";
// import TermsAndConditions from "./TermsAndConditions";
// import ContactUs from "./ContactUs";

// Lazy-Loaded-Pages
const PrivatePolicy = lazy(() => import("./PrivatePolicy"));
const TermsAndConditions = lazy(() => import("./TermsAndConditions"));
const ContactUs = lazy(() => import("./ContactUs"));

const Footer = () => {
  return (
    <div>
     

{/* Navigation Cards */}
{/* className="bg-white text-blue-700 font-semibold rounded-2xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center" */}
{/* <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 px-6">
  <a
    href="/"
    className="text-white-700"
  >
    https://www.medhacs.in/
  </a>

  <a
    href="/termsAndConditions"
    className="text-white-700"
  >
    https://www.medhacs.in/terms-and-conditions/
  </a>

  <a
    href="/privatePolicy"
    className="text-white-700"
  >
    https://www.medhacs.in/privacy-policy/
  </a>

  <a
    href="/contactUs"
    className="text-white-700"
  >
     https://www.medhacs.in/contact-us
  </a>

</div> */}
<div className="max-w-6xl mx-auto px-6">
  <h3 className="text-4xl font-semibold text-[#0c4a6e] mb-5 mt-2">
    Quick Links
  </h3>

  <div className="grid grid-row-1 sm:grid-rows-2 lg:grid-rows-4 gap-5">

<div className="flex items-center gap-2">
  <p className="text-black text-sm sm:text-base font-semibold">Click here for Medha Consultancy Services WhatsApp API Terms:</p>
  <a
    href="/termsAndConditions"
    className="text-black text-sm sm:text-base break-all hover:border-b"
  >
    https://www.medhacs.in/termsAndConditions
  </a>
</div>

<div className="flex items-center gap-2">
  <p className="text-black text-sm sm:text-base font-semibold">Click here for data privacy policy:</p>
  <a
    href="/privatePolicy"
    className="text-black text-sm sm:text-base break-all hover:border-b"
  >
    https://www.medhacs.in/privatePolicy
  </a>
</div>

<div className="flex items-center gap-2">
  <p className="text-black text-sm sm:text-base font-semibold">Contact us page:</p>
  <a
    href="/contactUs"
    className="text-black text-sm sm:text-base break-all hover:border-b"
  >
    https://www.medhacs.in/contactUs
  </a>
</div>

</div>

</div>
{/* Divider */}
<footer className="bg-[#0c4a6e] text-white shadow-[0_-6px_25px_rgba(14,165,233,0.45)]">

{/* Copyright */}
<div className="text-center text-sm tracking-wide opacity-90">
  © {new Date().getFullYear()} <span className="font-medium">Medha Consultancy Services</span>.  
  All Rights Reserved.
</div>

</footer>

    </div>
  );
};

export default Footer;
