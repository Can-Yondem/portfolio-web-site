import Head from 'next/head';
import Navbar from "../components/Navbar"
import Image from 'next/image'
import Link from "next/link"
import Typical from 'react-typical';
import {useState,useEffect} from "react";
import request from "../utils/request"

export default function About() {
    const [data, setData] = useState({});
    const [loading,setLoading] = useState(true);

    let img = "";


    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        const response = await request.getPeople;
        setData(response.data[0]);
        setLoading(false);
        }
        fetchData();
    },[]);

    if(!loading) {
        img = data.img_2.url
      }

  return (
    <div className="">
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="border-b-2 shadow-lg">
            <Navbar />
        </div>
                
        <div className="flex container mx-auto items-center content-center min-h-screen lg:flex-row flex-col ">
            <div className="lg:w-2/6 lg:mr-20 my-10">
                <div className="rounded-full overflow-hidden sm:w-96 mx-auto w-80">
                    <img src={`http://localhost:1337${img}`} alt="" />
                </div>
            </div>
            <div className="w-4/6 ">
                <Typical
                  steps={[`${data.about_title}`, 3000]}
                  wrapper="b"
                  className="text-green-500 lg:text-5xl font-bold md:text-4xl text-3xl"
                />
                <p className="font-thin text-gray-600 lg:text-lg mt-10 text-base">
                    {data.about_description}
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-6">
                    <span className="font-bold text-black text-lg">Name: <span className="font-medium text-gray-400">{data.name}</span></span>
                    <span className="font-bold text-black text-lg">Age: <span className="font-medium text-gray-400">{data.age}</span></span>
                    <span className="font-bold text-black text-lg">Email: <span className="font-medium text-gray-400">{data.email}</span></span>
                    <span className="font-bold text-black text-lg">Phone: <span className="font-medium text-gray-400">{data.phone}</span></span>
                    <span className="font-bold text-black text-lg">Adress: <span className="font-medium text-gray-400">{data.adress}</span></span>
                    <span className="font-bold text-black text-lg">Hobby: <span className="font-medium text-gray-400">{data.hobby}</span></span>
                </div>
                <button className="mt-5 border-2 border-green-500 p-3 rounded-md text-white font-bold bg-green-500 hover:bg-white hover:text-green-500 transition ease-in-out duration-300">
                    <Link href="https://drive.google.com/file/d/1M7UsT-J86KVFjf5beTCx1zgx3tdG4QDk/view">
                        <a target="blank">
                            Download CV
                        </a>
                    </Link>
                </button>

            </div>

        </div>
    </div>
  )
}
