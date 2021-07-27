import { API_KEY } from '../../utils/keys'

import MoviesList from '../../components/movies/MoviesList'

import Link from 'next/link'

export default function Movies({ movies, page_num }) {

  const { results } = movies

  // Create links for crude pagination
  const links = []
  for (var i = 1; i <= 25; i++) {
    links.push(
      <Link href={`/movies/${i}`} key={i}>
        <a className={`ml-1 mb-2 p-1 hover:bg-gray-100 border ${page_num == i ? 'bg-green-700 text-white' : ''}`}>
          {i}
        </a>
      </Link>)
  }

  return (
    <>
      <div className="flex flex-wrap">
        {
          links
        }
      </div>

      <MoviesList movies={results} />
    </>
  )
}


export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${params.page_num}`)
  const movies = await res.json()

  return {
    props: {
      movies,
      page_num: params.page_num
    }
  }
}
