import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#0A142F]'>
      <div className='py-[80px] container mx-auto'>
        <div className="flex gap-3">
          <Image
            alt="Logo"
            height={25}
            width={25}
            src="/images/logo.png"
          />
          <h1 className={clsx("text-2xl font-bold")}>Loyauté</h1>
        </div>
        <div>
          <div>Quick Links</div>
          <p>Home</p>
          <p>History</p>
          <p>Inbox</p>
          <p>Profile</p>
        </div>
        <div>
          <div>Categories</div>
          <p>Latests Promo</p>
          <p>Popular Merchant</p>
          <p>Quick Links</p>
          <p>Popular Rewards</p>
        </div>
        <div>
          <div>Download Apps</div>
        </div>
      </div>
    </div>
  )
}
