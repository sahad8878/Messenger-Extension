import React, { useState } from 'react';
import TagList from './Components/TagList';
import TagEditor from './Components/TagEditor';

function App() {
  const [tags, setTags] = useState([]);

  const handleTagCreate = (tagName) => {
    const newTag = {
      id: Math.random().toString(),
      name: tagName,
      color: getRandomColor(),
    };
    setTags([...tags, newTag]);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
    <h1>Messenger Matic Extension</h1>
    <TagList tags={tags} />
    <TagEditor onTagCreate={handleTagCreate} />
  </div>
  );
}

export default App;
