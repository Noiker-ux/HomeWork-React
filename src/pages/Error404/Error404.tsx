import { Link } from "react-router-dom";
import Handling from "../../components/Handling/Handling";
import Paragraph from "../../components/Paragraph/Paragraph";
import style from './Error404.module.css'

export default function Error404 () {
    return (
        <div className={style["errorPage"]}>
            <Paragraph text="The page you are looking for has not been found" className="paragraph-big" />
            <img src="/public/404.png" alt="Error 404" className={style['errorImg']}/>
            <Link to='/'>Go back to the main page</Link>
        </div>
    )
}