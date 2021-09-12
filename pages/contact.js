import Head from 'next/head'
import Navbar from "../components/Navbar"
import { BsPersonFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <div className="container mx-auto flex lg:flex-row flex-col-reverse lg:my-44">
            <div className="flex flex-col gap-4 lg:w-1/2 ">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam cupiditate, debitis assumenda tempore ducimus consectetur blanditiis nam veritatis, maiores illum quos doloribus dolorum, illo atque sit laudantium. Cumque, saepe sed.</p>
                <div className="flex">
                    <BsPersonFill className="text-green-500 text-3xl mr-5 mt-1"/>
                    <div>
                        <p className="font-bold text-black">Name</p>
                        <p className="text-gray-500 ">Onur Can Yöndem</p>
                    </div>
                </div>

                <div className="flex">
                    <FaMapMarkerAlt className="text-green-500 text-3xl mr-5 mt-1"/>
                    <div>
                        <p className="font-bold text-black">Adres</p>
                        <p className="text-gray-500 ">Edirne</p>
                    </div>
                </div>

                <div className="flex">
                    <GrMail className="text-green-500 text-3xl mr-5 mt-1"/>
                    <div>
                        <p className="font-bold text-black">Eposta</p>
                        <p className="text-gray-500 ">can.yondem.22@gmail.com</p>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2 lg:ml-10 lg:my-0 my-10">
                <p className="font-bold text-lg mb-4">Mesajınızı Gönderin</p>
                <form className="flex flex-col gap-4" >
                    <div>
                        <input className="border-2 border-gray-300 rounded-md p-1 pl-3 mr-5 " type="text" placeholder="Ad" />
                        <input className="border-2 border-gray-300 rounded-md p-1 pl-3" type="text" placeholder="Soyad"/>
                    </div>
                    <input className="border-2 border-gray-300 rounded-md p-1 pl-3 w-full" type="text" placeholder="Mesaj Konusu"/>
                    <textarea name="" id="" cols="30" rows="10" className="border-2 border-gray-300 rounded-md pl-3 pt-2 w-full" placeholder="Mesajınızı Yazın..."></textarea>
                </form>
                <button className="bg-green-500 border-2 border-green-500 text-white p-2 font-semibold mt-4 rounded-md hover:bg-white hover:text-green-500 transition ease-in-out duration-300">Mesaj Gönder</button>
            </div>
        </div>
    </div>
  )
}
