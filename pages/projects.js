import Head from 'next/head';
import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectsData } from "../redux/people/peopleSlice";

export default function Home() {
    const controls = useAnimation();
    const projectData = useSelector((state) => state.fetchData.projectsData);
    const lang = useSelector((state) => state.fetchData.language);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjectsData(lang.lang));
    }, [dispatch, lang.lang]);

    useEffect(() => {
        controls.start(i => ({
            x: [-3000, 0],
            transition: { delay: i * 0.2 },
        }))
    });

    if (!projectData) return null;




    return (
        <div>
            <Head>
                <title>{lang.projects}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="My portfolio web site" />
            </Head>


            <div className="container mx-auto min-h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center sm:gap-7 gap-14">
                {projectData.map((item, index) => {
                    return (
                        <motion.div className=" p-4 mx-2 my-2 rounded-md border-2 shadow-md " custom={index} animate={controls}>
                            <img src={item.img_1[0].url} alt="" className="rounded-md w-auto sm:h-3/6 h-2/6 object-fill mx-auto overflow-hidden" />
                            <div className="text-white flex flex-col w-full text-center p-3 gap-y-4 rounded-md h-auto">
                                <p className="font-bold text-xl text-black border-b-2 border-gray-500 rounded-xl">{item.title}</p>
                                <p className="text-gray-600 text-base ">{item.description}</p>
                                <div className="mb-2">
                                    <Link href={item.link2} >
                                        <a target="blank" className="bg-green-400 border-2 border-green-400 sm:mr-5 mr-2 rounded-md sm:p-2 p-1 font-bold sm:text-base text-sm hover:bg-white hover:text-green-500 transition ease-in-out duration-300">
                                            {lang.viewproject}
                                        </a>
                                    </Link>
                                    <Link href={item.link1} >
                                        <a target="blank" className="bg-green-400 border-2 border-green-400 rounded-md sm:p-2 p-1 font-bold sm:text-base text-sm hover:bg-white hover:text-green-500 transition ease-in-out duration-300">
                                            {lang.knowmore}
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
