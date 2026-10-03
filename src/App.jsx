import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectsDetail'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      {/* <Link/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail /> } />
      </Routes>

      <Footer />
    </div>
  )
}