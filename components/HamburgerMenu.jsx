import { useState, useEffect, useContext } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { motion } from "framer-motion";
import Link from 'next/link';
import LangContext from '../context/LangContext';
import ReactCountryFlag from "react-country-flag"


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
  const [isActive, setIsActive] = useState(false);
  const { setLanguage, lang } = useContext(LangContext);
  return (
    <div>
      <motion.div className="md:hidden ml-16 absolute z-10 flex" drag dragConstraints={{ left: 0, right: size.width - 160, top: 0, bottom: size.height - 60 }} onClick={() => setIsActive(!isActive)}>
        <FaHamburger className="text-3xl mr-5" />
        {isActive ?
          <ul className="flex flex-col mt-5 bg-gray-600 p-4 text-white font-bold rounded-lg text-center ">
            <li className="p-3 border-b-2 border-gray-50">
              <Link href="/">
                <a>{lang.home}</a>
              </Link>
            </li>
            <li className="p-3 border-b-2 border-gray-50">
              <Link href="/about">
                <a>{lang.about}</a>
              </Link>
            </li>
            <li className="p-3 border-b-2 border-gray-50">
              <Link href="/skills">
                <a>{lang.skills}</a>
              </Link>
            </li>
            <li className="p-3 border-b-2 border-gray-50">
              <Link href="/projects">
                <a>{lang.projects}</a>
              </Link>
            </li>
            <li className="p-3 border-b-2 border-gray-50">
              <Link href="/contact">
                <a>{lang.contact}</a>
              </Link>
            </li>
            <li className="flex justify-center items-center gap-4 mt-3">
              <button onClick={() => setLanguage("en")}>
                <ReactCountryFlag countryCode="GB" svg style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                }} />
              </button>
              <button onClick={() => setLanguage("tr")}>
                <ReactCountryFlag countryCode="TR" svg style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                }} />
              </button>
            </li>
          </ul> : null}
      </motion.div>

    </div>
  )
}
