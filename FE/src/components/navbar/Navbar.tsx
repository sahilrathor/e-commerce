import { Dropdown } from 'antd';
import logo from '../../assets/logo.png';
import { useAppInfo } from '../../stores/app-info'
import UserProfileBtn from '../buttons/UserProfileBtn';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('');
  
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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search) {
      const searchQuery = search.trim();
      console.log(searchQuery);
    }
  }

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
      <form onSubmit={handleSearch}
        className={`h-8 bg-white flex justify-between items-center gap-1 px-2 py-0.5 cursor-pointer rounded-full tracking-wider w-56 hover:w-80 focus:w-80 transition-all duration-300 ${search ? 'w-80' : 'w-56'} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}>
        <input type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search'
          className='bg-transparent border-none text-slate-500 focus:outline-none w-full' />
        <MdSearch
          size={20}
          color='gray'
          className='cursor-pointer drop-shadow-lg'
        />
      </form>
      

      <UserProfileBtn />
    </nav>
  )
}

export default Navbar
