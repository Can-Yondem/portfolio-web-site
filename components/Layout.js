import React from 'react'
import Navbar from "../components/Navbar"
import { useRouter } from "next/router"

const Layout = ({children}) => {
    //"border-b-2 shadow-lg"
    const router = useRouter();
    
    return (
        <div>
            <Navbar page={router.pathname === "/" && "main"} textcolor={router.pathname === "/" && "text-white"}/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
