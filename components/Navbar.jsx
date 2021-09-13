import Link from 'next/link';
import HamburgerMenu from "./HamburgerMenu";
import {motion} from "framer-motion";


export default function Home({page,textcolor}) {

  return (
    <>
        <motion.nav className={page === "main" ? "md:flex md:justify-center py-5 absolute z-10 justify-start w-full hidden" : "container md:flex md:justify-center justify-start py-5 mx-auto hidden"} animate={{opacity: 1, y: 0}} initial={{opacity: 0, y: -50}} transition={{duration: 1}}>
            <div>
                <ul className={`flex gap-x-7 font-bold ${textcolor}`}>
                    <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                        <Link href="/about">
                            <a>ABOUT</a>
                        </Link>
                    </li>
                    <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                        <Link href="skills">
                            <a>SKİLLS</a>
                        </Link>
                    </li>
                    <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                        <Link href="projects">
                            <a>PROJECTS</a>
                        </Link>
                    </li>
                    <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                        <Link href="contact">
                            <a>CONTACT</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
        <HamburgerMenu />
    </>
  )
}