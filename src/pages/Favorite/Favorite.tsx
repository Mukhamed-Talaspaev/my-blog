import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ICard } from "../../types/types"

const Favorite =()=>{
    const {favoritePosts}= useSelector(state=>state as {favorites:{favoritePosts:ICard[]}}).favorites
   const favoritePostWrap= favoritePosts.map(({authors,image,desc})=>{
   return(<div>
    <button onClick={()=>navigate(-1)}>Go back</button>
   
    <h1>
{authors}
</h1>
<img src={image}/>
<p>{desc}</p>
</div>)
})
   
    const navigate= useNavigate()
    return <div>{favoritePostWrap}</div>
}
export default Favorite