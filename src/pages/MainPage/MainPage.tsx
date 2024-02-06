import { useLoaderData } from "react-router-dom";
import GamesList from "../../components/GamesList/GamesList";
import Search from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { IGame } from "../../assets/IGame";
import axios from "axios";
import { API_KEY, PREFIX_LINK_TO_API } from "../../helpers/API";

export default function MainPage() {
  const data = useLoaderData();

  const [activeData, setActiveData] = useState<IGame[] | unknown>(data);
  const [game, setGames] = useState("");

  const loadGamesList = async () => {
    const { data } = await axios.get(
      `${PREFIX_LINK_TO_API}/games?key=${API_KEY}&search=${game}&search_exact=true&metacritic=10,100`
    );
    setActiveData(data.results);
  };

  useEffect(() => {
    loadGamesList();
  }, [game]);

  return (
    <>
      <Search setGames={setGames} />
      <GamesList data={activeData} />
    </>
  );
}
