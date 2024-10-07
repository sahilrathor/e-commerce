import './App.css'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/auth/Auth'
import Home from './pages/Home'
import {  Routes, Route } from 'react-router-dom'
// import myTheme from './utils/myTheme'

export default function App() {
  return (
    <div className="w-full min-h-[100dvh] bg-gray-100 pb-20 center-items">
      <Navbar />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}