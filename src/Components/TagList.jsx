import React from 'react'

function TagList({ tags }) {
  return (
    <div>
    <h2>Tags:</h2>
    <ul>
      {tags.map((tag) => (
        <li key={tag.id}>{tag.name}</li>
      ))}
    </ul>
  </div>
  )
}

export default TagList
