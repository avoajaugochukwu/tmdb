import React from 'react'

import MainBody  from '../components/MoviesList'

import { API_KEY } from '../utils/keys'


// Todo
// Use GraphQL - themoviedb doesn't support graphQL
// Write tests
// Use React Hooks
// add prototypes
// Use try catch
// Set expiry of Cookie
export default function Home({ movies }) {
  
  const { results } = movies


  return (
    <div className="">
      <MainBody movies={ results } />
    </div>
  )
}



export const getServerSideProps = async ({query}) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
  const movies = await res.json()
  
  return {
    props: {
      movies
    }
  }
}



