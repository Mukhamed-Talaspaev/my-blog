import { useEffect, useState } from "react";
import styles from "./posts.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage, fetchPosts, setOrdering, setSearchQuery } from "../../store/paginationSlice";
const Posts = () => {

  const{post,currentPage,status,itemsPerPage,totalCount,searchQuery,ordering}=useSelector(state=>state.pagination)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchPosts({limit:itemsPerPage,offset:(currentPage-1)*itemsPerPage,search: searchQuery,ordering} ))
  }, [currentPage, dispatch, itemsPerPage,searchQuery,ordering]);
  
  const setCurrentPage =(i)=>{
    dispatch(changeCurrentPage(i))
  }
  const numberofPage = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const maxPageNumbers = 10;
    const startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
            <li
                key={i}
                onClick={() => setCurrentPage(i)}
                style={{
                    cursor: 'pointer',
                    margin: '5px',
                    display: 'inline-block',
                    fontWeight: currentPage === i ? 'bold' : 'normal'
                }}
            >
                {i}
            </li>
        );
    }

    return pageNumbers;
};
const handleNextPage = () => {
  if (currentPage < Math.ceil(totalCount / itemsPerPage)) {
      dispatch(changeCurrentPage(currentPage + 1));
  }
};

const handlePreviousPage = () => {
  if (currentPage > 1) {
      dispatch(changeCurrentPage(currentPage - 1));
  }
};

const handleSearchChange = (e) => {
  dispatch(setSearchQuery(e.target.value));
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  dispatch(fetchPosts({ limit: itemsPerPage, offset: 0, search: searchQuery }));
  dispatch(changeCurrentPage(1));
};
const handleOrderingChange = (e) => {
  dispatch(setOrdering(e.target.value));
};
  return <div>
    {status==='pending'&&<h1>....Loading</h1>}
    {status==='rejected'&&<h1>Error is here</h1>}
    <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search posts..."
                />
                <button type="submit">Search</button>
            </form>
            <div>
                <label htmlFor="ordering">Sort by: </label>
                <select id="ordering" value={ordering} onChange={handleOrderingChange}>
                    <option value="title">Title</option>
                    <option value="created_at">Date Created</option>
                </select>
            </div>
    <div>
      {post.map(({title,description})=>{
        return <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      })}
      <button onClick={handlePreviousPage} disabled={currentPage===1}>Prev</button>
      <div style={{display:'flex'}}>{numberofPage()}</div>
      </div>
      <button  onClick={handleNextPage}disabled={currentPage===Math.ceil(totalCount/itemsPerPage)}>Next</button>
  </div>;
};
export default Posts
