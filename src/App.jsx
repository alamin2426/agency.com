
import './App.css'
import Banner from './components/Home/Banner/Banner'
import Galary from './components/Home/Galary/Galary'
import Home from './components/Home/Home'
import Mailsoten from './components/Home/Mailsoten/Mailsoten'
import Promotion from './components/Home/Promotion/Promotion'
import Servise from './components/Home/Servise/Servise'
import Header from './components/shard/Header/Header'

function App() {
  

  return (
    <>
     <Home></Home>
     <Header></Header>
     <Banner></Banner>
     <Servise></Servise>
     <Galary></Galary>
     <Promotion></Promotion>
     <Mailsoten></Mailsoten>
    </>
  )
}

export default App
