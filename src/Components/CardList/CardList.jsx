import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '../Card'

import './CardList.css'

const CardList = ({ info, foo, id, appState }) => {
  const [inf, setInf] = useState('')
  useEffect(() => setInf(info), [info])

  async function del(title) {
    let name
    let path

    appState.forEach((item) => {
      if (item.id === id) {
        name = item.name
        path = item.path
        // console.log(item)
      }
    })

    info.forEach((item) => {
      if (item.title === title) {
        console.log(info.indexOf(item))
        setInf(info.splice(info.indexOf(item), 1))
        console.log(item)
      }
    })
    await axios
      .put(`http://localhost:8000/data/${id}`, {
        id: id,
        name: name,
        path: path,
        info: [...info],
      })
      .then((response) => {
        console.log(response)
        // setMassage('Success')
      })
      .catch((error) => {
        console.log(error)
        // setMassage(`Error ${error.request.status}`)
      })
  }
  console.log(info)

  // console.log(inf)
  return (
    <>
      <div className="card-list">
        {info.map((item) => (
          <Card
            title={item.title}
            content={item.content}
            foo={foo}
            // cardPath={item.cardPath}
            itemInfo={item}
            id={id}
            appState={appState}
            del={del}
          />
        ))}
      </div>
    </>
  )
}

export default CardList
