import Personal from "../../ui-components/Personal/Personal"
import styles from './NavBar.module.scss'
const NavBar =({isActive}:{isActive:boolean})=>{
    return(
        <div className={!isActive?styles.navbar:`${styles.navbar} ${styles.active}`}>
            <Personal userName={'mukhamed Talaspayev'}/>
        </div>
    )
}
export default NavBar