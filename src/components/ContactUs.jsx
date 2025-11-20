// import React from 'react'

// const ContactUs = () => {
//      const MapPinIcon = ({ className = "w-5 h-5" }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//       <circle cx="12" cy="10" r="3" />
//     </svg>
//   );

//   const PhoneIcon = ({ className = "w-5 h-5" }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-2.94 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 17.05 17.05 0 0 0 .86 3.86 2 2 0 0 1-1.28 2.37l-1.67.92a15.98 15.98 0 0 0 6.55 6.55l.92-1.67a2 2 0 0 1 2.37-1.28 17.05 17.05 0 0 0 3.86.86 2 2 0 0 1 1.72 2v3z" />
//     </svg>
//   );

//   const MailIcon = ({ className = "w-5 h-5" }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="16" x="2" y="4" rx="2" />
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//     </svg>
//   );

//   const ContactItem = ({  title, content, isLink = false }) => (
//     <div className="flex items-start space-x-4 mb-4">
//       <div className="flex-shrink-0 pt-1 text-indigo-600">
//         {/* <Icon /> */}
//       </div>
//       <div>
//         <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//           {title}
//         </h3> 
//         {/* <div className={title !== 'Address'?'flex justify-center items-center':''}>

//         {isLink ? (
//           <a
//             href={
//               title === "Mobile"
//                 ? `tel:${content.replace(/\s/g, "")}`
//                 : `mailto:${content}`
//             }
//             className="text-lg text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out font-medium text-center "
//           >
//             {content}
//           </a>
//         ) : (
//           <p className="text-lg text-gray-800 font-medium whitespace-pre-line text-sm font-bold">
//             {content}
//           </p>
//         )}
//         </div> */}
//         {/* Apply center alignment only if title is NOT Address */}
//     {isLink ? (
//   <div className={title !== "Address" ? "flex justify-center items-center text-center" : ""}>
//       <a
//         href={
//           title === "Mobile"
//             ? `tel:${content.replace(/\s/g, "")}`
//             : `mailto:${content}`
//         }
//         className="text-lg text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out font-medium "
//       >
//         {content}
//       </a>
//   </div>
//     ) : (
//       <p className="text-lg text-gray-800 font-medium whitespace-pre-line text-sm font-bold text-center">
//         {content}
//       </p>
//     )}
// </div>
//       </div>
//   );
//     const companyName = "Medha Consultancy Services";
//   const address =
//     "No. 116/6, 1st Floor, 11th Cross, Malleswaram, Bangalore 560 003";
//   const mobile = "+91 99020 16176";
//   const email = "support@medhacs.in";
//   return (
//     <div><div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 font-inter">
//           <div className="w-full max-w-xl bg-white shadow-2xl rounded-xl p-6 sm:p-10 border border-gray-100">
//           <button className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition'>
//         <a
//                 href="/"
//                 className="text-white-600 hover:text-black-800 font-medium text-lg transition duration-150 ease-in-out "
//               >
//                 Go to Home
//               </a>
//         </button>
//             {/* Header */}
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 mb-2 tracking-tight">
//               Contact Us
//             </h1>
//             <p className="text-xl text-center text-gray-700 mb-8 font-semibold">
//               {companyName}
//             </p>

//             {/* Contact Details Grid */}
//             <div className="space-y-3 ">
//               {/* Address */}
//               <ContactItem
//                 Icon={MapPinIcon}
//                 title="Address"
//                 content={address}
//               />

//               <hr className="border-gray-200 text-center" />

//               {/* Mobile */}
//               <ContactItem
//                 Icon={PhoneIcon}
//                 title="Mobile"
//                 content={mobile}
//                 isLink={true}
//               />

//               <hr className="border-gray-200 text-center" />

//               {/* Email */}
//               <ContactItem
//                 Icon={MailIcon}
//                 title="Email"
//                 content={email}
//                 isLink={true}
//               />
//             </div>

//             {/* Footer CTA */}
//             <div className="mt-10 text-center">
//               <a
//                 href='/contacForEnq'
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//               >
//                 Send an Enquiry
//               </a>
//             </div>
//           </div>
//         </div></div>
//   )
// }

// export default ContactUs

import React from "react";

const ContactUs = () => {
  const MapPinIcon = ({ className = "w-5 h-5" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const PhoneIcon = ({ className = "w-5 h-5" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-2.94 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 17.05 17.05 0 0 0 .86 3.86 2 2 0 0 1-1.28 2.37l-1.67.92a15.98 15.98 0 0 0 6.55 6.55l.92-1.67a2 2 0 0 1 2.37-1.28 17.05 17.05 0 0 0 3.86.86 2 2 0 0 1 1.72 2v3z" />
    </svg>
  );

  const MailIcon = ({ className = "w-5 h-5" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const ContactItem = ({  title, content, isLink = false }) => (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
        {title}
      </h3>

      <div className={title !== "Address" ? "flex justify-center text-center" : ""}>
        {isLink ? (
          <a
            href={
              title === "Mobile"
                ? `tel:${content.replace(/\s/g, "")}`
                : `mailto:${content}`
            }
            className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition"
          >
            {content}
          </a>
        ) : (
          <p className="text-lg font-medium text-gray-800 whitespace-nowrap">
            {content}
          </p>
        )}
      </div>
    </div>
  );

  const companyName = "Medha Consultancy Services";
  const address = "No. 116/6, 1st Floor, 11th Cross, Malleswaram, Bangalore 560003";
  const mobile = "+91 99020 16176";
  const email = "support@medhacs.in";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 font-inter">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-xl p-6 sm:p-10 border border-gray-100">

        {/* Go Home Button */}
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mb-6">
          <a href="/" className="text-white text-lg">Go to Home</a>
        </button>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 mb-2">
          Contact Us
        </h1>
        <p className="text-xl text-center text-gray-700 mb-8 font-semibold">
          {companyName}
        </p>

        {/* Contact Items */}
        <ContactItem Icon={MapPinIcon} title="Address" content={address} />
        <hr className="border-gray-200 mb-4" />

        <ContactItem Icon={PhoneIcon} title="Mobile" content={mobile} isLink={true} />
        <hr className="border-gray-200 mb-4" />

        <ContactItem Icon={MailIcon} title="Email" content={email} isLink={true} />

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="/contacForEnq"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Send an Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
