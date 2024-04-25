import { useEffect, useState } from "react";
import styles from "./posts.module.scss";
import { Link } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((responce) => responce.json())
      .then((data) => setPosts(data.books));
  }, []);
  const postTorender = posts.map(({ isbn13, title, image }) => (
    <div key={isbn13}>
      <h3>{title}</h3>
      <h4> id:{isbn13}</h4>
      <img className={styles.img} src={image} />
      <Link to={`${isbn13}`}>See the post</Link>
    </div>
  ));
  return <>{postTorender}</>;
};
export default Posts;
