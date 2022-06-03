import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import TechProcess from './Pages/TechProcessPage'
import Equipment from './Pages/EquipmentPage'
import Instruction from './Pages/InstructionPage'
import WelcomePage from './Pages/WelcomePage'
import CardContent from './Pages/CardContent'
import Login from './Pages/LoginPage/Login'

const ContentRouter = ({ appState }) => {
  const [itemInfo, setItemInfo] = useState({})
  const foo = (param) => {
    setItemInfo(param)
    return param
  }
  const getInfo = (info) => {
    return info
  }
  // console.log(appState)
  console.log(itemInfo)

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route
        path="/techprocess"
        element={
          <TechProcess appState={appState} foo={foo} getInfo={getInfo} />
        }
      />
      <Route
        path="/equipment"
        element={<Equipment appState={appState} foo={foo} getInfo={getInfo} />}
      />
      <Route
        path="/instruction"
        element={
          <Instruction appState={appState} foo={foo} getInfo={getInfo} />
        }
      />
      <Route
        path={`/card-content/${itemInfo.title}`}
        element={<CardContent itemInfo={itemInfo} />}
      />
      <Route path={`/login`} element={<Login appState={appState} />} />
    </Routes>
  )
}
export default ContentRouter
