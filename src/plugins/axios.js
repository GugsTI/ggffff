import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWM5ZWM2NTQzYTcyMjdmN2MzZWZjM2I2N2U4ODRmOSIsInN1YiI6IjY1MDlhYTM2ZmEyN2Y0MDEwYzRjMDJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oDOEvYTjnFFB2h_nzbUaP8inleQ0a0OWJIYVbSXWVBk`
  }
})

export default api