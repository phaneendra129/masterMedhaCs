import React, { useState } from 'react';
import { UserCircleIcon, UserIcon, RectangleStackIcon, TruckIcon, PlusCircleIcon, NewspaperIcon, StarIcon, CloudIcon, WrenchIcon, LockClosedIcon, ArrowRightIcon } from '@heroicons/react/24/solid';


const SideBar = () => {
     const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`w-[15rem] h-screen bg-gray-100 flex flex-col fixed transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-48'}`}>
        {/* // <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}> */}
            <div className='flex flex-row space-2 m-2 justify-evenly'>
                <UserCircleIcon className="py-[2px] size-10 text-black-500" />
                <h3 className='mt-[8px]'>Model OverView</h3>
                <button onClick={() => setIsOpen(!isOpen)}><ArrowRightIcon className="size-5 text-black-500 mt-[5px]"/></button>
            </div>
            <ul className='flex flex-col px-2'>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Dashboard</h6><RectangleStackIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Profile</h6> <UserIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Overview Tour</h6> <TruckIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Join us</h6><PlusCircleIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Spiritual Originate</h6>< StarIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Spiritual Aayikyam</h6>< NewspaperIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Siddhanta</h6>< CloudIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Account Setting</h6>< WrenchIcon className="size-5 text-black-500" /></li>
                <li className=' hover:bg-gray-200 rounded p-2 flex flex-row justify-between'><h6>Logout</h6>< LockClosedIcon className="size-5 text-black-500" /></li>
            </ul>
        </div>
    )
}

export default SideBar