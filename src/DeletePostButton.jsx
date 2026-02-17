import { useState } from 'react'
import { createPortal } from 'react-dom'
import DeletePostModal from './DeletePostModal'

function DeletePostButton({ postData, refreshPosts }) {

  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete</button>
      {showModal && createPortal(
        <DeletePostModal onClose={() => setShowModal(false)}
          postData={postData}
          refreshPosts={refreshPosts}
        />,
        document.body
      )}
    </>
  );
}

export default DeletePostButton;