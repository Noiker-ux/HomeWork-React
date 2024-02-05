import { IStores } from "../../assets/IGame";
import style from './StoresBlock.module.css'

const StoresBlock = ({ stores }: {stores: IStores[]}) => {
    return <div className={style['shop-wrapper']}>
    {stores.map((e:IStores) => <a className={style['shop']} key={e.id} href={`https://`+e.store.domain}>
        <img className={style['shopIcon']} src={`/public/storeIcons/${e.store.slug}.svg`} alt={e.store.name}/>
        {e.store.name}
    </a>)}
    </div>
}

export default StoresBlock;