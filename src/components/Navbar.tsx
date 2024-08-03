import { Button } from '@components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components/ui/dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="grid h-24 w-full grid-cols-3 items-center border-b border-gray-200 bg-white px-4 py-2">
      {/* Mobile menu */}
      <div className="-mr-2 flex items-center lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-2">
            <DropdownMenuItem asChild>
              <Link href="travel" className="w-full py-2">
                Travel
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="nature" className="w-full py-2">
                Nature
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="portrait" className="w-full py-2">
                Portrait
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="drone" className="w-full py-2">
                Drone
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Left */}
      <div className="hidden items-center justify-start lg:flex lg:gap-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="inline-flex justify-center gap-x-1 rounded-md bg-white px-3 py-2 text-sm"
          >
            <Button variant="ghost">
              Photography
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-2">
            <DropdownMenuItem asChild>
              <Link href="travel" className="w-full py-2">
                Travel
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="nature" className="w-full py-2">
                Nature
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="portrait" className="w-full py-2">
                Portrait
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="drone" className="w-full py-2">
                Drone
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="film" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
          Film
        </Link>
        <Link href="design" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
          Design
        </Link>
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
      <div className="hidden items-center justify-end lg:flex lg:gap-x-4">
        <div className="hidden justify-end lg:mr-6 lg:flex lg:space-x-8">
          <Link href="/about" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
            About
          </Link>
          <Link href="/contact" className="inline-flex items-center px-3 py-2 text-sm hover:text-gray-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
