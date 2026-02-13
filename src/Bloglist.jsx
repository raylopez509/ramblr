import Blogpost from './Blogpost'
import './Bloglist.css'
import { useState, useEffect } from 'react'

function Bloglist({postData}) {

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
            key={post.post_id}
          />
        ))
      }
    </div>
  )
}

export default Bloglist