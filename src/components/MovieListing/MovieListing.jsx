import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieListing.module.css";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  let renderMovies = "";

  renderMovies =
    movies?.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className={styles.moviesError}>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className={styles.movieWrapper}>
      <div className={styles.movieList}>
        <h2>Movies</h2>
        <div className={styles.movieContainer}>{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
