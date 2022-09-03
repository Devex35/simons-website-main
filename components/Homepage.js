import React from 'react'
import Image from 'next/image'

import HeroImage from '../public/image/HeroImage.png'
import { PlayIcon } from '@heroicons/react/outline'

function HomePage() {
  return (
    <div className=" min-w-7xl flex flex-col items-center justify-around md:flex-row">
      {/* textual area */}
      <div className="mx-10 mt-10 flex flex-col items-start justify-start md:ml-20 md:mt-0">
        <p className="text-base font-semibold text-indigo-500">Photography</p>
        <h2 className="text-5xl font-bold text-gray-800 md:text-6xl">
          Revolutionizing the Future of Photography.
        </h2>
        <p className="mt-5 text-sm font-semibold text-gray-400 md:text-base">
          {' '}
          Hi. My name is Simon and I am pationate photographer. This is my
          website that showcases some of my finest images I have taken over the
          years. If you love my level of proffesionalism you will be glad to
          know that I am available for hire. In the meantime , feel free to
          explore my work.
        </p>
        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href="#gallery"
            className="flex rounded-full bg-indigo-500 px-5 py-2 font-semibold text-white hover:bg-black hover:shadow-lg md:py-4"
          >
            View Intro
          </a>
        </div>
      </div>
      {/* image area */}
      <div className="mr-20 hidden md:block">
        <Image src={HeroImage} width={1500} height={1500} objectFit="cover" />
      </div>
    </div>
  )
}

export default HomePage
