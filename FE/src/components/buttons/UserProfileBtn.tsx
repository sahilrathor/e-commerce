import { Dropdown } from 'antd';
import { UserIcon } from '../../utils/icons';
import type { MenuProps } from 'antd';

const iconSize = 24;
const userName = 'Sahil';

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
        label: <span className='flex items-center gap-1 text-rose-500 font-semibold'>
            Logout
            </span>,
        // icon: <LogoutOutlined />,
    },
];

const UserProfileBtn = () => {
    return (
        <div className='w-max my-0.5 rounded-md px-2 py-0.5 center-items text-sm font-medium cursor-pointer relative group transition-all duration-50 flex items-center border border-white/80 text-white hover:bg-secondary group'
        >
            <Dropdown menu={{ items }} >
                <UserIcon size={iconSize} />
            </Dropdown>
        </div>
    )
}

export default UserProfileBtn