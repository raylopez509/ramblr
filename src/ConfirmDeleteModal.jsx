import './ConfirmDeleteModal.css';

export default function ConfirmDeleteModal({ onClose, deletePosts }) {
  function handleConfirm() {
    deletePosts();
    onClose();
  }
  
  return (
    <div className='modal'>
      Are you sure you want to delete?!?!
      <button onClick={handleConfirm}>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}
