import Head from 'next/head';
import Navbar from "../components/Navbar"
import Image from 'next/image'
import Link from "next/link"
import AboutImage from "../assests/img/aboutimage.jpg";
import Typical from 'react-typical';

export default function Home() {
  return (
    <div className="">
        <Head>
            <title>Hakkımda</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="border-b-2 shadow-lg">
            <Navbar />
        </div>
                
        <div className="flex container mx-auto items-center content-center min-h-screen lg:flex-row flex-col ">
            <div className="lg:w-2/6 lg:mr-20 my-10">
                <div className="rounded-full overflow-hidden sm:w-96 mx-auto w-80">
                    <Image src={AboutImage} alt="about photo" />
                </div>
            </div>
            <div className="w-4/6 ">
                <Typical
                  steps={['FRONT-END DEVELOPER', 3000]}
                  loop={Infinity}
                  wrapper="b"
                  className="text-green-500 lg:text-5xl font-bold md:text-4xl text-3xl"
                />
                <p className="font-thin text-gray-600 lg:text-lg mt-10 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quidem reprehenderit, neque ullam laborum necessitatibus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-6">
                    <span className="font-bold text-black text-lg">Name: <span className="font-medium text-gray-400">Onur Can Yöndem</span></span>
                    <span className="font-bold text-black text-lg">Age: <span className="font-medium text-gray-400">24</span></span>
                    <span className="font-bold text-black text-lg">Email: <span className="font-medium text-gray-400">can.yondem.22@gmail.com</span></span>
                    <span className="font-bold text-black text-lg">Phone: <span className="font-medium text-gray-400">0544 864 0222</span></span>
                    <span className="font-bold text-black text-lg">Adress: <span className="font-medium text-gray-400">Edirne</span></span>
                    <span className="font-bold text-black text-lg">Hobby: <span className="font-medium text-gray-400">Coding</span></span>
                </div>
                <button className="mt-5 border-2 border-green-500 p-3 rounded-md text-white font-bold bg-green-500 hover:bg-white hover:text-green-500 transition ease-in-out duration-300">
                    <Link href="https://drive.google.com/file/d/1M7UsT-J86KVFjf5beTCx1zgx3tdG4QDk/view">
                        <a target="blank">
                            CV İndir
                        </a>
                    </Link>
                </button>

            </div>

        </div>
    </div>
  )
}
