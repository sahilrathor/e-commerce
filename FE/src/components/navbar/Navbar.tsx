import { Dropdown } from 'antd';
import logo from '../../assets/logo.png';
import { useAppInfo } from '../../stores/app-info'
import UserProfileBtn from '../buttons/UserProfileBtn';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar';




const Navbar = () => {
  const navigate = useNavigate()
  
  const NavLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Products',
      // path: '/products',
      dropdown: [
        {
          label: <p onClick={() => navigate('/products/electronics')}>Electronics</p>,
          key: '1',
        },
        {
          label: <p onClick={() => navigate('/products/clothing')}>Clothing</p>,
          key: '2',
        },
        {
          label: <p onClick={() => navigate('/products/footwear')}>Footwear</p>,
          key: '3',
        },
        {
          label: <p onClick={() => navigate('/products/accessories')}>Accessories</p>,
          key: '4',
        },
      ],
    },
    {
      name: 'About',
      path: '/about',
    },
  ]

  const { name } = useAppInfo()
  return (
    <nav className='w-full h-14 bg-gray-100 text-slate-800 px-10 flex items-center justify-between rounded-b-sm relative'>
      <div className='flex items-center gap-5'>
        {/* logo */}
        <h1 className='text-2xl font-semibold flex items-center gap-1'>
          <img src={logo} alt="logo" className='block sm:hidden w-10 h-10 drop-shadow-lg' />
          <span
            className='sm:block hidden text-2xl md:text-3xl font-semibold text-primary tracking-wider drop-shadow-lg'
          >
            {name}
          </span>
        </h1>

        {/* links */}
        <ul className='flex items-center gap-2'>
          {NavLinks.map((item, index) => (
            <li key={index}
              className='text-sm font-semibold  px-1 py-0.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 cursor-pointer'
            >
              {item.dropdown ? (
                <Dropdown menu={{ items: item.dropdown }} placement="bottomLeft">
                  <span className='cursor-pointer'>{item.name}</span>
                </Dropdown>
              ) : (
                <p onClick={() => navigate(item.path)}>{item.name}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Search */}
      <SearchBar />
      

      <UserProfileBtn />
    </nav>
  )
}

export default Navbar
