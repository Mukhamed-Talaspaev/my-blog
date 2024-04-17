import styles from "./Personal.module.scss";
const Personal = ({ userName }: { userName: string }) => {
  const splitFunction = (userName: string) => {
    return userName
      .split(" ")
      .map((el) => el[0].toUpperCase())
      .join("");
  };

  return (
    <button className={styles.personal}>
      <div className={styles.short}>{splitFunction(userName)}</div>
      <div>{userName}</div>
    </button>
  );
};
export default Personal;
