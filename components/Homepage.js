import React from 'react'
import Image from 'next/image'

import HeroImage from '../public/image/HeroImage.png'
import { PlayIcon } from '@heroicons/react/outline'

function HomePage() {
  return (
    <div className="min-w-7xl flex flex-col items-center justify-around md:flex-row">
      {/* textual area */}
      <div className="mx-10 mt-10 flex flex-col items-start justify-start md:ml-20 md:mt-0">
        <p className="text-base font-semibold text-orange-500">Veterinary</p>
        <h2 className="text-5xl font-bold text-gray-800 md:text-6xl">
          Treating Your Pet By Our Professionals.
        </h2>
        <p className="mt-5 text-sm font-semibold text-gray-400 md:text-base">
          {' '}
          When Tristan arrived, he was incredibly shut down and presented as
          almost feral—he could not be touched, wouldn’t leave his kennel, and
          spent the majority of his days hiding under his Kuranda bed or pressed
          against the far back wall of his kennel.
        </p>
        <div className="mt-10 flex items-center justify-center gap-5">
          <button className="rounded-full bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-black hover:shadow-lg md:py-4">
            Create Schedule
          </button>
          <button className="rounded-full bg-gray-50 p-2 shadow-lg">
            <PlayIcon className="text-4xl text-orange-500 hover:text-black hover:shadow-lg md:text-5xl" />
          </button>
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
