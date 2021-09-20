import Link from 'next/link';
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";
import { useContext } from 'react';
import LangContext from '../context/LangContext';
import { useRouter } from "next/router"



export default function Home({ page, textcolor }) {
    const {setLanguage, lang} = useContext(LangContext);
    const router = useRouter();

    return (
        <>
            <motion.nav className={page === "main" ? "md:flex md:justify-center py-5 absolute z-10 justify-start w-full hidden" : " md:flex md:justify-center justify-start py-5 hidden"} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1 }}>
                <div className="flex">
                    <ul className={`flex gap-x-7 font-bold ${textcolor}`}>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/">
                                <a className={router.pathname === "/" && "border-b-2 border-green-500 pb-2"}>{lang.home}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/about">
                                <a className={router.pathname === "/about" && "border-b-2 border-green-500 pb-2"}>{lang.about}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/skills">
                                <a className={router.pathname === "/skills" && "border-b-2 border-green-500 pb-2"}>{lang.skills}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/projects">
                                <a className={router.pathname === "/projects" && "border-b-2 border-green-500 pb-2"}>{lang.projects}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/contact">
                                <a className={router.pathname === "/contact" && "border-b-2 border-green-500 pb-2"}>{lang.contact}</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <select name="languages" id="languages" onChange={(e) => setLanguage(e.target.value)} className="bg-transparent text-gray-400 absolute right-56 outline-none">
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                </select>
            </motion.nav>
            <HamburgerMenu />
        </>
    )
}