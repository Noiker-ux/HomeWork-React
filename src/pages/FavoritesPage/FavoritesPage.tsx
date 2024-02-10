import { useSelector } from "react-redux"
import GamesList from "../../components/GamesList/GamesList"
import Handling from "../../components/Handling/Handling"
import { RootState } from "../../store/store"


export default function FavoritesPage () {
    const favoriteArrGames = useSelector((s:RootState) => s.games.games)
    
    return <div>
        <Handling text="Избранное"></Handling>
        <GamesList data={favoriteArrGames}/>
    </div>
}