
import Input from '../../ui-components/Input/Input'
import Personal from '../../ui-components/Personal/Personal'
import Burger from '../Burger/Burger'
import styles from './Header.module.scss'
const Header =()=>{
    return(  
    <div className={styles.header}>
         <Burger/>
         <Input/>
         <Personal/>
      </div>)
  }
  export default Header