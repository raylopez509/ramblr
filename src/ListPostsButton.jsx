import { useState } from 'react'
import { createPortal } from 'react-dom'
import ListPostsModal from './ListPostsModal'

function ListPostsButton({ postData, refreshPosts }) {

  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <button onClick={() => setShowModal(true)}>List Posts</button>
      {showModal && createPortal(
        <ListPostsModal onClose={() => setShowModal(false)}
          postData={postData}
          refreshPosts={refreshPosts}
        />,
        document.body
      )}
    </>
  );
}

export default ListPostsButton;