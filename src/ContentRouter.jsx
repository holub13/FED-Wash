import React from 'react'
import { Routes, Route } from 'react-router-dom'

import TechProcess from './Pages/TechProcessPage'
import Equipment from './Pages/EquipmentPage'
import Instruction from './Pages/InstructionPage'
import WelcomePage from './Pages/WelcomePage'
import CardContent from './Pages/CardContent'

const ContentRouter = () => {
  const foo = (param) => {
    // console.log(param)
    return param
  }
  const getInfo = (info) => {
    // console.log(info)
    return info
  }

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route
        path="/techprocess"
        element={<TechProcess foo={foo} getInfo={getInfo} />}
      />
      <Route path="/equipment" element={<Equipment getInfo={getInfo} />} />
      <Route path="/instruction" element={<Instruction getInfo={getInfo} />} />
      <Route
        path={`/card-content/${foo}`}
        element={<CardContent foo={foo} getInfo={() => getInfo()} />}
      />
    </Routes>
  )
}
export default ContentRouter
