import React, { useLayoutEffect, useState } from 'react'

import Content from '../../Components/Content'

import './Equipment.css'

const Equipment = ({ foo, getInfo, appState }) => {
  const [stateEq, setStateEq] = useState([])

  useLayoutEffect(() => {
    appState.map((item) => {
      if (item.id === 'equipment') {
        setStateEq(item.info)
      }
    })
  }, [appState])

  // const info = [
  //   {
  //     title: 'COSDOC',
  //     id: '1',
  //     content:
  //       'Оборудование 1. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: 'LVKLcvmlL',
  //     id: '2',
  //     content:
  //       'Оборудование 2. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: 'UJIuoVH',
  //     id: '3',
  //     content:
  //       'Оборудование 3. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: 'VUDHDIKVN',
  //     id: '4',
  //     content:
  //       'Оборудование 4. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: 'SdsdfvSFYUFY',
  //     id: '5',
  //     content:
  //       'Оборудование 5. Some quick example text to build on the card title',
  //   },
  // ]

  getInfo(stateEq)
  return (
    <>
      <Content info={stateEq} name="Оборудование" foo={foo} />
    </>
  )
}

export default Equipment
