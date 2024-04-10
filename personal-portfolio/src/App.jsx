import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Error from './pages/Error'
import Home from './pages/Home'
import Slider from './components/Slider'
import {Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <div className='bg-violet-800'>
      <button onClick={() => navigate('/')}>
      <h1 className='absolute top-3 left-10 text-white'>Rishan Biju</h1>
      </button>

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
    </div>
  )
}

export default App
