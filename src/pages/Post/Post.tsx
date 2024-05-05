import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addFavoritePost } from "../../store/favoritesSlice";

const Post =()=>{
  const{isbn13}=useParams();
  const [post,setPost]=useState({authors:'',image:'',desc:''})
    const navigate= useNavigate()
    const dispatch=useDispatch()
  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((responce) => responce.json())
      .then((data) =>setPost(data));
  }, [isbn13]);
  const {authors,image,desc}=post
    return <div>
        <button onClick={()=>navigate(-1)}>Go back</button>
        <button onClick={()=>dispatch(addFavoritePost({post}))}>Add to favorite</button>
        <h1>
   {authors}
    </h1>
    <img src={image}/>
    <p>{desc}</p>
    </div>
}
export default Post