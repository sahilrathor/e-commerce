import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/auth/Auth'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import ProductCategoryPage from './pages/ProductCategoryPage'
import { useEffect, useState } from 'react'
import { getCookie } from './utils/sessionUtils'



export default function App() {

  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    const sessionToken = getCookie('Token');
    console.log(sessionToken);
    if (!sessionToken) {
      setAuthenticated(false)
    }
    if (sessionToken) {
      setAuthenticated(true)
    }
  }, []);


  
  return (
    <div className="w-full min-h-[100dvh] center-items justify-start flex-col bg-white ">
      {authenticated && <Navbar />}
      <Routes>
        <Route path='/' element={authenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path='/login' element={authenticated ? <Navigate to="/home" /> : <Auth />} />
        <Route path='/home' element={authenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path='/product/:id' element={authenticated ? <ProductDetails /> : <Navigate to="/login" />} />
        <Route path='/products/:category' element={<ProductCategoryPage />} />
        {/* <Route path='/products/:category' element={authenticated ? <ProductCategoryPage /> : <Navigate to="/login" />} /> */}
      </Routes>
      {authenticated && <Footer />}
    </div>
  )
}