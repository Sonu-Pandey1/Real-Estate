import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import "./App.css"
import Compaines from "./components/Companies/Compaines"
import Residencies from "./components/Residencies/Residencies"
import Value from "./components/Values/Value"
import Contact from "./components/Contact/Contact"
import GetStarted from "./components/GetStarted/GetStarted"
import Footer from "./components/Footer/Footer"
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
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
