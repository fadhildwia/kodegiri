"use client"

import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const user = async () =>{
      const isLogin = await localStorage.getItem("username")

      if (!isLogin) {
        router.push("/login");
      }
    }

    user()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])


  

  const isHome = pathname === '/'

  const textColor = isHome ? 'text-white' : 'text-black'
  return (
    <div className={clsx("absolute h-[120px] w-full flex justify-evenly items-center")}>
      <div className="flex gap-3">
        <Image
          alt="Logo"
          height={25}
          width={25}
          src="/images/logo.png"
        />
        <h1 className={clsx("text-2xl font-bold", textColor)}>Loyauté</h1>
      </div>
      <div className="flex gap-14">
        <div className="flex flex-col gap-1 items-center cursor-pointer" onClick={() => router.push('/')}>
          <Image
            alt="Icon"
            height={28}
            width={28}
            src={pathname === '/' ? "/icons/homeSelected.svg" : "/icons/home.svg"}
          />
          <div className={clsx('text-sm font-semibold', pathname === '/' ? 'text-[#0074E0]' : textColor)}>Home</div>
        </div>
        <div className="flex flex-col gap-1 items-center cursor-pointer" onClick={() => router.push('/history')}>
          <Image
            alt="Icon"
            height={28}
            width={28}
            src={pathname === '/history' ? "/icons/historySelected.svg" : "/icons/history.svg"}
          />
          <div className={clsx('text-sm font-semibold', pathname === '/history' ? 'text-[#0074E0]' : textColor)}>History</div>
        </div>
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <Image
            alt="Icon"
            height={28}
            width={28}
            src="/icons/inbox.svg"
          />
          <div className={clsx('text-sm font-semibold', pathname === '/inbox' ? 'text-[#0074E0]' : textColor)}>Inbox</div>
        </div>
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <Image
            alt="Icon"
            height={28}
            width={28}
            src="/icons/profile.svg"
          />
          <div className={clsx('text-sm font-semibold', pathname === '/profile' ? 'text-[#0074E0]' : textColor)}>Profile</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          alt="Icon"
          height={28}
          width={28}
          src="/icons/notification.svg"
          className="me-8"
        />
        <div className="me-[14px]">
          <h3 className={clsx("text-xs text-end", textColor)}>Good morning,</h3>
          <h1 className={clsx("text-xl font-bold", textColor)}>Test Kodegiri</h1>
        </div>
        <Image
          alt="Image"
          height={48}
          width={48}
          src="/images/profile.png"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
