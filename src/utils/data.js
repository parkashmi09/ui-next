import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessIcon from '@mui/icons-material/Business';
import ShopIcon from '@mui/icons-material/Shop';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export const menuData = [
    { name: 'Home', icon: <HomeIcon />, path: '/' },
    {
        name: 'Users',
        icon: <PeopleAltIcon />,
        path: '/users',
        sub: [
            { name: 'Add Official User', path: '/users/add-official-user' },
            { name: 'View Users', path: '/users/view-users' },
            { name: 'Top Users', path: '/users/top-users' },
            { name: 'Push Notifications', path: '/users/push-notifications' },
        ]
    },
    {
        name: 'Host',
        icon: <HomeIcon />,
        path: '/host',
        sub: [
            { name: 'Approved Host', path: '/host/approved-host' },
            { name: 'Pending Host', path: '/host/pending-host' },
            { name: 'Rejected Host', path: '/host/rejected-host' },
            { name: 'Host Reports', path: '/host/host-reports' },
        ]
    },
    {
        name: 'Agency',
        icon: <BusinessIcon />,
        path: '/agency',
        sub: [
            { name: 'Add Agency', path: '/agency/add-agency' },
            { name: 'View Agency', path: '/agency/view-agency' },
            { name: 'Top Agency', path: '/agency/top-agency' },
            { name: 'Banned Agency', path: '/agency/banned-agency' },
            { name: 'Agency Reports', path: '/agency/agency-reports' },
        ]
    },
    {
        name: 'Shop',
        icon: <ShopIcon />,
        path: '/shop',
        sub: [
            { name: 'Add Room Wallpaper', path: '/shop/add-room-wallpaper' },
            { name: 'View Room Wallpaper', path: '/shop/view-room-wallpaper' },
            { name: 'Add Frames', path: '/shop/add-frames' },
            { name: 'View Frames', path: '/shop/view-frames' },
            { name: 'Add Vehicle', path: '/shop/add-vehicle' },
            { name: 'View Vehicle', path: '/shop/view-vehicle' },
            { name: 'Add Chat Bubble', path: '/shop/add-chat-bubble' },
            { name: 'View Chat Bubble', path: '/shop/view-chat-bubble' },
            { name: 'Add Special Id', path: '/shop/add-special-id' },
            { name: 'View Special Id', path: '/shop/view-special-id' },
            { name: 'Add Vip', path: '/shop/add-vip' },
            { name: 'View Vip', path: '/shop/view-vip' },
            { name: 'Add Svip', path: '/shop/add-svip' },
            { name: 'View Svip', path: '/shop/view-svip' },
            { name: 'Relationship', path: '/shop/relationship' },
            { name: 'Lock Room', path: '/shop/lock-room' },
            { name: 'Extra Seats', path: '/shop/extra-seats' },
        ]
    },
    {
        name: 'Gift',
        icon: <CardGiftcardIcon />,
        path: '/gift',
        sub: [
            { name: 'Add Gift Category', path: '/gift/add-gift-category' },
            { name: 'View Gift Category', path: '/gift/view-gift-category' },
            { name: 'Add Gift', path: '/gift/add-gift' },
            { name: 'View Gift', path: '/gift/view-gift' },
        ]
    },
    {
        name: 'Authentications',
        icon: <VerifiedUserIcon />,
        path: '/authentications',
        sub: [
            { name: 'Login', path: '/authentications/login' },
            { name: 'Register', path: '/authentications/register' },
            { name: 'Forgot Password', path: '/authentications/forgot-password' },
            { name: 'Verify Email', path: '/authentications/verify-email' },
            { name: 'New Password', path: '/authentications/new-password' },
            { name: 'Reset Succcess', path: '/authentications/reset-success' },
        ]
    },
  ];
  