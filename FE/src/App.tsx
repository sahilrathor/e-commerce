import './App.css'
import Auth from './pages/auth/Auth'
import Home from './pages/Home'
import {  Routes, Route } from 'react-router-dom'
// import myTheme from './utils/myTheme'

export default function App() {
  return (
    <div className="w-full h-[100dvh] bg-indigo-700/90 text-slate-100 center-items">

        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/' element={<Home />} />
        </Routes>

    </div>
  )
}