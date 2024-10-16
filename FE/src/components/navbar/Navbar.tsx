// import React, { useState } from 'react'
// import PrimaryBtn from '../buttons/PrimaryBtn'
// import OutlineBtn from '../buttons/OutlineBtn'
// import { WishlistIcon, ShoppingCartIcon } from '../../utils/icons';
// import { MdSearch } from "react-icons/md";
// import logo from '../../assets/logo.png';
// import Menu from './Menu';
// import UserProfileBtn from '../buttons/UserProfileBtn';
// import { useAppInfo } from '../../stores/app-info';

// const Navbar: React.FC = () => {
//   const { name } = useAppInfo()
//   const [isLogin, setIsLogin] = useState(true);
//   const [search, setSearch] = useState('');
//   const iconSize = 24;


//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (search) {
//       const searchQuery = search.trim();
//       console.log(searchQuery);
//     }
//   }

//   const openCart = () => {
//     console.log('Cart');
//   }

//   const openWishlist = () => {
//     console.log('Wishlist');
//   }




//   return (
//     <div className='absolute top-0 left-0 right-0 z-50'>
//       <div className={`w-full h-14 mt-0 bg-primary text-slate-50 px-10 flex justify-between items-center rounded-b-sm `}>
//         <h1 className='text-2xl font-semibold flex items-center gap-1'>
//           <img src={logo} alt="logo" className='w-9 h-9 drop-shadow-lg' />
//           <span className='text-xl font-semibold text-yellow drop-shadow-lg'>{name}</span>
//         </h1>

//         {/* Search */}
//         <form onSubmit={handleSearch}
//           className={`h-8 bg-slate-50  flex justify-between items-center gap-1 px-2 py-0.5 cursor-pointer rounded-full tracking-wider w-56 hover:w-80 focus:w-80 transition-all duration-300 ${search ? 'w-80' : 'w-56'}`}>
//           <input type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder='Search'
//             className='bg-transparent border-none text-slate-500 focus:outline-none w-full' />
//           <MdSearch
//             size={20}
//             color='gray'
//             className='cursor-pointer drop-shadow-lg'
//           // onClick={handleSearch}
//           />
//         </form>


//         <div className='flex items-center gap-2 w-48 justify-end'>


//           {/* Wishlist */}
//           {isLogin && <div
//             className='flex items-center gap-1 px-2 py-0.5 border border-white/80 cursor-pointer rounded-md text-white hover:bg-secondary group'
//             onClick={openWishlist} >
//             <WishlistIcon size={iconSize} />
//             <span className='text-sm font-semibold hidden group-hover:block'>Wishlist</span>
//           </div>}

//           {/* Cart */}
//           {isLogin && <div
//             className='flex items-center gap-1 px-2 py-0.5 border border-white/80 cursor-pointer rounded-md text-white hover:bg-secondary group transition-all duration-300'
//             onClick={openCart} >
//             <ShoppingCartIcon size={iconSize} />
//             <span className='text-sm font-semibold hidden group-hover:block'>Cart</span>
//           </div>}

//           {/* User */}
//           {isLogin &&
//             <UserProfileBtn />
//           }

//           {/* Login */}
//           {!isLogin && <OutlineBtn name='Login' onClick={() => setIsLogin(!isLogin)} />}

//           {/* Register */}
//           {!isLogin && <PrimaryBtn name='Register' onClick={() => setIsLogin(!isLogin)} />}
//         </div>

//       </div>
//       <Menu />
//     </div>
//   )
// }

// export default Navbar



import { Button } from 'antd';
import { Dropdown } from 'antd';
import logo from '../../assets/logo.png';
import { useAppInfo } from '../../stores/app-info'


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
        label: <a href="/products/electronics">Electronics</a>,
        key: '1',
      },
      {
        label: <a href="/products/clothing">Clothing</a>,
        key: '2',
      },
      {
        label: <a href="/products/footwear">Footwear</a>,
        key: '3',
      },
      {
        label: <a href="/products/accessories">Accessories</a>,
        key: '4',
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
  },
]



const Navbar = () => {
  const { name } = useAppInfo()
  return (
    <nav className='w-full h-14 bg-gray-100 text-slate-800 px-10 flex items-center gap-5 rounded-b-sm'>
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
      <ul className='flex items-center gap-4'>
        {NavLinks.map((item, index) => (
          <li key={index}
            className='text-sm font-semibold hover:text-primary transition-all duration-300'
          >
            {item.dropdown ? (
              <Dropdown menu={{ items: item.dropdown }} placement="bottomLeft">
                <span className='cursor-pointer'>{item.name}</span>
                {/* <a href={item.path}>{item.name}</a> */}
              </Dropdown>
            ) : (
              <a href={item.path}>{item.name}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
