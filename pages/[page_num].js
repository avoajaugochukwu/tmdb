import { API_KEY } from '../utils/keys'

export default function Movies ({ movies }) {
  console.log(movies)
  return <h1>I am here</h1>
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${params.page_num}`)
  const movies = await res.json()
  
  return {
    props: {
      movies
    }
  }
}