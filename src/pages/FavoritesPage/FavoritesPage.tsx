import FilmsList from "../../components/GamesList/GamesList"
import Handling from "../../components/Handling/Handling"

export default function FavoritesPage () {
    return <>
        <Handling text="Избранное"></Handling>
        <FilmsList data={[]}/>
    </>
}