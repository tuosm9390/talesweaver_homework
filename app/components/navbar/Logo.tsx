'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer text-2xl font-bold"
      onClick={() => router.push('/')}
    >
      테일즈룬
    </div>
  )
};

export default Logo;
