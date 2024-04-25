import { Navigate } from "react-router-dom";
import { IChildren } from "../types/types";

const Auth =({children}:IChildren)=>{

    const isAuth=false
    if(isAuth){
        return <Navigate to={'/login'}/>
    }
    return children
}
export default Auth