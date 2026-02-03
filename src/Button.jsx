import { useState } from 'react'
import { createPortal } from 'react-dom'
import AddPostModal from './AddPostModal'

function Button() {

  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add</button>
      {showModal && createPortal(
        <AddPostModal onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}

export default Button;