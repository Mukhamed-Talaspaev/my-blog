import React from "react";
import styles from "./Button.module.scss";

import {ReactComponent as BookmarkIcon} from "../../assets/Icon-Bookmark.svg";
import {ReactComponent as ThumbUp} from "../../assets/thumbUp.svg";
import {ReactComponent as ThumbDown} from "../../assets/thumbDown.svg";

interface IButton {
  variant?: "primary" | "secondary-1" | "secondary-2";
  children?: React.ReactNode;
  disabled: boolean;
  bookmark?: boolean;
  like?:'up'|'down'
  handler: () => void;
}

const Button = ({
  variant = "primary",
  children,
  disabled = false,
  bookmark = false,
  handler,
  like,
}: IButton) => {
  const styleClasses=like==='up'||bookmark?styles['blue']:styles['red']

  return (
    <button disabled={disabled} 
    className={(like||bookmark)?`${styles[variant]} ${styleClasses}`:`${styles[variant]}`} onClick={handler}>
      {!bookmark ? null : <BookmarkIcon />}
      {like&&(like==='up'?<ThumbUp/>:<ThumbDown/>)}
      {children}
      
    </button>
  );
};
export default Button;
