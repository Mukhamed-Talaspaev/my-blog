import { useContext } from "react"
import Personal from "../../ui-components/Personal/Personal"
import styles from './NavBar.module.scss'
import { ActiveContext } from "../../Context/context"
const NavBar =()=>{
    const context =useContext(ActiveContext)
    return(
        <div className={!context?.isActive?styles.navbar:`${styles.navbar} ${styles.active}`}>
            <Personal userName={'mukhamed Talaspayev'}/>
        </div>
    )
}
export default NavBar