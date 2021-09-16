import Head from 'next/head';
import Navbar from "../components/Navbar";
import Link from "next/link";
import {useState,useEffect} from "react";
import request from "../utils/request";
import {motion,useAnimation} from "framer-motion";

export default function Home() {
    const [data, setData] = useState([]);
    const controls = useAnimation();

    useEffect(async () => {
        const fetchData = async () => {
            const response = await request.getProjects;
            setData(response.data);
        }
        fetchData();
    },[]);

    useEffect(() => {
        controls.start(i => ({
          x:[-3000,0],
          transition: { delay: i * 0.2 },
        }))
      },)

      if (!data) return null;

  return (
    <div>
        <Head>
            <title>Projects</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <div className="container mx-auto min-h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center sm:gap-7 gap-14">
            {data.map((item) => {
                return(
                    <motion.div className=" p-4 mx-2 my-2 rounded-md border-2 shadow-md " custom={item.id} animate={controls}>
                        <img src={`https://limitless-castle-16392.herokuapp.com${item.img_1[0].formats.url}`} alt="" className="rounded-md w-auto sm:h-3/6 h-2/6 object-fill mx-auto overflow-hidden"/>
                        <div className="text-white flex flex-col w-full text-center p-3 gap-y-4 rounded-md h-auto">
                            <p className="font-bold text-xl text-black border-b-2 border-gray-500 rounded-xl">{item.title}</p>
                            <p className="text-gray-600 text-base ">{item.description}</p>
                            <div className="mb-2">
                                <Link href={item.link2} >
                                    <a target="blank" className="bg-green-400 border-2 border-green-400 sm:mr-5 mr-2 rounded-md sm:p-2 p-1 font-bold sm:text-base text-sm hover:bg-white hover:text-green-500 transition ease-in-out duration-300">
                                        View Project
                                    </a>
                                </Link>
                                <Link href={item.link1} >
                                    <a target="blank" className="bg-green-400 border-2 border-green-400 rounded-md sm:p-2 p-1 font-bold sm:text-base text-sm hover:bg-white hover:text-green-500 transition ease-in-out duration-300">
                                        Know More
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </motion.div>
                )
            })}
            
        </div>
    </div>
  )
}
