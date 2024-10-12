import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/auth/Auth'
import Home from './pages/Home'
import {  Routes, Route } from 'react-router-dom'
import useLoggedInUser from './stores/loggedInUser'



export default function App() {

  // const authenticated = useLoggedInUser(state => state.authenticated)
  const authenticated = true
  
  return (
    <div className="w-full min-h-[100dvh] center-items flex-col bg-gray-100 ">
      {authenticated && <Navbar /> }
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={authenticated ? <Home /> : <Auth />} />
      </Routes>
      {authenticated && <Footer /> }
    </div>
  )
}