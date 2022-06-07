import React, { useLayoutEffect, useState } from 'react'

import Content from '../../Components/Content'

import './Equipment.css'

const Equipment = ({ foo, getInfo, appState }) => {
  const [stateEq, setStateEq] = useState([])
  const [stateId, setStateId] = useState('')

  useLayoutEffect(() => {
    appState.forEach((item) => {
      if (item.id === 'equipment') {
        setStateEq(item.info)
        setStateId(item.id)
      }
    })
  }, [appState])

  getInfo(stateEq)
  return (
    <>
      <Content
        info={stateEq}
        name="Оборудование"
        foo={foo}
        id={stateId}
        appState={appState}
      />
    </>
  )
}

export default Equipment
