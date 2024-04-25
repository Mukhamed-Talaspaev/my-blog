import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Post =()=>{
  const{isbn13}=useParams();
  const [post,setPost]=useState({authors:'',image:'',desc:''})
    const navigate= useNavigate()
  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((responce) => responce.json())
      .then((data) =>setPost(data));
  }, [isbn13]);
  const {authors,image,desc}=post
    return <div>
        <button onClick={()=>navigate(-1)}>Go back</button>
        <h1>
   {authors}
    </h1>
    <img src={image}/>
    <p>{desc}</p>
    </div>
}
export default Post