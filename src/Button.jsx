import { useState } from 'react'
import { createPortal } from 'react-dom'
import AddPostModal from './AddPostModal'

function Button({ onPostCreated }) {

  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add</button>
      {showModal && createPortal(
        <AddPostModal onClose={() => setShowModal(false)}
          onPostCreated={onPostCreated}
        />,
        document.body
      )}
    </>
  );
}

export default Button;