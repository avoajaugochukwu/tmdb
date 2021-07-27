import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


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
    <div className="bg-white dark:bg-gray-800">
      <div>
        <h1 className="text-7xl">themoviedb.org API APP</h1>
      </div>

      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-lg">
            
              <Image
                className=" w-32 h-32 rounded-sm"
                alt="movie image"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg`}
                height="400"
                width="500"
              />
            

            <Link href="/movies/1">
              <a className="inline-flex items-center justify-center px-4 py-2 my-2 font-semibold text-white bg-blue-500 rounded-sm hover:bg-blue-700">
                View top movies
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
  const movies = await res.json()

  return {
    props: {
      movies
    }
  }
}



