import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Typical from 'react-typical';
import HerosectionPhoto from "../assests/img/herosection.jpg";
import Avatar from "../assests/img/avatar.jpg";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { SiPinterest } from 'react-icons/si';

export default function Home() {
  return (
    <section >
      <div className="w-full h-auto">
        <Image src={HerosectionPhoto} alt="herosection photo" layout="fill" quality="100" objectFit="cover" />
        <div className="w-full min-h-screen absolute bg-black top-0 bg-opacity-50 flex items-center justify-center text-center">
            <div>
                <div className="border-4 rounded-full w-48 h-48 mx-auto ">
                  <Image src={Avatar} className="rounded-full" width="208" height="208" />
                </div>
                <p className="font-bold text-5xl text-white mt-4">Onur Can Yöndem</p>
                <p className="text-xl font-thin text-white flex justify-center gap-x-2 mt-2 mb-6">
                  I'm a
                  <Typical
                  steps={[' front-end developer.', 1000,' graphics designer.', 1000,' lorem ipsum', 1000]}
                  loop={Infinity}
                  wrapper="b"
                  />
                </p>
                <ul className="flex gap-4 mt-2 text-white justify-center">
                  <li className="border-2 border-gray-100 rounded-full p-2">
                    <Link href="/">
                      <a><FaFacebookF /></a>
                    </Link>
                  </li>
                  <li className="border-2 border-gray-100 rounded-full p-2">
                    <Link href="/">
                      <a><AiOutlineTwitter /></a>
                    </Link>
                  </li>
                  <li className="border-2 border-gray-100 rounded-full p-2">
                    <Link href="/">
                      <a><FaLinkedinIn /></a>
                    </Link>
                  </li>
                  <li className="border-2 border-gray-100 rounded-full p-2">
                    <Link href="/">
                      <a><AiOutlineGoogle /></a>
                    </Link>
                  </li>
                  <li className="border-2 border-gray-100 rounded-full p-2">
                    <Link href="/">
                      <a><SiPinterest /></a>
                    </Link>
                  </li>
                </ul>
            </div>
        </div >
      </div>
    </section>
  )
}
