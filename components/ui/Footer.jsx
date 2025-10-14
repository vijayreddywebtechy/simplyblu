import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import googlePlayBadge from '../../../public/img/google-play-badge.png'
import appStoreBadge from '../../../public/img/app-store-badge.png'
import deviceApp from '../../../public/img/device-app.png'

const Footer = () => {
  return (
<div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-2 flex flex-col md:flex-row items-center justify-between gap-8">
  {/* Left Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-16">
    <h5 className="font-bspro text-2xl md:text-3xl text-white font-medium mb-4 md:mb-0 leading-tight ">
      Standard Bank App
    </h5>

    {/* App Store Buttons */}
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <Link href="#" className="hover:opacity-90 transition">
        <Image
          src={googlePlayBadge}
          alt="Google Play"
          width={175}
          height={46}
          className="max-w-full h-auto"
        />
      </Link>
      <Link href="#" className="hover:opacity-90 transition">
        <Image
          src={appStoreBadge}
          alt="App Store"
          width={175}
          height={46}
          className="max-w-full h-auto"
        />
      </Link>
    </div>
  </div>

  {/* Right Section - Device Image */}
  <div className="flex justify-center md:justify-end w-full md:w-auto">
    <Image
      src={deviceApp}
      alt="Devices"
      className="max-w-full h-auto"
      priority
    />
  </div>
</div>


  )
}

export default Footer