import Head from 'next/head'
import HeroSection from "../components/HeroSection"
import {useContext} from "react";
import LangContext from '../context/LangContext';

export default function Home() {
  const {lang} = useContext(LangContext);
  return (
    <div>
      <Head>
        <title>{lang.home}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="My portfolio web site"/>
      </Head>
      <HeroSection />
    </div>
  )
}
