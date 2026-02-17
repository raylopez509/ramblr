import './ConfirmDeleteModal.css';

export default function ConfirmDeleteModal({ onClose, onConfirm }) {
  
  return (
    <div className='modal'>
      Are you sure you want to delete?!?!
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}
