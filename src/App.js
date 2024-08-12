import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import Logginn from './components/logginn/Logginn';
import Alle from './components/alle/Alle';

// kobler til endpoint for å få array med data 
// her lages det 3 bokser, en for 1 film, en for anmeldelser, og 1 for liste med filmer
function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])
// routes navigerer/kobler app komponentet til de andre, feks trailer for å kunne innhente informasjon når brukeren trykker
  return (
    
    <div className="App">
      <Header/>
      <Routes>
    
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<Logginn/>}></Route>
            <Route path="alle" element={<Alle/>}></Route>
          </Route>
      </Routes>

    </div>
    
    
  );
  
}

export default App;