import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

const Card = ({ title, content, foo, itemInfo }) => {
  // const foo = (param) => {
  //   console.log(param)
  //   return param
  // }
  // console.log(title)
  return (
    <div className="card">
      <img
        src="https://ideabank.ua/sites/default/files/2020-04/CardBlanche_grey_card-bussines_5.png"
        className="card-img-top"
        alt="деталь"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <Link
          to={`/card-content/${title}`}
          className="btn btn-secondary"
          onClick={() => foo(itemInfo)}
        >
          Посмотреть информацию
        </Link>
      </div>
    </div>
  )
}

export default Card
