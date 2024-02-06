import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Projects'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'


function App() {


  return (
    <BrowserRouter>
    
      <NavBar />

    <Container customClass="min-height">
      
      <Routes>
        
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Project />}></Route>
        <Route path='/company' element={<Company />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/newproject' element={<NewProject />}></Route>

      </Routes>
      
    </Container>

      <Footer />

    </BrowserRouter>
  )
}

export default App
