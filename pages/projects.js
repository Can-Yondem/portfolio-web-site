import Head from 'next/head'
import Navbar from "../components/Navbar"
import Image from "next/image"
import Project_image from "../assests/img/project-1.jpg";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <div className="container mx-auto min-h-screen grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 content-center gap-4 ">
            <motion.div className=" ">
                <Image src={Project_image}/>
            </motion.div>
            <motion.div className=" " >
                <Image src={Project_image}/>
            </motion.div>
            <motion.div className=" " >
                <Image src={Project_image}/>
            </motion.div>
            <motion.div className=" " >
                <Image src={Project_image}/>
            </motion.div>
            <motion.div className=" " >
                <Image src={Project_image}/>
            </motion.div>
            <motion.div className=" " >
                <Image src={Project_image}/>
            </motion.div>
        </div>
    </div>
  )
}
