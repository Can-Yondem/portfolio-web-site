import Head from 'next/head';
import Navbar from "../components/Navbar"
import Image from 'next/image'
import AboutImage from "../assests/img/aboutimage.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="border-b-2 shadow-lg">
            <Navbar />
        </div>
                
        <div className="flex container mx-auto mt-52 items-center">
            <div className="w-2/6 mr-32 ">
                <Image src={AboutImage} alt="about photo" className="rounded-full" width="400" height="400"/>
            </div>
            <div className="w-4/6 ">
                <p className="text-5xl font-bold mb-10 text-green-400">FRONT-END DEVELOPER</p>
                <p className="font-thin text-gray-600 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quidem reprehenderit, neque ullam laborum necessitatibus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis magnam, porro mollitia quod dolorem!
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                    <span className="font-bold text-black text-lg">Name: <span className="font-medium text-gray-400">Onur Can Yöndem</span></span>
                    <span className="font-bold text-black text-lg">Age: <span className="font-medium text-gray-400">24</span></span>
                    <span className="font-bold text-black text-lg">Email: <span className="font-medium text-gray-400">can.yondem.22@gmail.com</span></span>
                    <span className="font-bold text-black text-lg">Phone: <span className="font-medium text-gray-400">0544 864 0222</span></span>
                    <span className="font-bold text-black text-lg">Adress: <span className="font-medium text-gray-400">Edirne</span></span>
                    <span className="font-bold text-black text-lg">Hobby: <span className="font-medium text-gray-400">Coding</span></span>
                </div>
                <button className="mt-5 border-2 border-green-400 p-3 rounded-md text-black font-thin hover:bg-green-400 hover:text-white transition ease-in-out duration-300">Download CV</button>
            </div>

        </div>


    </div>
  )
}
