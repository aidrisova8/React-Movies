import { useEffect } from "react";
import styles from "./Home.module.css";
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch} from "react-redux"
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch=useDispatch();
  let key = import.meta.env.VITE_API_KEY;

  async function fetchMovies() {
    try {
      const response = await fetch(`https://www.omdbapi.com?apiKey=${key}&s=${movieText}&type=movie`);
      const data= await response.json();
      console.log(data);
      dispatch(addMovies(data))
    } catch (error) {
      console.log(error.message);
    }
   
  }

  useEffect(() => {
    fetchMovies();
  }, []);  

  return (
    <div>
      <div className={styles.bannerImage}> </div>
      <MovieListing />
    </div>
  );
}

export default Home;