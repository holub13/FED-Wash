import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import ContentRouter from './ContentRouter'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid row">
        <Sidebar />
        <ContentRouter />
      </div>
    </div>
  )
}

export default App
