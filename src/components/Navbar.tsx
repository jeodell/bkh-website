import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="grid h-24 w-full grid-cols-3 items-center border-b border-gray-200 bg-white px-4 py-2">
      {/* Left */}
      <div className="hidden items-center justify-start md:flex md:gap-x-4">
        <Menu as="div" className="peer relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1 rounded-md bg-white px-3 py-2 text-sm">
              Photography
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  href="travel"
                  className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Travel
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="nature"
                  className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Nature
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="portrait"
                  className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Portrait
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="drone"
                  className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Drone
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <Link href="film" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
          Film
        </Link>
        <Link href="design" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
          Design
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="-mr-2 flex items-center md:hidden">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="text-xl">
            Brianna Haferman
          </Link>
          <div className="lowercase text-gray-500">Portraits, Nature, and the occasional Adventure</div>
        </div>
      </div>

      {/* Right */}
      <div className="hidden items-center justify-end md:flex md:gap-x-4">
        <div className="hidden justify-end md:mr-6 md:flex md:space-x-8">
          <Link href="/about" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
            About
          </Link>
          <Link href="/contact" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 pb-3 pt-2">
          <Link href="/" className="block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-blue-700">
            Home
          </Link>
          <Link
            href="/#gallery"
            className="hover: block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="hover: block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50"
          >
            About
          </Link>
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <Image
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
