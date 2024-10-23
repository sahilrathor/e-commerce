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
import { Helmet } from 'react-helmet'
import { useAppInfo } from './stores/app-info'



export default function App() {
  const { name } = useAppInfo();

  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    const sessionToken = getCookie('Token');
    if (!sessionToken) {
      setAuthenticated(false)
    }
    if (sessionToken) {
      setAuthenticated(true)
    }
  }, [window.location.pathname]);
  
  console.log(authenticated);



  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="w-full min-h-[100dvh] center-items justify-start flex-col bg-white ">
        {authenticated && <Navbar />}
        <Routes>
          <Route path='/' element={authenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path='/login' element={authenticated ? <Navigate to="/home" /> : <Auth />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products/:category' element={<ProductCategoryPage />} />
        </Routes>
        {authenticated && <Footer />}
      </div>
    </>
  )
}