import 'tailwindcss/tailwind.css'
import { LangProvider } from "../context/LangContext"
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LangProvider>
  )
}

export default MyApp
