import { useLoaderData } from "react-router-dom";
import GamesList from "../../components/GamesList/GamesList";
import Search from "../../components/Search/Search";
import { useState } from "react";
import { IGame } from "../../assets/IGame";
import axios from "axios";
import { API_KEY, PREFIX_LINK_TO_API } from "../../helpers/API";

export default function MainPage() {
  const data = useLoaderData();
  const [activeData, setActiveData] = useState<IGame[] | unknown>(data);

  const loadGamesList = async (game:string) => {
    const { data } = await axios.get(
      `${PREFIX_LINK_TO_API}/games?key=${API_KEY}&search=${game}&search_exact=true`
    );
    setActiveData(data.results);
  };

  const skipSearch = () => {
    setActiveData(data);
  }

  return (
    <>
      <Search loadGamesList={loadGamesList}  skipSearch={skipSearch}/>
      <GamesList data={activeData as IGame[]} />
    </>
  );
}
