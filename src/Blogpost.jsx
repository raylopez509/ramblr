import './Blogpost.css'
import { useState, useEffect } from 'react'

function Blogpost() {
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

  function formatDate(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleString('en-US');
  }

  return ( 
    <div className="post">
      <section className='postHeader'>
        <h1>{postData[0] && postData[0].title}</h1>
      </section>
      <section className='postContent'>
        <p>{postData[0] && postData[0].content}</p>
      </section>
      <section className='postFooter'>
        <div className='tagContainer'>
          {
            postData[0] && postData[0].tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))
          }
        </div>
        <p>{postData[0] && formatDate(postData[0].date_created)}</p>   
      </section>
    </div>
  );
}

export default Blogpost;