import FilmsList from "../../components/FilmsList/FilmsList"
import Handling from "../../components/Handling/Handling"

export default function FavoritesPage () {
    return <>
        <Handling text="Избранное"></Handling>
        <FilmsList data={[]}/>
    </>
}