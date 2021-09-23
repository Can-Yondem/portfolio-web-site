import Head from 'next/head'
import HeroSection from "../components/HeroSection"
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';


export default function Home() {
  const lang = useSelector((state) => state.fetchData.language);
  const loading = useSelector((state) => state.fetchData.isLoading);

  return (
    <div>
      <Head>
        <title>{lang.home}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My portfolio web site" />
      </Head>
      <HeroSection />
    </div>
  )
}
