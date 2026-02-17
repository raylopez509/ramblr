import './DeletePostModal.css'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default function DeletePostModal({ onClose, postData, refreshPosts }) {

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [checkedButtons, setCheckedButtons] = useState([]);
  const [disableDeleteButton, setDisableDeleteButton] = useState(true);
  const [disableEditButton, setDisableEditButton] = useState(true);

  const handleCheckboxClick = (e) => {
    let newCheckedButtons = [];
    if(e.target.checked == true) {
      newCheckedButtons = [...checkedButtons,e.target.value];
      setCheckedButtons(newCheckedButtons);
    }
    else if(e.target.checked != true) {
      newCheckedButtons = checkedButtons;
      let index = newCheckedButtons.indexOf(e.target.value);
      newCheckedButtons.splice(index, 1);
      setCheckedButtons(newCheckedButtons);
    }
    let checkedButtonNum = newCheckedButtons.length;
    checkDeleteButtonStatus(checkedButtonNum);
    checkEditButtonStatus(checkedButtonNum);      
  }

  function checkDeleteButtonStatus(checkedNum) {
    if(checkedNum == 0) {
      setDisableDeleteButton(true);
    }
    else {
      setDisableDeleteButton(false);
    }
  }

  function checkEditButtonStatus(checkedNum) {
    if(checkedNum == 1) {
      setDisableEditButton(false);
    }
    else {
      setDisableEditButton(true);
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

    await refreshPosts();

    setShowConfirmModal(false);

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
        disabled={disableDeleteButton}
        >Delete</button>
      {showConfirmModal && createPortal(
        <ConfirmDeleteModal 
        onClose={() => setShowConfirmModal(false)}
        onConfirm={deletePosts}
        />,
        document.body
      )}  
      <button
        disabled={disableEditButton}
      >Edit</button>    
      <button onClick={onClose}>Close</button>    
    </div>
  )
}
