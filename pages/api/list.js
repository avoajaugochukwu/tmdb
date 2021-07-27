// pages/api/hello.js
import axios from "axios";

export default async function handler(req, res) {
  const URL = `https://api.i.require.keys/?&api_key=${process.env.SECRET_KEY}`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data })
}