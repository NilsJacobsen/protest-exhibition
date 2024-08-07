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
          <div className="relative pt-8 lg:mt-[-50px] lg:pb-16">
            <main className="mt-16 sm:mt-24 font-rubik">
              <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                    <div>
                      <h2 className="text-xl font-bold text-black">{"08.08. - 17.11.2024"}</h2>
                      <h1 className="font-venusmartre pb-4 mt-4 tracking-tight font-bold text-black sm:mt-5 sm:leading-none lg:mt-3 text-3xl sm:text-5xl">
                        {"AUSSTELLUNG ÜBER KLIMAAKTIVISMUS"}
                      </h1>
                      <p className="p-0 text-base font-regular text-zinc-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        {"In dieser interaktiven Wanderausstellung stellst du Klimaaktivist:innen Fragen über ihre Arbeit, lernst mehr über Klimaaktivismus und entscheidest, wie weit du selbst für den Protest gehen möchtest."}
                      </p>
                      <p className="p-0 text-base font-regular text-zinc-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        {"Mit der multimedialen Ausstellung und einem breiten Rahmenprogramm treten wir gemeinsam in den aktuellen Klimaaktivismus-Diskurs in Deutschland ein."}
                      </p>
                      <div className="sm:hidden mt-8 lg:mt-0 lg:mb-12 w-full rounded-md shadow">
                        <Link
                          href="/api/ical"
                          className="bg-white hover:bg-gray-200 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black"
                        >
                          {"Kalendereintrag speichern"}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-24 lg:mt-0 lg:col-span-6">
                    <div className="flex flex-col-reverse lg:flex-col bg-white border-zinc-200 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                      <div className="h-[calc(100vh_/_3)] lg:h-[calc(100vh_/_4)]">
                        <MapProvider>
                          <Map/>
                        </MapProvider>
                      </div>
                      <div className="px-4 py-6 bg-white lg:border-t-2 border-gray-200 sm:px-10">
                        <p className="font-bold text-s leading-5 text-zinc-500">{"LWL-Museum für Archäologie und Kultur"}</p>
                        <p className="pb-3 font-bold text-s leading-5 text-zinc-500">{"LWL -MAK Westfälisches Landesmuseum"}</p>
                        <p className="pb-3 font-regular text-s leading-5 text-zinc-500">{"Europaplatz 1, 44623 Herne"}</p>
                        <p className="pb-1 font-regular text-s leading-5 text-zinc-500">{"Di, Mi, Fr // 9 - 17 Uhr"}</p>
                        <p className="pb-1 font-regular text-s leading-5 text-zinc-500">{"Do // 9 - 19 Uhr"}</p>
                        <p className="pb-8 font-regular text-s leading-5 text-zinc-500">{"Sa, So, Feiertage // 11 - 18 Uhr"}</p>
                        
                        <div className="w-full rounded-md">
                          <a
                            target="_blank"
                            href="https://www.lwl-landesmuseum-herne.de/de/"
                            className="bg-zinc-100 relative z-40 hover:bg-zinc-200 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black"
                          >
                            {"Zum Veranstaltungsort"}
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
                <div className="py-20 max-w-5xl px-6 mx-auto flex justify-center flex-wrap gap-x-4 gap-y-8">
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
                        className="h-9 sm:h-14 grayscale scale-150 px-4"
                        src="/1_LWL.svg"
                        alt="LWL"
                    />
                    </div>
                    <div className="flex justify-center px-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-9 sm:h-14 grayscale scale-150 px-12"
                        src="/2_LWL-MAK.svg"
                        alt="LWL-MAK"
                    />
                    </div>
                    <div className="flex justify-center px-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-9 sm:h-14 grayscale"
                        src="/volksbank.jpg"
                        alt="Volksbank"
                    />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Hero