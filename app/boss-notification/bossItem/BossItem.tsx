'use client'

import Image from "next/image"
import Link from "next/link"
import { BsBoxArrowUpRight } from "react-icons/bs"

interface BossItemProps {
  imageSrc: string
  title: string
  field: string
  dropItemLink: string
  time: string[]
}

const BossItem: React.FC<BossItemProps> = ({
  imageSrc,
  title,
  field,
  dropItemLink,
  time
}) => {

  return (
    <div className="flex flex-col items-center border-[1px] w-full h-full rounded-md bg-gray-700 border-gray-700 py-4">
      <Image alt={title} src={imageSrc} width={150} height={150} className="h-40 w-40 mb-6" />
      <h1>{title}</h1>
      <h2 className="font-light text-base">{field}</h2>
      <Link href={dropItemLink} target="_blank" className="mb-6 text-base text-blue-400 font-light">
        <label>
          <BsBoxArrowUpRight />
          드랍아이템
        </label>
      </Link>
      {time.map((time) => <p className="text-base" key={time}>{time}</p>)}
    </div>
  );
}

export default BossItem;