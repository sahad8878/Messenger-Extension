import React,{useState} from 'react'

function TagEditor({ onTagCreate }) {

    const [tagName, setTagName] = useState('');

    const handleTagCreate = () => {
      onTagCreate(tagName);
      setTagName('');
    };
  
  return (
    <div>
    <input
      type="text"
      placeholder="Enter tag name"
      value={tagName}
      onChange={(e) => setTagName(e.target.value)}
    />
    <button onClick={handleTagCreate}>Create Tag</button>
  </div>
  )
}

export default TagEditor
