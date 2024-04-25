import { useNavigate } from "react-router-dom";
import styles from "./Personal.module.scss";
const Personal = ({ userName }: { userName: string }) => {
  const navigate=useNavigate()
  const splitFunction = (userName: string) => {
    return userName
      .split(" ")
      .map((el) => el[0].toUpperCase())
      .join("");
  };

  return (
    <button onClick={()=>navigate('/profile')} className={styles.personal}>
      <div className={styles.short}>{splitFunction(userName)}</div>
      <div>{userName}</div>
    </button>
  );
};
export default Personal;
