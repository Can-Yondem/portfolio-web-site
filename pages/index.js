import Head from 'next/head'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"


export default function Home() {

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="main" textcolor="text-white"/>
      <HeroSection />
    </div>
  )
}