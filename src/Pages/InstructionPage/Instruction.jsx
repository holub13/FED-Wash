import React, { useLayoutEffect, useState } from 'react'

import Content from '../../Components/Content'

import './Instruction.css'

const Instruction = ({ foo, getInfo, appState }) => {
  const [stateInstr, setStateInstr] = useState([])
  const [stateId, setStateId] = useState('')

  useLayoutEffect(() => {
    appState.forEach((item) => {
      if (item.id === 'instruction') {
        setStateInstr(item.info)
        setStateId(item.id)
      }
    })
  }, [appState])

  getInfo(stateInstr)
  return (
    <>
      <Content
        info={stateInstr}
        name="Инструкции"
        foo={foo}
        id={stateId}
        appState={appState}
      />
    </>
  )
}

export default Instruction
