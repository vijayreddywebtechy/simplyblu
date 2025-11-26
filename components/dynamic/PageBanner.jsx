import React from 'react'
import Image from 'next/image'
import bannerImage from '@/assets/images/banners/online_payment_sol.png'

const PageBanner = () => {
  return (
    <div className='relative w-full h-auto md:h-[480px]'>
        <div className='absolute inset-0 hidden md:flex'>
            {/* Background sections - Desktop only */}
            <div className='w-[45%] bg-white'></div>
            <div className='w-[55%] relative'>
                <Image 
                    src={bannerImage} 
                    alt="Solutions Banner" 
                    fill
                    className='object-cover'
                />
            </div>
        </div>
        
        {/* Mobile background - full width blue */}
        <div className='absolute inset-0 bg-white md:hidden'></div>
        
        {/* Content aligned with page-container */}
        <div className='relative page-container h-full flex items-center py-12 md:py-0 md:min-h-[362px]'>
            <div className='w-full md:max-w-[40%]'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl lg:leading-tight text-secondary mb-4'>Grow your business with merchant solutions </h2>
                {/* <p className='text-base text-white leading-relaxed'>Access a variety of tailor-made financial solutions that will help make your business a success</p> */}
            </div>
        </div>
    </div>
  )
}

export default PageBanner