import Link from 'next/link';
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";
import { useRouter } from "next/router"
import { useTranslations } from "next-intl"
import ReactCountryFlag from "react-country-flag"


export default function Home({ page, textcolor }) {
    const router = useRouter();
    const language = router.locale;
    const t = useTranslations("navbar");

    const changeLanguage = (language) => {
        router.push(`${language}${router.route}`);
    }

    return (
        <>
            <motion.nav className={page === "main" ? "md:flex md:justify-center py-5 absolute z-10 justify-start w-full hidden" : " md:flex md:justify-center justify-start py-5 hidden"} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1 }}>
                <div className="flex">
                    <ul className={`flex gap-x-7 font-bold items-center ${textcolor} `}>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/">
                                <a className={router.pathname === "/" && "border-b-2 border-green-500 pb-2"}>{t("home")}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/about">
                                <a className={router.pathname === "/about" && "border-b-2 border-green-500 pb-2"}>{t("about")}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/skills">
                                <a className={router.pathname === "/skills" && "border-b-2 border-green-500 pb-2"}>{t("skills")}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/projects">
                                <a className={router.pathname === "/projects" && "border-b-2 border-green-500 pb-2"}>{t("projects")}</a>
                            </Link>
                        </li>
                        <li className="hover:text-green-400 transition ease-in-out duration-300 md:block hidden">
                            <Link href="/contact">
                                <a className={router.pathname === "/contact" && "border-b-2 border-green-500 pb-2"}>{t("contact")}</a>
                            </Link>
                        </li>
                        <li className="flex gap-4">
                            <button onClick={() => changeLanguage("en")} className={language === "en" && "border-b-2 border-green-500 pb-2 px-2"}>
                                <ReactCountryFlag countryCode="GB" svg style={{
                                    fontSize: '2em',
                                    lineHeight: '2em',
                                }} />
                            </button>
                            <button onClick={() => changeLanguage("tr")} className={language === "tr" && "border-b-2 border-green-500 pb-2 px-2"}>
                                <ReactCountryFlag countryCode="TR" svg style={{
                                    fontSize: '2em',
                                    lineHeight: '2em',
                                }} />
                            </button>
                        </li>
                    </ul>
                </div>

            </motion.nav>
            <HamburgerMenu />
        </>
    )
}

export function getProps({locale}) {
    return {
      props: {
        messages: require(`../lang/${locale}.json`),
      }
    };
  } 
