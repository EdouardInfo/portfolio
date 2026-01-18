import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CarGame from './pages/CarGame'
import StarWarsProject from './pages/StarWarsProject'
import StarWarsEtape1 from './pages/StarWarsEtape1'
import StarWarsEtape2 from './pages/StarWarsEtape2'
import StarWarsEtape3 from './pages/StarWarsEtape3'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/processing-l1" element={<CarGame />} />
          <Route path="/starwars" element={<StarWarsProject />} />
          <Route path="/starwars/etape1" element={<StarWarsEtape1 />} />
          <Route path="/starwars/etape2" element={<StarWarsEtape2 />} />
          <Route path="/starwars/etape3" element={<StarWarsEtape3 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
