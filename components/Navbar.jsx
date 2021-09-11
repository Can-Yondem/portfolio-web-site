import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <nav className="container flex justify-between py-5 mx-auto absolute z-10 ml-40">
        <div>LOGO</div>
        <div>
            <ul className="flex gap-x-7 font-bold text-white ">
                <li>
                    <Link href="/">
                        <a>ANA SAYFA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>HAKKIMDA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>PROJELERİM</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>İLETİŞİM</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}