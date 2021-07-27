import { useEffect, useState, useContext } from 'react'
import PropTypes from "prop-types";

import { MovieContext } from '../../contexts/MovieContext'
import MoviesItem from './MovieItem'

const MoviesList = ({ movies }) => {
  const { addMovie, removeMovie } = useContext(MovieContext)

  const [moviesList, setMoviesList] = useState()
  const [ascDesc, setAscDesc] = useState(true)

  useEffect(() => {
    if (ascDesc == true) {
      setMoviesList(movies.sort((a, b) => a.title > b.title ? 1 : -1))
    } else {
      setMoviesList(movies.sort((a, b) => b.title > a.title ? 1 : -1))
    }
  }, [ascDesc, movies])

  const handleSort = () => {
    setAscDesc(!ascDesc)
  }

  const addToHighlightList = (movieId) => {
    // dispatch({type: 'ADD_MOVIE', movieId })
    addMovie(movieId)
  }

  const removeFromHighlightList = (movieId) => {
    // dispatch({ type: 'REMOVE_MOVIE', movieId})
    removeMovie(movieId)
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
                addToHighlightList={addToHighlightList}
                removeFromHighlightList={removeFromHighlightList}
              />
            ))
          )
          :
          '...Loading'
      }
    </div>
  )
}


MoviesList.propTypes = {
  movies: PropTypes.array
}


export default MoviesList

