import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { activateUser } from "../../store/userSlice"
import { Action, ThunkDispatch } from "@reduxjs/toolkit"
import { ActivateUser } from "../../types/types"

const Activation =()=>{

    const activation=useParams()
    const dispatch=useDispatch<ThunkDispatch<ActivateUser, unknown, Action>>()
    useEffect((
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    )=>{dispatch(activateUser(activation as unknown as ActivateUser))},[])
    return <div>Activation</div>
}
export default Activation