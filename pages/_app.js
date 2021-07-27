import Layout from '../components/layout/Layout'

import MovieContextProvider from '../contexts/MovieContext';

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  return (
    <MovieContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MovieContextProvider>

  )
}

export default MyApp

