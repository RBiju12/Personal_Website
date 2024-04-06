import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Error from './pages/Error'
import Home from './pages/Home'
import Slider from './components/Slider'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Slider />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
       </Routes> 
    </>
  )
}

export default App
