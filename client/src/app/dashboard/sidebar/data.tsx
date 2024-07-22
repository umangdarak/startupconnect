import { HomeIcon } from './icons/HomeIcon';
import { StatusIcon } from './icons/StatusIcon';
import { CreditIcon } from './icons/CreditIcon';
import { ArchiveIcon } from './icons/ArchiveIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import MessageIcon from '@mui/icons-material/Message';
export const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Status',
    icon: <StatusIcon />,
    link: '/admin/status',
  },
  {
    title: 'Archives',
    icon: <MessageIcon />,
    link: '/chat',
  },

  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
 
];