
import Input from '../../ui-components/Input/Input'
import Personal from '../../ui-components/Personal/Personal'
import Burger from '../Burger/Burger'
import styles from './Header.module.scss'
const Header =({isActive,setIsactive}:{isActive:boolean,setIsactive:()=>void})=>{
    return(  
    <div className={styles.header}>
         <Burger isActive={isActive} setIsactive={setIsactive}/>
         <Input/>
         <Personal userName={'mukhamed Talaspayev'}/>
      </div>)
  }
  export default Header