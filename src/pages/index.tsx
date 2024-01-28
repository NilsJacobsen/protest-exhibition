import Image from 'next/image'
import Head from 'next/head'

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
      className={`w-full h-screen flex flex-col items-center justify-center p-10 font-venusmartre`}
    >

      <p className='font-rubik'>Under construction</p>
      <Image src="/logo.jpg" alt="Auf die Straße" width={350} height={350} />
      <p className='font-rubik pt-3'>07.03 - 24.03</p>
    </main>
    </>
    
  )
}
