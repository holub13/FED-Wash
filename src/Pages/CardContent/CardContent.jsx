import React from 'react'

import './CardContent.css'

const CardContent = (foo, getInfo) => {
  console.log(getInfo)
  return (
    <div className="card-content">
      <h1>Hello {foo}</h1>
    </div>
  )
}

export default CardContent
