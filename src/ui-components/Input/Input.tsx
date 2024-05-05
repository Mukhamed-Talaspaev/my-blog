import { useState } from "react";
import styles from "./Input.module.scss";
const Input = () => {
  const [input, setInput] = useState("");
  return (
    <input className={styles.input} value={input} onChange={(event) => setInput(event.target.value)} />
  );
};
export default Input;
