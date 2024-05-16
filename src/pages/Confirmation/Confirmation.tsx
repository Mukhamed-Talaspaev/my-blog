import { useSelector } from "react-redux"
import { User } from "../../types/types"

const Confirmation =()=>{
    const data = useSelector(state=>(state as {user:{user:User}}).user.user)
    console.log('data',data)
    return <div>Confirmation</div>
}
export default Confirmation