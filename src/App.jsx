import './App.css'
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist.jsx'
import AddPostButton from './AddPostButton.jsx'
import ListPostsButton from './ListPostsButton.jsx';
import Pagination from './Pagination.jsx';

function App() {

  const [postData, setPostData] = useState([]);

  const [pageNum, setPageNum] = useState(1);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const postLimit = 5;
  
  function checkButtonStatus(data, num){
    if(num == 1) {
      setShowPrevButton(false);
    }
    else {
      setShowPrevButton(true);
    }
    if(data.length < postLimit) {
      setShowNextButton(false);
    }
    else {
      setShowNextButton(true);
    }
  }
  
  function changePageNum(num) {
    setPageNum(num);
  }

  const fetchPosts = async () => {
    const query = 'http://localhost:3000/posts' + '?limit=' + postLimit + '&page=' + pageNum;
    console.log(query);
    const res = await fetch(query);
    const data = await res.json();
    setPostData(data);
    checkButtonStatus(data, pageNum);
  }

  useEffect(() => {
    fetchPosts();   
  }, [pageNum]);

  return (
    <>
      <h1>The Blog</h1>
      <AddPostButton onPostCreated={fetchPosts}/>
      <ListPostsButton postData={postData}
      refreshPosts={fetchPosts}/>
      <Bloglist postData={postData}/>
      <Pagination pageNum={pageNum} showPrevButton={showPrevButton} showNextButton={showNextButton} changePageNum={changePageNum}/>
    </>
  )
}

export default App
