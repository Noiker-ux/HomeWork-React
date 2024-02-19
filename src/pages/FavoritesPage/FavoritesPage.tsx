import { useSelector } from "react-redux"
import GamesList from "../../components/GamesList/GamesList"
import Handling from "../../components/Handling/Handling"
import { RootState } from "../../store/store"
import axios from "axios"
import { API_KEY, PREFIX_LINK_TO_API } from "../../helpers/API"
import { IGame } from "../../assets/IGame"
import { useEffect, useState } from "react"


export default function FavoritesPage () {
    const favoriteArrGames = useSelector((s:RootState) => s.games.games)
    const [favorite,setfavorite] = useState<IGame[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getItem = async(idGame:number) => {
        const { data } = await axios.get<IGame>(`${PREFIX_LINK_TO_API}/games/${idGame}?key=${API_KEY}`)
        const screenshots = await getItemScreenShots(idGame);
        data.short_screenshots = screenshots;
        return data;
    }

    const getItemScreenShots = async(idGame:number) => {
        const { data } = await axios.get(`${PREFIX_LINK_TO_API}/games/${idGame}/screenshots?key=${API_KEY}`)
        return data.results;
    }

    const getAllItems = async () => {
        setLoading(true)
        const result = await Promise.all(favoriteArrGames.map((i:number) => getItem(i)));
        setfavorite(result)
        setLoading(false)
    }

    useEffect(()=>{
        getAllItems();
    },[favoriteArrGames])
    
    return <div>
        {!loading && <>
            <Handling text="Избранное"></Handling>
            <GamesList data={favorite}/>
        </>}
        {loading && <>Загружаем список ихбранного</>}
    </div>
}