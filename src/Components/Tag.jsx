import React from 'react'

function Tag({name, color }) {
  return (
    <div style={{ backgroundColor: color }}>
    <h3>{name}</h3>
  </div>
  )
}

export default Tag
