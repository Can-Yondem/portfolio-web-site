import Head from 'next/head'
import HeroSection from "../components/HeroSection"
import { useTranslations } from "next-intl"


export default function Home() {
  const tTitle = useTranslations("title");

  return (
    <div>
      <Head>
        <title>{tTitle("home")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My portfolio web site" />
      </Head>
      <HeroSection />
    </div>
  )
}

export function getStaticProps({locale}) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    }
  };
} 