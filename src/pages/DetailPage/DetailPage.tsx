import { useParams } from "react-router"

export default function DetailPage(){
    const { id } =useParams();

    return<>Detail - {id} </>
}