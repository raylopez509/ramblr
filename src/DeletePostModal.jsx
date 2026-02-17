import './DeletePostModal.css'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function DeletePostModal({ onClose, postData }) {

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [checkedButtons, setCheckedButtons] = useState([]);
  const [disableButton, setDisableButton] = useState(true);

  const handleCheckboxClick = (e) => {
    if(e.target.checked == true) {
      let newCheckedButtons = [...checkedButtons,e.target.value];
      setCheckedButtons(newCheckedButtons);
      console.log(newCheckedButtons);
      if(newCheckedButtons.length > 0) {
        setDisableButton(false);
      }
    }
    if(e.target.checked != true) {
      let newCheckedButtons = checkedButtons;
      let index = newCheckedButtons.indexOf(e.target.value);
      newCheckedButtons.splice(index, 1);
      setCheckedButtons(newCheckedButtons);
      console.log(newCheckedButtons);
      if(newCheckedButtons.length == 0) {
        setDisableButton(true);
      }
    }
  }

  function formatDate(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleString('en-US');
  }

  async function deletePosts() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "ids" : checkedButtons
    });

    const requestOptions = {
      method: "DELETE",
      headers: headers,
      body: body,
    };
    
    await fetch("http://localhost:3000/delete", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
      
    onClose();
  }

  return (
    <div className='modal'>DeletePostModal
      <table>
        <thead>  
          <tr>
            <th></th>
            <th>
              Title
            </th>
            <th>
              Date Created
            </th>
          </tr>
        </thead>
        <tbody>
          {
            postData.map(post => (
          <tr key={post.post_id}>
            <td>
              <input type='checkbox' value={post.post_id} onClick={handleCheckboxClick}></input>
            </td>
            <td>
              {post.title}
            </td>
            <td>
              {formatDate(post.date_created)}
            </td>
          </tr>
            ))
          }
        </tbody>     
      </table>
      <button onClick={() => setShowConfirmModal(true)}
        disabled={disableButton}
        >Delete</button>
      {showConfirmModal && createPortal(
        <ConfirmDeleteModal 
        onClose={(e) => setShowConfirmModal(false)}
        deletePosts={deletePosts}
        />,
        document.body
      )}      
      <button onClick={onClose}>Close</button>    
    </div>
  )
}
