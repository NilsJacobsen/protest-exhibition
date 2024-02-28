import Image from 'next/image'
import Head from 'next/head'
import Hero from '@/components/landingpage/Hero'
import Navigation from '@/components/Navigation'
import Prolog from '@/components/landingpage/Prolog'
import Events from '@/components/landingpage/Events'

export default function Home() {
  return (
    <>
    <Head >
        <title>
          Auf die Straße | Ausstellung Dortmund
        </title>
        <meta
          name="description"
          content="Setze ein Statement für Veränderung. Wir gestalten aktiv eine nachhaltige Zukunft. Sei dabei!"
          key="desc"
        />
      </Head>
    <main
      className={`font-venusmartre relative`}
    >
      <nav className="fixed w-full font-rubik z-50">
        <Navigation/>
      </nav>
      <div className='relative w-full h-screen flex gap-2 flex-col items-center justify-center p-10'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpg" className='max-w-[600px] w-full' alt="Auf die Straße" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="pfeile" src="./pfeile.png" className="bottom-16 absolute hidden lg:block w-[200px]"/>
      </div>
      <Hero/>
      <Prolog />
      <Events />
      <footer>
        <div className="font-rubik max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-zinc-600">{"© AUF DIE STRASSE Ausstellung"}</p>
          </div>
        </div>
      </footer>
    </main>
    </>
    
  )
}
