import axios from "axios";
import { useParams } from "react-router";
import { API_KEY, PREFIX } from "../../helpers/API";
import { useEffect, useState } from "react";
import style from "./DetailPage.module.css";
import { Link } from "react-router-dom";
import Handling from "../../components/Handling/Handling";
import { IFilm } from "../../assets/InitData";

export default function DetailPage() {
  const [detail, setDetail] = useState<IFilm | null>();
  const { id } = useParams();

  const handleLoadData = async () => {
    try {
      const { data } = await axios.get<IFilm>(
        `${PREFIX}/games/${id}?key=${API_KEY}`
      );
      setDetail(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <>
      <div className={style["top"]}>
        <Link to="../">Поиск фильмов</Link>
        {detail?.name && <Handling text={detail?.name}></Handling>}
      </div>
    </>
  );
}
