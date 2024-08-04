import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import NavbarLink from './ui/navbar-link'

export default function Navbar() {
  return (
    <nav className="grid min-h-28 w-full grid-cols-3 items-center border-b border-gray-200 bg-white px-4 py-2">
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
          <DropdownMenuContent className="w-56 bg-white p-2">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Photography</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white p-2">
                  <DropdownMenuItem asChild>
                    <Link href="travel" className="w-full cursor-pointer py-2">
                      Travel
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="nature" className="w-full cursor-pointer py-2">
                      Nature
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="portrait" className="w-full cursor-pointer py-2">
                      Portrait
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="drone" className="w-full cursor-pointer py-2">
                      Drone
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem asChild>
              <Link href="film" className="w-full cursor-pointer py-2">
                Film
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="design" className="w-full cursor-pointer py-2">
                Design
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="h-[2px] bg-nature" />
            <DropdownMenuItem asChild>
              <Link href="about" className="w-full cursor-pointer py-2">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="contact" className="w-full cursor-pointer py-2">
                Contact
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
            <Button variant="ghost" className="text-sm font-normal hover:bg-background hover:text-gray-500">
              Photography
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white p-2">
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
        <NavbarLink href="film" text="Film" />
        <NavbarLink href="design" text="Design" />
      </div>

      {/* Center */}
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="rounded-md px-3 py-2 text-2xl font-extralight hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Brianna Haferman
        </Link>
      </div>

      {/* Right */}
      <div className="hidden items-center justify-end lg:flex lg:gap-x-4">
        <div className="hidden justify-end lg:mr-6 lg:flex lg:space-x-8">
          <NavbarLink href="about" text="About" />
          <NavbarLink href="contact" text="Contact" />
        </div>
      </div>
    </nav>
  )
}
