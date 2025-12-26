import Blogpost from './Blogpost'
import './Bloglist.css'
// import { useState, useEffect } from 'react'

function Bloglist() {

  // const [postData, setPostData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/posts').then(
  //     res => {
  //       return res.json();
  //     }
  //   ).then(data => {
  //     setPostData(data);
  //   })
  // }, []);

  return (
    <div className='bloglist'>
      <Blogpost />
    </div>
  )
}

export default Bloglist