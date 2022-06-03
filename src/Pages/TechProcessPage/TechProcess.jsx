import React, { useState, useLayoutEffect } from 'react'

import Content from '../../Components/Content'

import './TechProcess.css'

const TechProcess = ({ foo, getInfo, appState }) => {
  const [stateTP, setStateTP] = useState([])

  useLayoutEffect(() => {
    appState.map((item) => {
      if (item.id === 'techprocess') {
        setStateTP(item.info)
      }
    })
  }, [appState])

  // console.log(stateTP)

  // const info = [
  //   {
  //     title: 'John',
  //     id: '1',
  //     content:
  //       'ТП 1. Some quick example text to build on the card title and make up thebulk of the cards content 1',
  //   },
  //   {
  //     title: 'Alex',
  //     id: '2',
  //     content:
  //       'ТП 2. Some quick example text to build on the card title and make up thebulk of the cards content 2',
  //   },
  //   {
  //     title: 'Ivan Holub',
  //     id: '3',
  //     content:
  //       'ТП 3. Some quick example text to build on the card title and make up thebulk of the cards content 3',
  //   },
  //   {
  //     title: 'Julia',
  //     id: '4',
  //     content:
  //       'ТП 4. Some quick example text to build on the card title and make up thebulk of the cards content 4',
  //   },
  //   {
  //     title: 'Olha',
  //     id: '5',
  //     content:
  //       'ТП 5. Some quick example text to build on the card title and make up thebulk of the cards content 5',
  //   },
  //   {
  //     title: 'Danil',
  //     id: '6',
  //     content:
  //       'ТП 6. Some quick example text to build on the card title and make up thebulk of the cards content 6',
  //   },
  //   {
  //     title: 'Kurt',
  //     id: '7',
  //     content:
  //       'ТП 7. Some quick example text to build on the card title and make up thebulk of the cards content 7',
  //   },
  //   {
  //     title: 'Bill',
  //     id: '8',
  //     content:
  //       'ТП 8. Some quick example text to build on the card title and make up thebulk of the cards content 8',
  //   },
  // ]

  getInfo(stateTP)

  return (
    <>
      <Content info={stateTP} name="Техпроцессы" foo={foo} />
    </>
  )
}

export default TechProcess
