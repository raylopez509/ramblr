import './AddPostModal.css'
import Editor from './Editor.jsx'
import PostButton from './PostButton.jsx';
import { useState } from 'react';

function AddPostModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    "title": title,
    "content": content,
    "tags": [
      "blog",
      "test"
    ],
    "date_created": "CURRENT_TIMESTAMP",
    "owner": "ray"
  })

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };

  const submitPost = (e) => {
    // e.preventDefault();

  fetch("http://localhost:3000/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    onClose();
  }

  return (
    <section className='modal'>
      Add Post
      {/* <input placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input> */}
      {/* <Editor /> */}
      {/* <textarea placeholder='Make a Post!'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea> */}
      {/* <PostButton
        title={title}
        content={content}
      /> */}
      {/* <button onClick={onClose}>Cancel</button> */}
      <form onSubmit={submitPost}>
        <input placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea placeholder='Make a Post!'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type='submit'>Post</button>
        <button onClick={onClose}>Cancel</button>         
      </form>
    </section>
  );
}

export default AddPostModal;