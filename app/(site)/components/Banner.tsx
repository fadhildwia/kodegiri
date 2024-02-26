import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <div className='flex justify-center items-center' style={{ backgroundImage: `url(/images/banner.png)`, width: '100%', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex flex-col items-center gap-9 w-[740px]'>
        <div className='text-6xl font-bold text-white'>Welcome to <span className='text-[#007DFC]'>Loyauté</span></div>
        <p className='text-2xl text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='flex gap-6'>
          <div className='flex gap-[10px] py-3 px-8 border border-white rounded-[100px] text-white cursor-pointer'>
            <Image
              alt="Icon"
              height={20}
              width={20}
              src="/icons/playStore.svg"
            />
            <p>Play Store</p>
          </div>
          <div className='flex gap-[10px] py-3 px-8 border border-white rounded-[100px] text-white cursor-pointer'>
            <Image
              alt="Icon"
              height={20}
              width={20}
              src="/icons/appleStore.svg"
            />
            <p>Apps Store</p>
          </div>
        </div>
      </div>
    </div>
  )
}
