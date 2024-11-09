import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/auth/Auth'
import Home from './pages/Home'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import ProductCategoryPage from './pages/ProductCategoryPage'
import { useEffect } from 'react'
import { getCookie } from './utils/sessionUtils'
import { Helmet } from 'react-helmet'
import { useAppInfo } from './stores/app-info'
import CartDrawer from './pages/CartDrawer'
import { Spin } from 'antd'
import About from './pages/About'
import Categories from './pages/Categories'



export default function App() {
  const { name } = useAppInfo();
  const navigate = useNavigate()
  const isAuthenticated = useAppInfo(state => state.isAuthenticated)
  const setIsAuthenticated = useAppInfo(state => state.setIsAuthenticated)

  useEffect(() => {
    const sessionToken = getCookie('Token');
    if (!sessionToken) {
      navigate('/login')
      setIsAuthenticated(false)
    }
    if (sessionToken) {
      setIsAuthenticated(true)
    }
  }, []);
  



  if (!isAuthenticated && window.location.pathname !== '/login') {
    return (
      <div className='w-full h-full min-h-[100dvh] center-items'>
        <Spin size='large' />
      </div>
    )
  }



  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="w-full min-h-[100dvh] center-items justify-start flex-col bg-white ">
        {isAuthenticated && <Navbar />}
        <CartDrawer />
        <Routes>
          <Route path='/' element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path='/login' element={isAuthenticated ? <Navigate to="/home" /> : <Auth />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products/:category' element={<ProductCategoryPage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/about' element={<About />} />
        </Routes>
        {isAuthenticated && <Footer />}
      </div>
    </>
  )
}