import { CookiesProvider } from 'react-cookie';

import Layout from '../components/Layouts'


import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  return (
    <CookiesProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </CookiesProvider>
  )
}

export default MyApp
