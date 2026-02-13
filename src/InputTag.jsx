import React from 'react'
import { useState, useRef } from 'react'


export default function InputTag({currentTags, handleTags}) {
  // const [tags, setTags] = useState([]);
  const tagInput = useRef(null);

  const inputKeyDown = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
    }
    const val = e.target.value;

    if(e.key === 'Enter' && val) {
      if(!currentTags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        // setTags([...tags, val]);
        handleTags([...currentTags,val]);
      }
      tagInput.current.value = null;
    }
    else if(e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  }

  const removeTag = tagIndex => {
    const newTags = [...currentTags];
    newTags.splice(tagIndex, 1);
    // setTags(newTags);
    handleTags(newTags);
  }

  return (
    <>
      <ul>
        {currentTags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type='button' onClick={() => removeTag(i)}>X</button>
          </li>
        ))}
        <li>
          <input type='text' onKeyDown={inputKeyDown} ref={tagInput}/>
        </li>
      </ul>
    </>  
  )
}
