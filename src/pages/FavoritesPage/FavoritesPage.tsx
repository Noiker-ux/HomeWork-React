import { useSelector } from "react-redux"
import GamesList from "../../components/GamesList/GamesList"
import Handling from "../../components/Handling/Handling"
import { RootState } from "../../store/store"

export default function FavoritesPage () {
    const gamesID = useSelector((s:RootState) => s.games.games)

    return <div>
        <p>{gamesID.map((e:any) => <p>{e}</p>)}</p>
        <Handling text="Избранное"></Handling>
        <GamesList data={[]}/>
    </div>
}