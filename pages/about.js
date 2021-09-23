import Head from 'next/head';
import Link from "next/link"
import Typical from 'react-typical';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeopleData } from "../redux/people/peopleSlice";

export default function About() {
    const lang = useSelector((state) => state.fetchData.language);
    const peopleData = useSelector((state) => state.fetchData.peopleData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeopleData(lang.lang));
    }, [dispatch, lang.lang]);

    if (!peopleData) return null;

    return (
        <div>
            <Head>
                <title>{lang.about}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="My portfolio web site" />
            </Head>

            <div className="flex container sm:mx-auto items-center  min-h-screen lg:flex-row flex-col my-3 ">
                <div className="lg:w-2/6 lg:mr-20 my-7">
                    <div className="rounded-full overflow-hidden sm:w-96 mx-auto w-80">
                        <img src={peopleData.img_2[0].url} alt="" />
                    </div>
                </div>
                <div className="w-4/6 ">
                    <Typical
                        steps={[`${peopleData.about_title}`, 3000]}
                        wrapper="b"
                        className="text-green-500 lg:text-5xl font-bold md:text-4xl text-3xl"
                    />
                    <p className="font-thin text-gray-600 lg:text-lg mt-10 text-base">
                        {peopleData.about_description}
                    </p>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-6">
                        <span className="font-bold text-black text-lg">{lang.name}: <span className="font-medium text-gray-400">{peopleData.fullname}</span></span>
                        <span className="font-bold text-black text-lg">{lang.age}: <span className="font-medium text-gray-400">{peopleData.age}</span></span>
                        <span className="font-bold text-black text-lg">{lang.email}: <span className="font-medium text-gray-400">{peopleData.email}</span></span>
                        <span className="font-bold text-black text-lg">{lang.phone}: <span className="font-medium text-gray-400">{peopleData.phone}</span></span>
                        <span className="font-bold text-black text-lg">{lang.adress}: <span className="font-medium text-gray-400">{peopleData.adress}</span></span>
                        <span className="font-bold text-black text-lg">{lang.hobby}: <span className="font-medium text-gray-400">{peopleData.hobby}</span></span>
                    </div>
                    <button className="mt-5 border-2 border-green-500 p-3 rounded-md text-white font-bold bg-green-500 hover:bg-white hover:text-green-500 transition ease-in-out duration-300">
                        <Link href="https://drive.google.com/file/d/1M7UsT-J86KVFjf5beTCx1zgx3tdG4QDk/view">
                            <a target="blank">
                                {lang.downloadcv}
                            </a>
                        </Link>
                    </button>

                </div>

            </div>
        </div>
    )
}
