import React from 'react';
import {  DownIcon } from "../../utils/icons";
import { useNavigate } from 'react-router-dom';

interface MenuItem {
    key: string;
    label: string;
    children?: MenuItem[];
    path?: string;
}


const menuItems: MenuItem[] = [
    {
        key: 'home',
        label: 'Home',
        path: '/home',
    },
    {
        key: 'products',
        label: 'Products',
        children: [
            {
                key: 'products-electronics',
                label: 'Electronics',
                path: '/products/electronics',
            },
            {
                key: 'products-clothing',
                label: 'Clothing',
                path: '/products/clothing',
            },
            {
                key: 'products-footwear',
                label: 'Footwear',
                path: '/products/footwear',
            },
            {
                key: 'products-beauty',
                label: 'Beauty & Health',
                path: '/products/beauty',
            },
        ],
    },
    {
        key: 'top-rated',
        label: 'Top Rated',
        children: [
            {
                key: 'top-rated-electronics',
                label: 'Top Electronics',
                path: '/top-rated/electronics',
            },
            {
                key: 'top-rated-clothing',
                label: 'Top Clothing',
                path: '/top-rated/clothing',
            },
        ],
    },
    {
        key: 'wardrobe',
        label: 'Wardrobe',
        children: [
            {
                key: 'wardrobe-kids',
                label: 'Kids',
                path: '/wardrobe/kids',
            },
            {
                key: 'wardrobe-men',
                label: 'Men',
                path: '/wardrobe/men',
            },
            {
                key: 'wardrobe-women',
                label: 'Women',
                path: '/wardrobe/women',
            },
            {
                key: 'wardrobe-accessories',
                label: 'Accessories',
                path: '/wardrobe/accessories',
            },
        ],
    },
    {
        key: 'new-arrivals',
        label: 'New Arrivals',
        children: [
            {
                key: 'new-arrivals-electronics',
                label: 'Electronics',
                path: '/new-arrivals/electronics',
            },
            {
                key: 'new-arrivals-clothing',
                label: 'Clothing',
                path: '/new-arrivals/clothing',
            },
        ],
    },
    {
        key: 'trending',
        label: 'Trending',
        children: [
            {
                key: 'trending-fashion',
                label: 'Trending Fashion',
                path: '/trending/fashion',
            },
            {
                key: 'trending-tech',
                label: 'Trending Tech',
                path: '/trending/tech',
            },
        ],
    },
];



const Menu: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (item: MenuItem ) => {
        if (item.path) {
            navigate(item.path);
        }
    }

    return (
        <div className='bg-white w-full shadow-md select-none center-items'>
            <ul className='flex justify-center items-center gap-0 w-4/5'>

                {menuItems.map((item, index) => (
                    <>
                    <li key={item.key} className='w-max my-0.5 rounded-md px-2 py-0.5 center-items text-sm font-medium text-slate-500 hover:text-primary hover:bg-slate-200/80 cursor-pointer relative group transition-all duration-50'
                        onClick={() => {
                            if (!item.children) {
                                if (item.path) {
                                    navigate(item.path);
                                }
                            }
                        }}
                    >{item.label}

                        {/* Dropdown Icon */}
                        {item.children && (
                            <span className='ml-0.5 -mr-1 group-hover:rotate-180 transition-all duration-50'>
                                <DownIcon size={12} />
                            </span>
                        )}
                        {/*  */}

                        {/* Dropdown Menu */}
                        {item.children && (
                            <ul className='absolute top-full left-0 w-max bg-white shadow-lg hidden group-hover:block rounded-md'
                            >
                                {item.children.map((child) => (
                                    <li key={child.key} className='m-0.5 rounded-md px-2 py-1 center-items text-sm font-medium text-slate-500 hover:text-secondary hover:bg-primary/30 cursor-pointer transition-all duration-50'
                                        onClick={() => handleClick(child)}
                                    >{child.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {/*  */}
                    </li>

                        {/* Divider */}
                        {index !== menuItems.length - 1 && (
                            <p className='mb-1 center-items font-medium text-primary/30'>|</p>
                        )}
                        {/*  */}
                    </>
                ))}
            </ul>
        </div>
    )
}

export default Menu;