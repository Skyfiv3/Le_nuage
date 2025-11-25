import express from "express";
import fetch from "node-fetch";

const app = express();
const API_KEY = "TA_CLE_TMDB";

app.get("/films", async (req, res) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr`);
  const data = await response.json();

  const films = data.results.map(film => ({
    id: film.id,
    titre: film.title,
    synopsis: film.overview,
    image: `https://image.tmdb.org/t/p/w500${film.poster_path}`,
  }));

  res.json(films);
});

app.listen(4000, () => console.log("Service Films sur http://localhost:4000"));
