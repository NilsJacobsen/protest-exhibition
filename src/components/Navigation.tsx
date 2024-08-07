import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

const Navigation = () => {
    const navigation = [
        { name: "Prolog", href: '#prolog' },
        { name: "Events", href: '#events' },
        // { name: m.nav_videos(), href: '#videos' },
        { name: "Impressum", href: '/impressum' },
        // { name: m.nav_data_protection(), href: '/datenschutz' },
      ]

    return <div className="bg-white w-full">
        <Popover as="header" className="relative w-screen">
            <div className="pt-4 pb-4 w-full">
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center w-full md:w-auto">
                    <a href="#" className="flex-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="h-12 w-auto sm:h-12"
                            src="/favicon.jpeg"
                            alt=""
                        />
                    </a>
                    {/* <div class="md:hidden pl-8 flex-1">
                      <LanguagePicker/>
                    </div> */}
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-zinc-600 hover:text-zinc-900 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:flex md:ml-10">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <p className="text-base font-medium text-zinc-600 hover:text-zinc-900">
                          {item.name}
                        </p>
                      </Link>
                    ))}
                    {/* <LanguagePicker/> */}
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                  <Link
                    href="/api/ical"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-zinc-100 hover:bg-zinc-200"
                  >
                    Kalendereintrag speichern
                  </Link>
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
              <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="h-12 w-auto"
                            src="/favicon.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100">
                        <span className="sr-only">Close</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <a
                          key={"museum"}
                          href={"https://dortmund-kreativ.de/veranstaltungsort/hans-a/"}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          Museum
                        </a>
                    </div>
                    <div className="mt-6 px-5">
                      <Link
                        href="/api/ical"
                        className="block text-center w-full py-3 px-4 rounded-md text-black font-medium bg-zinc-100 hover:bg-zinc-200"
                      >
                        Kalendereintrag speichern
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
    </div>
}

export default Navigation