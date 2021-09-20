import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Typical, { type } from 'react-typical';
import HerosectionPhoto from "../assests/img/herosection.jpg";
import { SiInstagram } from 'react-icons/si';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useContext } from "react";
import React from "react";
import LangContext from '../context/LangContext';

export default function HeroSection() {
  const {peopleData} = useContext(LangContext);

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -300 },
  }

  return (
    <section >
      <div className="w-full">
        <Image src={HerosectionPhoto} alt="herosection photo" layout="fill" quality="100" objectFit="cover" />
        <div className="w-full min-h-full absolute bg-black top-0 bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <motion.div className="border-4 rounded-full w-48 h-48 mx-auto" animate={{ x: 0 }} initial={{ x: 900 }}>
              <img src={peopleData.img_1[0].url} alt="" className="rounded-full w-48" />
            </motion.div>
            <motion.p className="font-bold sm:text-5xl text-3xl text-white mt-4" animate={{ x: 0 }} initial={{ x: -900 }}>{peopleData.fullname}</motion.p>
            <motion.p className="text-xl font-thin text-white flex justify-center gap-x-2 mt-2 mb-6" animate={{ x: 0 }} initial={{ x: -900 }}>
              I'm a
              <Typical
                steps={[`${peopleData.work} 💻`, 2000, "open sourcer ✔", 2000]}
                wrapper="b"
                loop={Infinity}
                className="text-green-500"
              />
            </motion.p>
            <motion.ul className="flex gap-4 mt-2 text-white justify-center" animate="visible" initial="hidden" variants={list}>
              <motion.li className="border-2 border-gray-100 rounded-full p-2" whileHover={{ scale: 1.2, rotateZ: 360, borderColor: "#c70e5b" }} variants={item}>
                <Link href="https://www.instagram.com/onurcn22/">
                  <a target="blank"><SiInstagram className="text-2xl" /></a>
                </Link>
              </motion.li>
              <motion.li className="border-2 border-gray-100 rounded-full p-2" whileHover={{ scale: 1.2, rotateZ: 360, borderColor: "#454344" }} variants={item}>
                <Link href="https://github.com/Can-Yondem">
                  <a target="blank"><GoMarkGithub className="text-2xl" /></a>
                </Link>
              </motion.li>
              <motion.li className="border-2 border-gray-100 rounded-full p-2" whileHover={{ scale: 1.2, rotateZ: 360, borderColor: "#2058FF" }} variants={item}>
                <Link href="https://www.linkedin.com/in/onur-y%C3%B6ndem-9107121a0/">
                  <a target="blank"><FaLinkedinIn className="text-2xl" /></a>
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </div >
      </div>
    </section>
  )
}
