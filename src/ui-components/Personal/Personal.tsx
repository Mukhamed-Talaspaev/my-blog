import { useNavigate } from "react-router-dom";
import styles from "./Personal.module.scss";
import { useEffect } from "react";
import { getUserInfo } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
const Personal = () => {
  const dispatch=useDispatch<ThunkDispatch<unknown, unknown, Action>>()
  const {username} = useSelector((state)=>state.user.user)||{username:'somthing'}

  const navigate=useNavigate()
  const splitFunction = (userName: string) => {
    return userName
      .split(" ")
      .map((el) => el[0].toUpperCase())
      .join("");
  };
  useEffect(()=>{
    dispatch(getUserInfo())
  },[])

  return (
    <button onClick={()=>navigate('/profile')} className={styles.personal}>
      <div className={styles.short}>{username}</div>
      <div>{username}</div>
    </button>
  );
};
export default Personal;
