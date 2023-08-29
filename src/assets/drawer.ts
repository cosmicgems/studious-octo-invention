import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TroubleshootRoundedIcon from '@mui/icons-material/TroubleshootRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

interface Page {
    name: string,
    path: string,
    icon: SvgIconComponent,
}

export const drawerPages : Page[] = [
    {
        name: 'Home',
        path: '/',
        icon: HomeRoundedIcon
    },
    {
        name: 'Our Services',
        path: '/our-services',
        icon: TroubleshootRoundedIcon 
    },
    {
        name: 'Credit Improvement',
        path: 'credit-improvement',
        icon: TrendingUpRoundedIcon
    },
    {
        name: 'About Us',
        path: '/about',
        icon: InfoRoundedIcon 
    },
    {
        name: 'Contact Us',
        path: '/contact',
        icon: PhoneRoundedIcon 
    },
    {
        name: 'Client Login',
        path: '/login',
        icon: LoginRoundedIcon
    },
] 