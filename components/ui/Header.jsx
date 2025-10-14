import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import standartbankLogo from '@/public/standardbank-logo.svg'

const Header = () => {
  return (
    <div className='w-full max-w-7xl mx-auto p-4 flex items-center justify-between gap-4'>
        <Link href="/">
            <Image
              src={standartbankLogo}
              alt="Standardbank Logo"
              width={220}
              height={54}
              priority
                className="max-w-[200px] sm:max-w-full h-auto"
            /> 
        </Link>
        <button type="button" className="text-white font-bspro font-medium text-lg md:text-xl uppercase cursor-pointer">EXIT</button>
    </div>
  )
}

export default Header