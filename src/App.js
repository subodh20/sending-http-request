import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = () => {
    setIsLoading(true);
    fetch(
      "https://react-http-project-64aed-default-rtdb.firebaseio.com/movies.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const loadedMovies = [];
        for (let key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }
        setMovies(loadedMovies);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-project-64aed-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json()",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchApiData}>Fetch Movie</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>There is no data</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </Fragment>
  );
}

export default App;
