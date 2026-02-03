import './AddPostModal.css'
import Editor from './Editor.jsx'
import PostButton from './PostButton.jsx';
import { useState } from 'react';

function AddPostModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <section className='modal'>
      Add Post
      <input placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      {/* <Editor /> */}
      <textarea placeholder='Make a Post!'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <PostButton
        title={title}
        content={content}
      />
      <button onClick={onClose}>Cancel</button>
    </section>
  );
}

export default AddPostModal;