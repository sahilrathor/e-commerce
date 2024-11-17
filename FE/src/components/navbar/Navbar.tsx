import { Dropdown } from 'antd';
import { useAppInfo } from '../../stores/app-info'
import UserProfileBtn from '../buttons/UserProfileBtn';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { ItemType } from 'antd/es/menu/interface';
import { MenuOutlined } from '@ant-design/icons';




const Navbar = () => {
  const navigate = useNavigate()

  const NavLinks = [
    {
      label: 'Home',
      key: '1',
      path: '/',
    },
    {
      label: 'Products',
      key: '2',
      // path: '/products',
      children: [
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
      label: <Link to='/about'>About</Link>,
      key: '3',
      path: '/about',
    },
  ]

  const { name } = useAppInfo()
  return (
    <nav className='w-full h-14 bg-gray-100 text-slate-800 px-5 sm:px-10 flex items-center justify-between rounded-b-sm relative'>
      <div className='flex items-center gap-5'>
        {/* logo */}
        <h1 className='text-2xl font-semibold flex items-center gap-1'>
          <div className="items-center gap-1 flex sm:hidden drop-shadow-lg">
            <Dropdown menu={{ items: NavLinks as ItemType[] }}>
              <MenuOutlined size={20} />
            </Dropdown>
          </div>
          <span
            className='sm:block hidden text-2xl md:text-3xl font-semibold text-primary tracking-wider drop-shadow-lg'
          >
            {name}
          </span>
        </h1>

        {/* links */}
        <ul className='items-center gap-2 hidden sm:flex'>
          {NavLinks.map((item, index) => (
            <li key={index}
              className='text-sm font-semibold  px-1 py-0.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 cursor-pointer'
            >
              {item.children ? (
                <Dropdown menu={{ items: item.children }} placement="bottomLeft">
                  <span className='cursor-pointer'>{item.label}</span>
                </Dropdown>
              ) : (
                <p onClick={() => navigate(item.path)}>{item.label}</p>
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
