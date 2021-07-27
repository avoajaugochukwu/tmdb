
import MoviesItem from './MovieItem'

import { useCookies } from 'react-cookie'

import { isMovieIdsInCookie } from '../utils/helperfunctions'
import { useEffect, useState } from 'react'

const MoviesList = ({ movies }) => {
  const [moviesList, setMoviesList] = useState()
  const [ascDesc, setAscDesc] = useState(true)

  const [cookies, setCookie] = useCookies(['highlightedMovies']);
  // setCookie('highlightedMovies', '', { path: '/' });

  useEffect(() => {
    
    if (ascDesc == true) {
        setMoviesList(movies.sort((a,b) => a.title > b.title ? 1 : -1))
    } else {
        setMoviesList(movies.sort((a,b) => b.title > a.title ? 1 : -1))
    }

  }, [ascDesc, movies])

  const addToCookie = (movieId) => {
    
    if (cookies.highlightedMovies === '') {
      setCookie('highlightedMovies', movieId, { path: '/' });
      return
    }
    
    if (!isMovieIdsInCookie(movieId, cookies.highlightedMovies)) {
      let newMovieList = cookies.highlightedMovies
      if (newMovieList === '') {
        newMovieList = cookies.highlightedMovies + movieId
      } else {
        newMovieList = cookies.highlightedMovies + ` ${movieId}`
      }
      setCookie('highlightedMovies', newMovieList, { path: '/' });
    }
  }

  const RemoveFromCookie = (movieId) => {
    if (isMovieIdsInCookie(movieId, cookies.highlightedMovies)) {
      const movieIdsList = cookies.highlightedMovies.split(' ').map(x => parseInt(x))
      let filteredMovieIdsList = movieIdsList.filter((id) => id !== movieId)
      setCookie('highlightedMovies', filteredMovieIdsList.toString(), { path: '/' });
    } else {
      console.log("Movie not found")
    }
  }

  const handleSort = () => {
    setAscDesc(!ascDesc)
  }

  return (
    <div>
      <button 
        onClick={handleSort}
        className="inline-flex items-center justify-center px-4 py-2 my-2 font-semibold text-white bg-yellow-500 rounded-sm hover:bg-yellow-700"
      >
          Sort
      </button>
      {
        moviesList ?

          (
            moviesList.map((movie) => (
            <MoviesItem 
              key={movie.id} 
              movie={movie} 
              addToCookie={addToCookie} 
              RemoveFromCookie={RemoveFromCookie} 
              highlightedMovies={cookies.highlightedMovies}
             />
          ))
          )
          :
          '...Loading'
      }
    </div>
  )
}


export default MoviesList