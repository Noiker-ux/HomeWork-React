import axios from "axios";
import { useEffect, useState } from "react";
import { IStores } from "../../assets/IGame";
import { PREFIX_LINK_TO_API, API_KEY } from "../../helpers/API";
import style from './StoresBlock.module.css'

const StoresBlock = ({ stores, id }: {stores: IStores[], id:number}) => {
    const [store, setStores] = useState([]);

    const getStoresLinks = async() => {
        const { data } = await axios.get(`${PREFIX_LINK_TO_API}/games/${id}/stores?key=${API_KEY}`);
        stores.map((e:IStores) => {
            const obj = data.results.find((el:any) => el.store_id === e.store.id)
            e.store.url = obj.url;  
        })
        setStores(data.results)
      }
    
   useEffect(() => {
    getStoresLinks()
   }, [])
//    store.find((el) => {el.i})

    return <div className={style['shop-wrapper']}>
    {stores.map((e:IStores) => <a className={style['shop']} 
        key={e.id} 
        href={e.store.url}
    >
        <img className={style['shopIcon']} src={`/public/storeIcons/${e.store.slug}.svg`} alt={e.store.name}/>
        {e.store.name}
    </a>)}
    </div>
}

export default StoresBlock;