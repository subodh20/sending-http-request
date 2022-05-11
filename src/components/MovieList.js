import Movies from "./Movies";
import classes from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={classes["movies - list"]}>
      {movies.map((movies) => (
        <Movies
          key={movies.id}
          title={movies.title}
          releaseDate={movies.releaseDate}
          openingText={movies.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
