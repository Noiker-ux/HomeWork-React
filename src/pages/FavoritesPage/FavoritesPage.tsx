import GamesList from "../../components/GamesList/GamesList"
import Handling from "../../components/Handling/Handling"

export default function FavoritesPage () {
    return <>
        <Handling text="Избранное"></Handling>
        <GamesList data={[]}/>
    </>
}