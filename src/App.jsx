import './App.css'
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist.jsx'
import Button from './Button.jsx'

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
      <Button onPostCreated={fetchPosts}/>
      <Bloglist postData={postData}/>
    </>
  )
}

export default App
