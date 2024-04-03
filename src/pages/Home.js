import { useState, useEffect } from "react";
import Movie from "../components/Movie";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <h1>Movie OwO!</h1>
      {isLoading ? <h2>Loading..</h2> : null}
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
      </div>
    </>
  );
}
