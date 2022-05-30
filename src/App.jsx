import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import ContentRouter from './ContentRouter'

function App() {
  const [appState, setState] = useState([])

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/data'
    axios.get(apiUrl).then((resp) => {
      const data = resp.data
      setState(data)
    })
  }, [setState])
  // console.log(appState)
  return (
    <div className="App">
      <Header />
      <div className="container-fluid row">
        <Sidebar appState={appState} />
        <ContentRouter appState={appState} />
      </div>
    </div>
  )
}

export default App
