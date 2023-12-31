"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState('hidden');

  const toggleNav = () => {
    setNav(nav === 'hidden' ? 'block' : 'hidden');
  };

  return (
    <nav className="bg-gray-900 border-gray-200 mt-6 rounded-lg w-3/4 fixed left-0 right-0 mx-auto z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 py-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.svg" alt='logo' width={60} height={60} />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={nav === 'hidden' ? 'false' : 'true'}
          onClick={toggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${nav}`} id="navbar-default">
        <ul className="font-medium text-xs flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 text-white">
          <li>
            <a href="https://sntciitbhu.co.in/#home" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
          </li>
          <li>
            <a href="https://sntciitbhu.co.in/Ourclubs" className="block py-2 px-3 text-whites rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Club</a>
          </li>
          <li>
            <a href="https://sntciitbhu.co.in/events" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</a>
          </li>
          <li>
            <a href="https://sntciitbhu.co.in/#achievements" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Acheivements</a>
          </li>
          <li>
            <a href="https://sntciitbhu.co.in/#contacts" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
};

export default Navbar;
