import Head from 'next/head'
import Link from 'next/link'

export default function Home({page,textcolor}) {
  return (
    <nav className={page === "main" ? "container flex justify-between py-5 mx-auto absolute z-10 ml-40" : "container flex justify-between py-5 mx-auto"}>
        <div>LOGO</div>
        <div>
            <ul className={`flex gap-x-7 font-bold ${textcolor}`}>
                <li className="hover:text-blue-400 transition ease-in-out duration-300">
                    <Link href="/">
                        <a>ANA SAYFA</a>
                    </Link>
                </li>
                <li className="hover:text-blue-400 transition ease-in-out duration-300">
                    <Link href="/">
                        <a>HAKKIMDA</a>
                    </Link>
                </li>
                <li className="hover:text-blue-400 transition ease-in-out duration-300">
                    <Link href="/">
                        <a>PROJELERİM</a>
                    </Link>
                </li>
                <li className="hover:text-blue-400 transition ease-in-out duration-300">
                    <Link href="/">
                        <a>İLETİŞİM</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}