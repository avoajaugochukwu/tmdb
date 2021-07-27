
import React, { useState, useEffect } from 'react'

import { convertStringToArray } from '../utils/helperfunctions'

import Image from 'next/image'

import ReleaseDate from './ReleaseDate'

const MovieItem = ({ movie, addToCookie, RemoveFromCookie, highlightedMovies }) => {

  const [lightBackground, setLightBackground] = useState(true)

  useEffect(() => {
    const highlightedMoviesArray = convertStringToArray(highlightedMovies)
    if (highlightedMoviesArray.includes(movie.id)) {
      highlightMovie()
    }
  });

  const highlightMovie = () => {
    setLightBackground(false)
    addToCookie(movie.id)
  }

  const RemoveMovieHighlight = () => {
    setLightBackground(true)
    RemoveFromCookie(movie.id)
  }

  return (
    <div className={lightBackground ? 'bg-white hover:bg-gray-100 my-2' : 'bg-gray-500 hover:bg-gray-500 my-2'}>
      <div
        className="flex w-full max-w-full mx-auto overflow-hidden shadow-md px-4  py-1">
        <Image
          className=" w-32 h-32 rounded pt-5 md:pt-1"
          alt="movie image"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          height="150"
          width="160"
        />

        <div className="flex items-center w-60">
          <div className="pl-3">
            <div className=" dark:text-gray-200 pl-3">

              <h3 className="font-medium pb-2">
                {movie.title}
              </h3>
              <p className="text-sm">
                {movie.vote_average}
              </p>
              <ReleaseDate date={movie.release_date} />

            </div>
          </div>
        </div>

        <div className="flex items-center ml-60">
          {
            lightBackground ?
              <span className="text-lg cursor-pointer" onClick={highlightMovie}>
                ⭐
              </span>
              :
              <span className="text-lg cursor-pointer" onClick={RemoveMovieHighlight}>
                💡
              </span>
          }

        </div>
      </div>
    </div>
  )
}

export default MovieItem