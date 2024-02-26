"use client"

import clsx from "clsx"
import Image from "next/image"
import React, { useState } from "react"

type Props = {
  tabList: Array<{ id: string; title: string; icon: string }>
  dataCard: Array<{
    id: string
    imageCard: string
    imageCompany: string
    companyName: string
    Title: string
    point: number
  }>
}

export const Rewards = ({ tabList, dataCard }: Props) => {
  const [selected, setSelected] = useState(tabList[0].id)

  return (
    <div className="py-14 container mx-auto bg-white">
      <h1 className="text-[32px] font-bold">Popular Rewards</h1>
      <p className="text-[#959595] mb-12">
        Explore our latest popular rewards!
      </p>
      <div className="flex gap-4 mb-8">
        {tabList.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item.id)}
            className={clsx(
              "py-[10px] px-[20px] text-center rounded-[100px] flex gap-1 justify-center items-center cursor-pointer",
              selected === item.id
                ? "bg-[#0074E0] text-white"
                : "bg-[#F6F7FB] text-black"
            )}
          >
            {item.icon && (
              <Image alt="Icon" height={18} width={18} src={item.icon} />
            )}
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-4 gap-7'>
        {dataCard.map((item, index) => (
          <div key={index} className="gap-1">
            <img
              alt="Image"
              className="w-auto mb-4"
              src={item.imageCard}
            />
            <div className="flex gap-[10px]">
              <Image
                alt="Image"
                height={24}
                width={24}
                src={item.imageCompany}
              />
              <div>{item.companyName}</div>
            </div>
            <div className="text-xl font-semibold truncate">{item.Title}</div>
            <div>Point earned</div>
            <div className="flex gap-2">
              <Image
                alt="Icon"
                height={20}
                width={20}
                src='/icons/point.svg'
              />
              <div className="font-medium">{item.point}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
