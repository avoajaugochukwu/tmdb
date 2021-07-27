import Image from 'next/image'


const MainBody = ({ movies }) => {

  console.log(movies)

  return (
    <div>
      {
        movies ?

          movies.map((movie) => (
            <div key={movie.id}>
              <div
                className="flex w-full max-w-full mx-auto overflow-hidden 
                            hover:bg-gray-100
                             shadow-md px-4  py-1">
                <Image
                  className=" w-32 h-32 rounded pt-5 md:pt-1"
                  alt="movie image"
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} 
                  height="150"
                  width="160"
                  />

                <div className="flex items-center">
                  <div className="pl-3">
                    <div className=" dark:text-gray-200">
                      <h3 className="font-medium pb-2 ">{movie.title}</h3>
                      {movie.vote_average}
                      {movie.release_date}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          :
          '...Loading'

      }
    </div>
  )
}



export default MainBody