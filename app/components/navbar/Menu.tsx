'use client'

import { useRouter } from "next/navigation";

const Menu = () => {
  const router = useRouter();

  return (
    <div className="relative ">
      <div className="flex flex-row items-center justify-between">
        <div
          className="px-6 cursor-pointer hover:font-semibold"
          onClick={() => { router.push('/notice') }}
        >
          공지사항
        </div>
        <div
          className="sm:block px-6 border-x-[1px] cursor-pointer hover:font-semibold"
          onClick={() => { router.push('/boss-notification') }}
        >
          보스알리미
        </div>
        <div
          className="sm:block px-6 border-x-[1px] cursor-pointer hover:font-semibold"
          onClick={() => { router.push('/calculate') }}
        >
          폐지계산기
        </div>
        <div
          className="px-6 cursor-pointer hover:font-semibold"
          onClick={() => { router.push('/homework') }}
        >
          숙제현황
        </div>
      </div>
    </div >
  );
}

export default Menu;