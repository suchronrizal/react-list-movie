import { useEffect, useState } from 'react';
import './App.css';
import { getListMovie, searchMovies } from '../api';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getData = async () =>{
      const response = await getListMovie();
      setMovies(response.results)
    }
    setLoading(false)
    getData()
  },[])

  const handleChange = async (e) => {
    const query = await searchMovies(e);
    setMovies(query.results)
  }

  const GetPopularMovieList = () => {
    return movies.map((val, i) =>{
      return (
        <div className="card" key={val.id}>
          <div className="card-img"><img src={`${process.env.REACT_APP_IMGURL}${val.poster_path}`} alt="" /></div>
          <h1 className="card-title">{val.title}</h1>
          <div className="card-body">{val.release_date}</div>
        </div>
      )
    })
  }

  return (
    <header className="App-header">
      <div className="wrapper-input">
        <input type="text" className="search" placeholder='Search Movies' onChange={({target}) => handleChange(target.value)} />
      </div>
      <div className="container">
        {loading ? <p>Loading...</p> : <GetPopularMovieList />}
      </div>
    </header>
  );
}

export default MoviesList;
