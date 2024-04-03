import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovieDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <div>{movieDetail.title}</div>
    </>
  );
}
