import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.component.jsx'
import Home from './components/home/Home.component'
import About from './components/about/About.component'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
