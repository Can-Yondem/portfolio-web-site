import Head from 'next/head'
import { useState, useEffect } from 'react';
import { FaHamburger} from 'react-icons/fa';
import {motion} from "framer-motion";
import Link from 'next/link';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

export default function HamburgerMenu() {
    const size = useWindowSize();
    const [isActive,setIsActive] = useState(false);
  return (
    <div>
      <motion.div className="md:hidden ml-16 absolute z-10 flex" drag dragConstraints={{ left: 0 ,right:size.width-160, top:0, bottom:size.height-60}} onClick={() => setIsActive(!isActive)}>
            <FaHamburger className="text-3xl mr-5"/>
            {isActive ?  
                    <ul className="flex flex-col mt-5 bg-gray-600 p-4 text-white font-bold rounded-lg text-center ">
                        <li className="p-3 border-b-2 border-gray-50">
                            <Link href="/">
                                <a>ANA SAYFA</a>
                            </Link>
                        </li>
                        <li className="p-3 border-b-2 border-gray-50">
                            <Link href="/about">
                                <a>HAKKIMDA</a>
                            </Link>
                        </li>
                        <li className="p-3 border-b-2 border-gray-50">
                            <Link href="/">
                                <a>YETENEKLERİM</a>
                            </Link>
                        </li>
                        <li className="p-3 border-b-2 border-gray-50">
                            <Link href="/">
                                <a>PROJELERİM</a>
                            </Link>
                        </li>
                        <li className="p-3">
                            <Link href="/">
                                <a>İLETİŞİM</a>
                            </Link>
                        </li>
                    </ul> : null}
        </motion.div>
    </div>
  )
}
