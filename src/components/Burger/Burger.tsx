import { useContext } from "react";
import {ReactComponent as Cancel} from "../../assets/cancelIcon.svg";
import {ReactComponent as Menu} from "../../assets/menuIcon.svg";
import styles from './Burger.module.scss'
import { ActiveContext } from "../../Context/context";
const Burger =()=>{
const context=useContext(ActiveContext)
    return (   
    <button className={styles.burgerMenu} onClick={()=>context?.setIsactive(!context.isActive)}>
       { !context?.isActive?<Menu/>:<Cancel/>}
        </button>)
 

}
export default Burger