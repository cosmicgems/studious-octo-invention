import theme from '@/styles/theme/lightThemeOptions'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='' style={{paddingInline: theme.spacing(3), paddingBlock: theme.spacing(2), backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.light, }}>
      <div className='flex flex-row gap-3 items-center justify-center'>
        <div>
          <FacebookIcon sx={{fontSize: '2.5rem'}} />
        </div>
        <div>
          <InstagramIcon sx={{fontSize: '2.5rem'}} />
        </div>
        <div>
          <YouTubeIcon sx={{fontSize: '2.5rem'}} />
        </div>
      </div>
    </div>
  )
}

export default Footer