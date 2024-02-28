import { MapProvider } from '@/helper/mapHook'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Map } from '../Map'

const Hero = () => {

    return (
        <div className="relative overflow-hidden bg-zinc-50">
          <div className="relative pt-0 lg:mt-[-50px] pb-16 sm:pb-16">
            <main className="mt-16 sm:mt-24 font-rubik">
              <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                    <div>
                      <h2 className="text-xl font-bold text-black">{"07.03 - 24.03"}</h2>
                      <h1 className="font-venusmartre pb-4 mt-4 text-4xl tracking-tight font-bold text-zinc-400 sm:mt-5 sm:leading-none lg:mt-3 lg:text-5xl xl:text-6xl">
                        <span className="md:block">{"AUF DIE STRASSE"}</span>{' '}
                        <span className="text-black md:block">{"AUSSTELLUNG"}</span>
                      </h1>
                      <p className="p-0 text-base font-regular text-zinc-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        {"Gesellschaftliche Diversität ist ein Thema, das viele bewegt, manche ermüdet, für hitzige Diskussionen sorgt und dabei immer polarisiert."}
                      </p>
                      <div className="sm:hidden mb-12 w-full rounded-md shadow">
                        <a
                          href="/api/ical"
                          className="bg-white hover:bg-gray-200 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black"
                        >
                          {"download calendar"}
                        </a>
                      </div>
                      {/* <p className="mt-8 text-sm text-gray-900 uppercase tracking-wide font-semibold sm:mt-10">In zusammenarbeit mit</p> */}
                    </div>
                  </div>
                  <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                    <div className="flex flex-col-reverse lg:flex-col  bg-white border border-zinc-200 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                      <div className="h-[calc(100vh_/_3)] lg:h-[calc(100vh_/_4)]">
                        <MapProvider>
                          <Map/>
                        </MapProvider>
                      </div>
                      <div className="px-4 py-6 bg-white border-t-2 border-gray-200 sm:px-10">
                        <p className="pb-3 font-bold text-s leading-5 text-zinc-500">{"name"}</p>
                        <p className="pb-3 font-regular text-s leading-5 text-zinc-500">{"address"}</p>
                        <p className="pb-1 font-regular text-s leading-5 text-zinc-500">{"opening week"}</p>
                        <p className="pb-1 font-regular text-s leading-5 text-zinc-500">{"opening weekend"}</p>
                        <p className="pb-8 font-regular text-s leading-5 text-zinc-500">{"opening addition"}</p>
                        
                        <div className="w-full rounded-md shadow">
                          <a
                            target="_blank"
                            href="https://www.lwl-landesmuseum-herne.de/de"
                            className="bg-zinc-200 hover:bg-zinc-300 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black"
                          >
                            {"link"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            
          </div>
          <div className="w-full bg-white">
                <div className="py-20 max-w-4xl px-6 mx-auto flex justify-between flex-wrap gap-4">
                    <div className="flex justify-center px-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-9 sm:h-14 grayscale"
                        src="/fh-dortmund.png"
                        alt="FH Dortmund"
                    />
                    </div>
                    <div className="flex justify-center px-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-9 sm:h-14 grayscale"
                        src="/museum-fuer-kunst-und-kultur.png"
                        alt="NS-DOK"
                    />
                    </div>
                    <div className="flex justify-center px-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-9 sm:h-14 grayscale"
                        src="/dortmund-kreativ.png"
                        alt="Museum der Stadt Köln"
                    />
                    </div>
                    <div className="flex justify-center px-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-9 sm:h-14 grayscale"
                        src="/volksbank.png"
                        alt="Museum der Stadt Köln"
                    />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Hero