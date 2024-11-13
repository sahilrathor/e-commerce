import { Dropdown } from 'antd';
import { UserIcon } from '../../utils/icons';
import type { MenuProps } from 'antd';
import { removeCookie } from '../../utils/sessionUtils';
import useCartDrawerStore from '../../stores/UseCartDrawerStore';
import { useAppInfo } from '../../stores/app-info';
import { useNavigate } from 'react-router-dom';

const iconSize = 24;
const userName = 'Sahil';

const UserProfileBtn = () => {
    const navigate = useNavigate();
    const { setOpen } = useCartDrawerStore()
    const setIsAuthenticated = useAppInfo(state => state.setIsAuthenticated)

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <span className='flex items-center gap-1'>{userName}</span>,
            // icon: <UserIcon />,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Profile',
            onClick: ()=> navigate('/user-profile') ,
        },
        {
            key: '3',
            label: 'Billing',
            disabled: true,
        },
        {
            key: '4',
            label: 'Become a seller',
            // icon: <SettingOutlined />,
        },
        {
            key: '5',
            label: 'My Wishlist',
            // icon: <SettingOutlined />,
        },
        {
            key: '6',
            label: 'Cart',
            onClick: handleCart,
        },  
        {
            key: '7',
            label: 'My Orders',
            // icon: <SettingOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '8',
            label: 'Settings',
            // icon: <SettingOutlined />,
        },
        {
            key: '9',
            label:
                <span className='flex items-center gap-1 text-rose-500 font-semibold' onClick={handleLogout}>
                    Logout
                </span>,
            // icon: <LogoutOutlined />,
        },
    ];

    function handleCart(){
        setOpen(true)
    }   

    function handleLogout() {
        removeCookie('Token');
        setIsAuthenticated(false)
        window.location.href = '/login';
    }

    return (
        <div className='bg-gray-200 w-max aspect-square rounded-full p-1 my-0.5 center-items text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 cursor-pointer relative group transition-all duration-50 flex items-center hover:bg-gray-300 group hover:shadow-lg'
        >
            <Dropdown menu={{ items }}>
                <UserIcon size={iconSize} />
            </Dropdown>
        </div>
    )
}

export default UserProfileBtn