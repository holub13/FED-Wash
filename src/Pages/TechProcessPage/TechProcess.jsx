import React, { useState, useLayoutEffect } from 'react'

import Content from '../../Components/Content'

import './TechProcess.css'

const TechProcess = ({ foo, getInfo, appState }) => {
  const [stateTP, setStateTP] = useState([])
  const [stateId, setStateId] = useState('')

  useLayoutEffect(() => {
    appState.forEach((item) => {
      if (item.id === 'techprocess') {
        setStateTP(item.info)
        setStateId(item.id)
      }
    })
  }, [appState])

  getInfo(stateTP)

  // console.log(stateTP)
  // console.log(appState)

  return (
    <>
      <Content
        info={stateTP}
        name="Техпроцессы"
        foo={foo}
        id={stateId}
        appState={appState}
      />
    </>
  )
}

export default TechProcess
