import React, { useState } from 'react'
import data from '../data/images.json'
import Modal from '../components/Modal'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: './#' },
  { name: 'About Me', href: '#' },
  { name: 'Gallery', href: '#' },
]

function Images() {
  const [clickedImg, setClickedImg] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (item, index) => {
    setCurrentIndex(index)
    setClickedImg(item.link)
  }

  const handelRotationRight = () => {
    const totalLength = data.data.length
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0)
      const newUrl = data.data[0].link
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex + 1
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].link
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  const handelRotationLeft = () => {
    const totalLength = data.data.length
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1)
      const newUrl = data.data[totalLength - 1].link
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex - 1
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].link
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <Popover>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    alt="Workflow"
                    className="h-8 w-auto sm:h-10"
                    src=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg p-2 font-medium text-black hover:bg-indigo-600 hover:text-white hover:shadow-lg"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Contact Me
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
              >
                Contact Me
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="wrapper">
        {data.data.map((item, index) => (
          <div key={index} className="wrapper-images">
            <img
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Images
