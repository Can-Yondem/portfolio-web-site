import Head from 'next/head'
import HerosectionPhoto from "../assests/img/herosection.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <section >
      <div className="w-full h-auto">
        <Image src={HerosectionPhoto} alt="herosection photo" layout="fill"/>
        <div className="w-full min-h-screen absolute bg-black top-0 bg-opacity-10 ">
            <div>

            </div>
        </div >
      </div>
    </section>
  )
}
