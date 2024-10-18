import { Dropdown } from 'antd';
import { UserIcon } from '../../utils/icons';
import type { MenuProps } from 'antd';
import { removeCookie } from '../../utils/sessionUtils';

const iconSize = 24;
const userName = 'Sahil';

const UserProfileBtn = () => {

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
            label: 'My Orders',
            // icon: <SettingOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '7',
            label: 'Settings',
            // icon: <SettingOutlined />,
        },
        {
            key: '8',
            label:
                <span className='flex items-center gap-1 text-rose-500 font-semibold' onClick={handleLogout}>
                    Logout
                </span>,
            // icon: <LogoutOutlined />,
        },
    ];

    function handleLogout() {
        removeCookie('Token');
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