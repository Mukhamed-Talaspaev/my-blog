import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostUploader from "../../components/PostUploader/PostUploader";
import { createPost } from "../../store/postSlice";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    image:null,
    title: "",
    lesson_num: '',
    text: "",
    description: "",
  });
  const [remove,setRemove]=useState(false)
  const [clicked,setClicked]=useState(false)
  const {status,error}= useSelector((state)=>state.post)
  const dispatch=useDispatch()
  const inputHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target
        setFormData({...formData,[name]:value})
  }
  const formSubmitHandler=(event:React.ChangeEvent<HTMLFormElement>)=>{
    if(!clicked){
    event.preventDefault()
    const data =new FormData()
    data.append('title',formData.title)
    data.append('lesson_num',formData.lesson_num)
    if(formData.image) data.append('image',formData.image)
    data.append('text',formData.text)
    data.append('description',formData.description)
    dispatch(createPost(data))
    setFormData({
        image:null,
        title: "",
        lesson_num: '',
        text: "",
        description: "",
      })
      setRemove(!remove)
      setClicked(false)
    }
  }
  const addImage=(image)=>{
    setFormData({...formData,image:image})
  }
  const clickedHandler=(target)=>{
    if(target==='upload') setClicked(true)
  }
  return (
    <div style={{display:'flex',justifyContent:'center' }}>
      <form style={{display:'flex',flexDirection:'column',width:'500px'}} onSubmit={formSubmitHandler}>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={inputHandler} />
        <label>lesson_num</label>
        <input type="number" name="lesson_num" value={formData.lesson_num} onChange={inputHandler} />
        <label>Upload Image</label>
        <div style={{border:"5px solid red",padding:"4px"}}>
        <PostUploader clickedHandler={clickedHandler}  addImage={addImage} remove={remove}/>
        </div>
        <label>Text</label>
        <input type="text" name="text" value={formData.text} onChange={inputHandler} />
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={inputHandler} />
        <button type='submit' disabled={status==='loading'}>{status==='loading'?'SENDING':'SEND POST'}</button>
        {status.error&& <div>ERROR {error}</div>}
      </form>

    </div>
  );
};
export default CreatePost;
