import './ConfirmDeleteModal.css';

export default function ConfirmDeleteModal({ onClose }) {
  return (
    <div className='modal'>
      Are you sure you want to delete?!?!
      <button>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}
