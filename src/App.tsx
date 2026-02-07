import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToHash } from './components/ScrollToHash'
import Home from './pages/Home'
import Events from './pages/Events'
import Register from './pages/Register'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
