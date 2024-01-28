import FilmsList from "../../components/FilmsList/FilmsList";
import Search from "../../components/Search/Search";
import { INIT_DATA } from '../../assets/InitData'

export default function MainPage(){
    return <>
    <Search />
    <FilmsList data={INIT_DATA} />
    </>
}