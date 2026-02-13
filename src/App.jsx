import './App.css'
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist.jsx'
import AddPostButton from './AddPostButton.jsx'

function App() {

  const [postData, setPostData] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:3000/posts');
    const data = await res.json();
    setPostData(data);
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <>
      <h1>The Blog</h1>
      <AddPostButton onPostCreated={fetchPosts}/>
      <Bloglist postData={postData}/>
    </>
  )
}

export default App
