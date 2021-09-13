import Head from 'next/head'
import Navbar from "../components/Navbar"
import Link from "next/link"
import {useState,useEffect} from "react";
import request from "../utils/request"

export default function Home() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

    let img = "";

    useEffect(async () => {
        const fetchData = async () => {
            setLoading(true);
            const response = await request.getProjects;
            setData(response.data);
            setLoading(false);
        }
        fetchData();
    },[]);

  return (
    <div>
        <Head>
            <title>Projects</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <div className="container mx-auto min-h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-4">
            {data.map((item) => {
                if(!loading){
                    img = item.img_1.url;
                }

                return(
                    <div className="border-2 p-5 rounded-lg border-black mx-2 my-2">
                    <img src={`http://localhost:1337${img}`} alt="" className="rounded-md w-auto h-3/6 object-fill mx-auto overflow-hidden"/>
                    <div className="text-white flex flex-col w-full h-auto text-center p-3 gap-y-4">
                        <p className="font-bold text-xl text-black">{item.title}</p>
                        <p className="text-gray-600">{item.description}</p>
                        <div>
                            <Link href={item.link2} >
                                <a target="blank" className="bg-green-400 mr-5 rounded-md p-2 font-bold">
                                    View Project
                                </a>
                            </Link>
                            <Link href={item.link1} >
                                <a target="blank" className="bg-green-400 rounded-md p-2 font-bold">
                                    Know More
                                </a>
                            </Link>

                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>
    </div>
  )
}
