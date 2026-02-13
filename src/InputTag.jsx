import './InputTag.css'
import { useRef } from 'react'

export default function InputTag({currentTags, handleTags}) {
  const tagInput = useRef(null);

  const inputKeyDown = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
    }
    const val = e.target.value;

    if(e.key === 'Enter' && val) {
      if(!currentTags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
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
    handleTags(newTags);
  }

  return (
    <>
      <ul className='tag-list'>
        {currentTags.map((tag, i) => (
          <li key={tag} className='tag'>
            {tag}
            <button type='button' onClick={() => removeTag(i)}>X</button>
          </li>
        ))}
        <li className='tag-input-container'>
          <input className='tag-input' type='text' onKeyDown={inputKeyDown} ref={tagInput}/>
        </li>
      </ul>
    </>  
  )
}
