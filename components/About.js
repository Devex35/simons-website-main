import React from 'react'
import Image from 'next/image'
import AboutImage from '../public/image/About.jpg'
import Link from 'next/link'

function About() {
  return (
    <div className="min-w-7xl my-24 flex flex-col justify-between gap-y-10 md:flex-row">
      <div className="mx-20">
        <Image
          src={AboutImage}
          width={800}
          height={800}
          objectfit="cover"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="mx-10 md:mr-20">
        <h2 className="text-base font-semibold text-indigo-500">About Us</h2>
        <p className="mt-2 mb-5 text-5xl font-bold text-gray-900 sm:text-4xl">
          Let's Know each other More closly
        </p>
        <p className="text-sm text-gray-400  md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
          perspiciatis minus. Qui ducimus quae expedita quod aliquam laborum
          placeat, blanditiis possimus facere asperiores ut quas hic eos nihil
          repudiandae.
        </p>
        <p className="text-sm text-gray-400 md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
          perspiciatis minus. Qui ducimus quae expedita quod aliquam laborum
          placeat, blanditiis possimus facere asperiores ut quas hic eos nihil
          repudiandae.
        </p>
        <button className="my-10 rounded-full bg-indigo-500 px-5 py-2 font-semibold text-white hover:bg-black hover:shadow-lg md:py-4">
          <Link href="/Images">Learn More</Link>
        </button>
      </div>
    </div>
  )
}

export default About
