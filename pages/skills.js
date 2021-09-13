import Head from 'next/head';
import Navbar from "../components/Navbar";
import {motion,useAnimation} from "framer-motion";
import ActivityCalendar from "react-github-calendar";
import {useState,useEffect} from "react";
import request from "../utils/request";




export default function Home() {
  const [skills, setSkills] = useState([]);
  const [loading,setLoading] = useState(true);
  const controls = useAnimation()

  let img = "";


  useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
    const response = await request.getSkills;
    setSkills(response.data);
    setLoading(false);
    }
    fetchData();
  },[]);

  useEffect(() => {
    controls.start(i => ({
      x:[-1500,0],
      transition: { delay: i * 0.2 },
    }))
  },)


  return (
    <div className="">
        <Head>
            <title>Skills</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="border-b-2 shadow-lg">
            <Navbar />
        </div>
 
        <div className="flex lg:flex-row flex-col mt-20 container mx-auto ">
          <ul className="lg:w-6/12 lg:mb-0 mb-20 grid grid-cols-3 sm:px-0 px-10 gap-y-4 gap-x-5 2xl:gap-x-28 xl:gap-x-20 lg:gap-x-14 md:gap-x-8 sm:gap-x-2 2xl:gap-y-12 xl:gap-y-10 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 content-center justify-items-center">
            {skills.map((item) => {
                if(!loading) {
                  img = item.skill_img.url
                }
  
              return(
                <motion.li key={item.id} custom={item.id} animate={controls}>
                  <img src={`http://localhost:1337${img}`}/>
                </motion.li>
              )
            })}
            </ul>
          <div className="lg:w-6/12 flex flex-col lg:pl-20 gap-y-5 text-gray-500 font-normal sm:px-0 px-10">
            {skills.map((item) => {
              return(
                <div className=" w-full">
                  <div className="flex justify-between mx-3"><span>{item.skill_name}</span> <span>%{item.percent_complete}</span></div>
                    <div className="border-2 border-gray-300 rounded-2xl bg-gray-100 overflow-hidden">
                      <motion.div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-2xl w-0" animate={{width: `${item.percent_complete}%` }} transition={{ duration: 2 }}/>
                    </div>
                </div>
              )
            })}
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
