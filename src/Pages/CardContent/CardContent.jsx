import React from 'react'
// import Input from '../../Components/Input'

import './CardContent.css'

const CardContent = ({ itemInfo }) => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{itemInfo.title}</h1>
      </div>
      <p className="d-flex pt-3 pb-2 mb-3">{itemInfo.content}</p>
    </main>
  )
}

export default CardContent
