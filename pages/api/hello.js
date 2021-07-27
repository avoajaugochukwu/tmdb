// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
export default async function handler(req, res) {

  // res.status(200).json({ name: 'John Doe' })

  // const { pid } = req.query
  // const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
  // res.status(200).json({ data: response.data })

  // let data = []
  // for (var page_num = 1; page_num <= 2; page_num++) {
  //   const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page_num}`)
  //   // console.log(response.data.results)
  //   data = [...response.data.results]
  //   // setTopMovies([...topMovies, response.data.results])
  // }
  return []

}


// const response = await axios.get(URL);
//   res.status(200).json({ data: response.data })



// export default async (req, res) => {
//   const url = `https://swapi.dev/api/people/1`

//   await axios
//     .get(url)
//     .then(({ data }) => {
//       res.status(200).json({ data })
//     })
//     .catch(({ err }) => {
//       res.status(400).json({ err })
//     })
// }