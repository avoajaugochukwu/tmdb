
import MoviesItem from './MovieItem'
import ReleaseDate from './ReleaseDate'


const MoviesList = ({ movies }) => {



  console.log(movies)

  return (
    <div>
      {
        movies ?

          movies.map((movie) => (
            <MoviesItem key={movie.id} movie={movie} />
          ))
          :
          '...Loading'

      }
    </div>
  )
}



export default MoviesList