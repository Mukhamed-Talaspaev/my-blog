import {ReactComponent as Cancel} from "../../assets/cancelIcon.svg";
import {ReactComponent as Menu} from "../../assets/menuIcon.svg";
import styles from './Burger.module.scss'
const Burger =({isActive,setIsactive}:{isActive:boolean,setIsactive:()=>void})=>{

    return (   
    <button className={styles.burgerMenu} onClick={setIsactive}>
       { !isActive?<Menu/>:<Cancel/>}
        </button>)
 

}
export default Burger