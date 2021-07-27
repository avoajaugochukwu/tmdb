const SECRET_KEY = process.env.NEXT_PUBLIC_API_KEY
import axios from 'axios'
export default  function handler(req, res) {
  // const { pid } = req.query
  const response =  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${id}`)
  return response.data.results
}