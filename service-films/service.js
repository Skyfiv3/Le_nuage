import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/films", async (req, res) => {
  const response = await fetch(`https://j55wpg0mc7.execute-api.eu-west-2.amazonaws.com/default/Get_Movies`);
  const data = await response.json();

  const films = data.results.map(film => ({
    id: film.id,
    name: film.name,
    description: film.description,
    year: film.year,
  }));

  res.json(films);
});

app.listen(4000, () => console.log("Service Films sur http://localhost:4000"));
