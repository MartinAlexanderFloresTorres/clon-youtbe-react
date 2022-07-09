import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Movie from "./Movie";
function Resultados() {
  const [movies, setMovies] = useState([]);
  const [resultados, setResultados] = useState(20);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const API_KEY = "AIzaSyCATEYlOy9S409UZl2Dv9jHzm6nzSao91U";
        const API_VIDEO = "https://www.googleapis.com/youtube/v3/videos?";
        const respuesta = await fetch(
          API_VIDEO +
            new URLSearchParams({
              key: API_KEY,
              part: "snippet",
              chart: "mostPopular",
              maxResults: resultados,
              regionCode: "ES",
            })
        );
        const data = await respuesta.json();
        setMovies(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    consultarApi();
  }, [resultados]);

  const Mostrar = () => {
    setResultados(resultados + 10);
  };
  return (
    <main className="contenedor">
      <section className="videos">
        {movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        ) : (
          <Spinner />
        )}
      </section>
      <div className="botones">
        {resultados < 50 && <button onClick={Mostrar}>Mostrar Mas</button>}
      </div>
    </main>
  );
}

export default Resultados;
