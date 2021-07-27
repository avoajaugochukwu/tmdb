import React, { useState, useEffect, useContext } from 'react'
import PropTypes from "prop-types";

import { MovieContext } from '../../contexts/MovieContext'
import Image from 'next/image'

import ReleaseDate from '../ReleaseDate'

const MovieItem = ({ movie, addToHighlightList, removeFromHighlightList }) => {

  const { highlightedMovies } = useContext(MovieContext)

  const [lightBackground, setLightBackground] = useState(true) // for toggling record background before and after it is highlighted

  useEffect(() => {
    // check if movie is in localStorage so that it will be highlighted
    if (highlightedMovies.includes(movie.id)) {
      highlight()
    }
  });


  const highlight = () => {
    setLightBackground(false)
    addToHighlightList(movie.id)
  }

  const removeHighlight = () => {
    setLightBackground(true)
    removeFromHighlightList(movie.id)
  }

  return (
    <div className={lightBackground ? 'bg-white hover:bg-gray-100 m-2' : 'bg-gray-500 hover:bg-gray-500 m-2'}>
      <div
        className="flex w-full max-w-full mx-auto overflow-hidden shadow-md relative px-4  py-1">

        <Image
          className=" w-32 h-32 rounded pt-5 md:pt-1 flex-auto"
          alt="movie image"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          height="150"
          width="160"
        />

        <div className="flex items-center flex-auto">
          <div className="pl-3">
            <div className=" dark:text-gray-200 pl-3">

              <h3 className="font-medium text-lg pb-2">
                {movie.title}
              </h3>
              <p className="text-sm">
                Current rating:&nbsp; <span className="font-semibold">{movie.vote_average}</span>
              </p>
              <ReleaseDate date={movie.release_date} />

            </div>
          </div>
        </div>

        <div className="flex items-center flex-auto absolute bottom-16 md:right-14 right-6">
          {
            lightBackground ?
              <span className="text-lg cursor-pointer" onClick={highlight}>
                ⭐
              </span>
              :
              <span className="text-lg cursor-pointer" onClick={removeHighlight}>
                💡
              </span>
          }

        </div>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object, 
  addToHighlightList: PropTypes.func,
  removeFromHighlightList: PropTypes.func
}

export default MovieItem