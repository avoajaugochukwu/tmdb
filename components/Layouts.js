import Head from 'next/head'


const Layout = ({ children }) => {
  return (
    <div className="container px-80 mx-auto my-24">
      <Head>
        <title>TMDB APP</title>
        <meta name="description" content="TMDB APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        { children }
      </main>

      <footer className="text">
        Built with ❤️
      </footer>

    </div>
  )
}


export default Layout