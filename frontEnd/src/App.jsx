import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CurrentWeather from './components/CurrentWeather'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {


  return (
    <main className='w-full'>
         <Nav/>
         <Search/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
         </Routes>
         <Footer/>
  
    </main>
  )
}

export default App
