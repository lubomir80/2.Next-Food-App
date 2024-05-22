"use client"
import Link from 'next/link'
import React from 'react'

function Navbar() {

   const linkStyleHover = `hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-transparent hover:bg-clip-text`

   const navbarLinks = [
      {
         href: "/meals",
         title: "Browse Meals"
      },
      {
         href: "/community",
         title: "Foodies Community"
      },
   ]


   return (
      <nav>
         <ul className='flex gap-6 text-xl font-mono flex-wrap '>
            {navbarLinks.map(({ href, title }) => (
               <li key={title}>
                  <Link
                     className={`font-bold px-2 py-4 rounded-sm text-text-orange ${linkStyleHover} `}
                     href={href}>{title}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export default Navbar