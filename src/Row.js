import movieTrailer from 'movie-trailer'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from './axios'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = (props) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [props.fetchUrl])
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {/* row poster */}
        {movies.map((movie, index) => (
          <img
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            onClick={() => handleClick(movie)}
            alt={movie.name}
            key={movie.id}
            className={`row_poster ${props.isLargeRow && 'row_posterLarge'}`}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  )
}

export default Row
