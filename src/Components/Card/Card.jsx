import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

const Card = ({ title, content, foo, itemInfo, id, appState, del }) => {
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
        <div className="btn-group">
          <Link
            to={`/card-content/${title}`}
            className="btn btn-secondary"
            onClick={() => foo(itemInfo)}
          >
            Просмотр информации
          </Link>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() => del(itemInfo.title)}
          >
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
