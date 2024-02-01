import { useLoaderData } from "react-router-dom";
import FilmsList from "../../components/FilmsList/FilmsList";
import Search from "../../components/Search/Search";

export default function MainPage() {
  const data = useLoaderData();

  return (
    <>
      <Search />
      <FilmsList data={data} />
    </>
  );
}
