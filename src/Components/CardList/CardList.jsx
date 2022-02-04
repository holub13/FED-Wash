import React from 'react'

import Card from '../Card'

import './CardList.css'

const CardList = ({ info, foo }) => {
  return (
    <>
      <div className="card-list">
        {info.map((item) => (
          <Card title={item.title} content={item.content} foo={foo} />
        ))}
      </div>
    </>
  )
}

export default CardList
