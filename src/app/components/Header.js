import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
   return (
      <header>
         <Link href="/">
            <Image src="/logo.png" alt='logo' width={50} height={50} />
         </Link>
      </header>
   )
}

export default Header