import React from 'react'

import Content from '../../Components/Content'

import './Equipment.css'

const Equipment = ({ foo, getInfo }) => {
  const info = [
    {
      title: 'COSDOC',
      content:
        'Оборудование 1. Some quick example text to build on the card title',
    },
    {
      title: 'LVKLcvmlL',
      content:
        'Оборудование 2. Some quick example text to build on the card title',
    },
    {
      title: 'BTYVH Dsd',
      content:
        'Оборудование 3. Some quick example text to build on the card title',
    },
    {
      title: 'VUDHDIKVN',
      content:
        'Оборудование 4. Some quick example text to build on the card title',
    },
    {
      title: 'SdsdfvSFYUFY',
      content:
        'Оборудование 5. Some quick example text to build on the card title',
    },
  ]
  getInfo(info)
  return (
    <>
      <Content info={info} name="Оборудование" />
    </>
  )
}

export default Equipment
