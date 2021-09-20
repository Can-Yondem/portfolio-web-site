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
      </Head>
      <HeroSection />
    </div>
  )
}
