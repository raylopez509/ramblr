import './EditPostModal.css'
import Editor from './Editor.jsx'
import { useState } from 'react';
import InputTag from './InputTag.jsx';

function EditPostModal({ onClose, post_id, title, content, tags, owner, refreshPosts }) {

  const [postTitle, setPostTitle] = useState(title);
  const [postContent, setPostContent] = useState(content);
  const [postTags, setPostTags] = useState(tags)
  
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    "id": post_id,
    "title": postTitle,
    "content": postContent,
    "tags": postTags,
    "owner": owner
  })

  const requestOptions = {
    method: "PUT",
    headers: headers,
    body: body,
  };

  const submitPost = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/update", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    await refreshPosts();

    onClose();
  }

  const handleTags = (tags) => {
    setPostTags(tags);
  }

  return (
    <section className='modal'>
      <h1 className='add-post-title'>Edit Post</h1>
      <form onSubmit={submitPost}>
        <input placeholder='Title'
          defaultValue={title}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        ></input>
        {/* <Editor /> */}
        <textarea placeholder='Make a Post!'
          defaultValue={content}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <InputTag currentTags={postTags} handleTags={handleTags}/>
        <button type='submit'>Post</button>
        <button onClick={onClose}>Cancel</button>         
      </form>
    </section>
  );
}

export default EditPostModal;