import Head from 'next/head';
import Navbar from "../components/Navbar";
import Image from 'next/image';
import JS_logo from "../assests/img/js_logo.png";
import React_logo from "../assests/img/react_logo.png";
import HTML_logo from "../assests/img/html_logo.png";
import CSS_logo from "../assests/img/css_logo.jpg";
import SASS_logo from "../assests/img/sass_logo.png";
import Git_logo from "../assests/img/git_logo.png";
import {motion} from "framer-motion";
import ActivityCalendar from "react-github-calendar"




export default function Home() {

  return (
    <div className="">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="border-b-2 shadow-lg">
            <Navbar />
        </div>
 
        <div className="flex lg:flex-row flex-col mt-20 container mx-auto ">
          <div className="lg:w-6/12 lg:mb-0 mb-20 grid grid-cols-3 sm:px-0 px-10 gap-y-4 gap-x-5 2xl:gap-x-28 xl:gap-x-20 lg:gap-x-14 md:gap-x-8 sm:gap-x-2 2xl:gap-y-12 xl:gap-y-10 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 content-center justify-items-center">
              <div className="cursor-pointer">
                <Image src={JS_logo} className="rounded-full"/>
              </div>
              <div>
                <Image src={React_logo} className=""/>
              </div>
              <div>
                <Image src={HTML_logo} className=""/>
              </div>
              <div>
                <Image src={CSS_logo} className="" />
              </div>
              <div>
                <Image src={SASS_logo} className=""/>
              </div>
              <div>
                <Image src={Git_logo} className=""/>
              </div>
          </div>
          <div className="lg:w-6/12 flex flex-col lg:pl-20 gap-y-5 text-gray-500 font-normal sm:px-0 px-10">
            <div className=" w-full">
              <div className="flex justify-between mx-3"><span>Javascript</span> <span>%60</span></div>
              <div className="border-2 border-gray-300 rounded-2xl bg-gray-100 overflow-hidden">
                  <motion.div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-2xl w-0" animate={{width: 300 }} transition={{ duration: 1.5 }}>
                  </motion.div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between mx-3"><span>React</span> <span>%80</span></div>
              <div className="border-2 border-gray-300 rounded-2xl bg-gray-100 overflow-hidden">
                  <motion.div className="h-4 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500" animate={{width: 420 }} transition={{ duration: 2 }} initial={{width:0}}>
                  </motion.div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between mx-3"><span>HTML</span> <span>%90</span></div>
              <div className="border-2  border-gray-300 rounded-2xl bg-gray-100 overflow-hidden">
                <motion.div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-2xl w-0" animate={{width: 480 }} transition={{ duration: 1.7 }}>
                </motion.div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between mx-3"><span>CSS</span> <span>%85</span></div>
              <div className="border-2  border-gray-300 rounded-2xl bg-gray-100 overflow-hidden">
                  <motion.div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-2xl w-0" animate={{width: 460 }} transition={{ duration: 2.3 }}>
                  </motion.div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between mx-3"><span>SASS</span> <span>%85</span></div>
              <div className="border-2  border-gray-300 rounded-2xl bg-gray-100 overflow-hidden">
                  <motion.div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-2xl w-0" animate={{width: 460 }} transition={{ duration: 1 }}>
                  </motion.div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between mx-3"><span>GIT</span> <span>%70</span></div>
              <div className="border-2  border-gray-300 rounded-2xl bg-gray-100 overflow-hidden">
                  <motion.div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-2xl w-0" animate={{width: 370 }} transition={{ duration: 1.2 }}>
                  </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <ActivityCalendar  username="Can-Yondem" year={new Date().getFullYear()} blockMargin={5} blockRadius={7} blockSize={14} 
          theme={{
            level0: '#F0F0F0',
            level1: '#C4EDDE',
            level2: '#7AC7C4',
            level3: '#F73859',
            level4: '#384259'
          }}   
          labels={{
            legend: {
              less: 'Less',
              more: 'More'
            }}}/>
        </div>
                

    </div>
  )
}
