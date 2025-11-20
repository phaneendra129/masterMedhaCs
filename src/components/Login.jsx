// import React, { useState } from 'react'
// import { UserCircleIcon   } from '@heroicons/react/24/solid';

// const Login = (props) => {
//     const [loginState, setloginState] = useState(false)
//     const handleLogin = () => {
//         console.log("wewdsgvxb")
//        setloginState(true) 
//     }
// // console.log(loginState)
// props.handleLogin(loginState)
//   return (
//      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
//       <div>
//       <UserCircleIcon   className="py-[5px] size-16 text-black-500" />
//       <div className='h-[25rem] w-[25rem] bg-white shadow rounded-2xl'>
//           <h1 className='p-[20px] font-bold border-b-2 border-black'>Sign In</h1>
//           <div className='flex flex-col items-center space-y-6 py-[3rem]'>
//             <input type='text' placeholder="UserName" className='border-2 w-[22rem] h-[2rem] rounded bg-gray-200'/>
//             <input type='text' placeholder="Password" className='border-2 w-[22rem] h-[2rem] rounded bg-gray-200'/>
//             <button className='border-2 w-[22rem] h-[2.5rem] rounded-[8px] bg-blue-500'><h6 className='text-white font-inherit' onClick={handleLogin}>Sign In</h6></button>
//             <p>Forgot <a className='text-blue-500'>Username /</a><a className='text-blue-500'> Password?</a></p>
//             <p>Don't have an account? <a className='text-blue-500'>Sign Up</a></p>
//           </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse">
        🚀 We're Coming Soon!
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
        Our website is currently under construction. Stay tuned — something amazing is on its way!
      </p>
      <div className="flex space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all">
          Notify Me
        </button>
        <button className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-6 py-2 rounded-full transition-all">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} 2mSolutions
      </footer>
    </div>
  );
};

export default ComingSoon;

