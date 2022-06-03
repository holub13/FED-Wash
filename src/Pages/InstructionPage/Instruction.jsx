import React, { useLayoutEffect, useState } from 'react'

import Content from '../../Components/Content'

import './Instruction.css'

const Instruction = ({ foo, getInfo, appState }) => {
  const [stateInstr, setStateInstr] = useState([])

  useLayoutEffect(() => {
    appState.map((item) => {
      if (item.id === 'instruction') {
        setStateInstr(item.info)
      }
    })
  }, [appState])

  // const info = [
  //   {
  //     title: '13321',
  //     id: '1',
  //     content:
  //       'Инструкция 1. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: '7894',
  //     id: '2',
  //     content:
  //       'Инструкция 2. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: '540578 Dsd',
  //     id: '3',
  //     content:
  //       'Инструкция 3. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: '809648',
  //     id: '4',
  //     content:
  //       'Инструкция 4. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: 'sdcvsd54060',
  //     id: '5',
  //     content:
  //       'Инструкция 5. Some quick example text to build on the card title',
  //   },
  //   {
  //     title: 'SDdasd75064',
  //     id: '6',
  //     content:
  //       'Инструкция 6. Some quick example text to build on the card title',
  //   },
  // ]

  getInfo(stateInstr)
  return (
    <>
      <Content info={stateInstr} name="Инструкции" foo={foo} />
    </>
  )
}

export default Instruction
