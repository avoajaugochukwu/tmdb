import Head from 'next/head'

import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>TMDB APP</title>
        <meta name="description" content="TMDB APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container md:px-80 px-50 mx-auto md:my-10 my-6">
        {children}
      </main>

      <footer className=" text-center mb-2">
        Built with ❤️
      </footer>

    </div>
  )
}


export default Layout