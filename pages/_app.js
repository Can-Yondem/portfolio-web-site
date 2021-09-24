import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { NextIntlProvider } from 'next-intl';


function MyApp({ Component, pageProps }) {

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </NextIntlProvider>
  )
}

export default MyApp
