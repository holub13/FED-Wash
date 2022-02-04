import React from 'react'

import Content from '../../Components/Content'

import './Instruction.css'

const Instruction = ({ foo, getInfo }) => {
  const info = [
    {
      title: '13321',
      content:
        'Инструкция 1. Some quick example text to build on the card title',
    },
    {
      title: '7894',
      content:
        'Инструкция 2. Some quick example text to build on the card title',
    },
    {
      title: '540578 Dsd',
      content:
        'Инструкция 3. Some quick example text to build on the card title',
    },
    {
      title: '809648',
      content:
        'Инструкция 4. Some quick example text to build on the card title',
    },
    {
      title: 'sdcvsd54060',
      content:
        'Инструкция 5. Some quick example text to build on the card title',
    },
    {
      title: 'SDdasd75064',
      content:
        'Инструкция 6. Some quick example text to build on the card title',
    },
  ]
  getInfo(info)
  return (
    <>
      <Content info={info} name="Инструкции" />
    </>
  )
}

export default Instruction
