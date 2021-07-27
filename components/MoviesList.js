
import MoviesItem from './MovieItem'

import { useCookies } from 'react-cookie';
import { useState } from 'react';

import { movieIdsInCookie } from '../utils/helperfunctions'; //Rename function

const MoviesList = ({ movies }) => {

  const [ids, setIds] = useState([])
  const [cookies, setCookie] = useCookies(['highlightedMovies']);
  // setCookie('highlightedMovies', '', { path: '/' });



  const addToCookie = (movieId) => {
    

    if (cookies.highlightedMovies === '') {
      setCookie('highlightedMovies', movieId, { path: '/' });
      return
    }
    
    if (!movieIdsInCookie(movieId, cookies.highlightedMovies)) {
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
    if (movieIdsInCookie(movieId, cookies.highlightedMovies)) {
      const movieIdsList = cookies.highlightedMovies.split(' ').map(x => parseInt(x))
      let filteredMovieIdsList = movieIdsList.filter((id) => id !== movieId)
      setCookie('highlightedMovies', filteredMovieIdsList.toString(), { path: '/' });
    } else {
      console.log("Movie not found")
    }
  }



  return (
    <div>
      {
        movies ?

          movies.map((movie) => (
            <MoviesItem 
              key={movie.id} 
              movie={movie} 
              addToCookie={addToCookie} 
              RemoveFromCookie={RemoveFromCookie} 
              highlightedMovies={cookies.highlightedMovies}
             />
          ))
          :
          '...Loading'
      }
    </div>
  )
}



export default MoviesList