export const movieIdsInCookie = (movieId, movieIdsList) => {

  const newMovieList = movieIdsList.split(' ').map(x => parseInt(x))

  if (newMovieList.includes(movieId)) {
    
    return true
  }
  return false
}


export const convertStringToArray = (stringToConvert) => stringToConvert.split(' ').map(x => parseInt(x))