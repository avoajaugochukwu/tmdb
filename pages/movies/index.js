import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import MainBody  from '../../components/MainBody'

import styles from '../../styles/Home.module.css'

import { API_KEY } from '../../utils/keys'


// Todo
// Use GraphQL - themoviedb doesn't support graphQL
// Write tests
// Use React Hooks

export default function Home({ top_movie_list }) {
  console.log(top_movie_list)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-red-900">
        <MainBody />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}



export const getServerSideProps = async ({query}) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=50`)
  const top_movie_list = await res.json()
  
  return {
    props: {
      top_movie_list    
    }
  }
}


