import './AddPostModal.css'
import Editor from './Editor.jsx'
import { useState } from 'react';
import InputTag from './InputTag.jsx';

function AddPostModal({ onClose, onPostCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    "title": title,
    "content": content,
    "tags": tags,
    "date_created": "CURRENT_TIMESTAMP",
    "owner": "ray"
  })

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };

  const submitPost = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    await onPostCreated();

    onClose();
  }

  const handleTags = (tags) => {
    setTags(tags);
  }

  return (
    <section className='modal'>
      <h1 className='add-post-title'>Add Post</h1>
      <form onSubmit={submitPost}>
        <input placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        {/* <Editor /> */}
        <textarea placeholder='Make a Post!'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <InputTag currentTags={tags} handleTags={handleTags}/>
        <button type='submit'>Post</button>
        <button onClick={onClose}>Cancel</button>         
      </form>
    </section>
  );
}

export default AddPostModal;