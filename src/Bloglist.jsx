import Blogpost from './Blogpost'
import './Bloglist.css'
import { useState, useEffect } from 'react'

function Bloglist() {

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts').then(
      res => {
        return res.json();
      }
    ).then(data => {
      setPostData(data);
    })
  }, []);

  console.log(postData);

  if (postData.length === 0) {
    return <></>
  }

  return (
    <div className='bloglist'>
      {
        postData.map(post => (
          <Blogpost 
            title = {post.title}
            content = {post.content}
            tags = {post.tags}
            date_created={post.date_created}
          />
        ))
      }
    </div>
  )
}

export default Bloglist