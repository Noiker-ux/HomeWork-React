import { useLoaderData } from "react-router-dom";
import FilmsList from "../../components/FilmsList/FilmsList";
import Search from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { IFilm } from "../../assets/InitData";
import axios from "axios";
import { API_KEY, PREFIX } from "../../helpers/API";

export default function MainPage() {
  const data = useLoaderData();

  const [activeData, setActiveData] = useState<any>(data);
  const [films, setFilms] = useState("");

  const loadGamesList = async () => {
    const { data } = await axios.get(
      `${PREFIX}/games?key=${API_KEY}&search=${films}&search_exact=true`
    );
    setActiveData(data.results);
  };

  useEffect(() => {
    loadGamesList();
  }, [films]);

  return (
    <>
      <Search setFilms={setFilms} />
      <FilmsList data={activeData} />
    </>
  );
}
