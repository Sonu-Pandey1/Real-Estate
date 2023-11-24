import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import "./App.css"
import Compaines from "./components/Companies/Compaines"
import Residencies from "./components/Residencies/Residencies"
// import './App.css'

function App() {
 

  return (
    <div className="app">
      <div>
      <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Compaines/>
      <Residencies/>
    </div>
  )
}

export default App
