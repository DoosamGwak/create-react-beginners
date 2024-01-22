import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movie.map((detail) => (
            <Movie
              key={detail.id}
              id={detail.id}
              coverImg={detail.medium_cover_image}
              title={detail.title}
              summary={detail.summary}
              genres={detail.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
