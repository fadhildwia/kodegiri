import Image from 'next/image'
import React from 'react'

type Props = {
  data: Array<{ id: string, title: string, imageUrl: string}>
}

export const Merchant = ({ data }: Props) => {
  return (
    <div className='py-14 container mx-auto bg-white'>
      <div className='flex justify-between items-center mb-12'>
        <h1 className="text-[32px] font-bold">Popular Merchant</h1>
        <p className='text-[#007DFC] font-medium cursor-pointer'>View More</p>
      </div>
      <div className='flex justify-between items-center text-center'>
        {data.map((item, index) => (
          <div key={index} className='gap-[10px]'>
            <Image
              alt="Image"
              height={120}
              width={120}
              src={item.imageUrl}
            />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
