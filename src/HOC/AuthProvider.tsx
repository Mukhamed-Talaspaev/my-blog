import React, { createContext, useState } from "react";
import { IAuthContext, User } from "../types/types";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [isAuth, setIsAuth] = useState({
    username: "",
    email: "",
    password: "",
    course_group: 7
  });

  const signin = (auth: User, callBack: () => void) => {
    setIsAuth(auth);
    callBack();
  };
  const signout = (callBack: () => void) => {
    setIsAuth({
      username: "",
      email: "",
      password: "",
      course_group: 7
    });
    callBack();
  };
  const value = { isAuth, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
