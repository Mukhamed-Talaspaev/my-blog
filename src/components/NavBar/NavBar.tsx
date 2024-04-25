import { useContext } from "react"
import Personal from "../../ui-components/Personal/Personal"
import styles from './NavBar.module.scss'
import { ActiveContext } from "../../Context/context"
import { NavLink } from "react-router-dom"
const NavBar =()=>{
    const context =useContext(ActiveContext)
    const MyClassName=()=>({isActive}:{isActive:boolean})=>isActive?`${styles.active}`:`${styles.nonActive}`
    return(
        <div className={!context?.isActive?styles.navbar:`${styles.navbar} ${styles.active}`}>
            <Personal userName={'mukhamed Talaspayev'}/>
            <ul>
                <li ><NavLink className={MyClassName()}  to="/">Home</NavLink></li>
                <li ><NavLink className={MyClassName()}to="/about">about</NavLink></li>
                <li ><NavLink className={MyClassName()}to="/login">login</NavLink></li>
                <li ><NavLink className={MyClassName()}to="/posts">Posts</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar