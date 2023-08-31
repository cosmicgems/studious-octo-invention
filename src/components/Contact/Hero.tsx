import theme from '@/styles/theme/lightThemeOptions'
import { Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <div className='text-center'>
        
        <div className='flex flex-col gap-3' style={{padding: theme.spacing(3)}}>

            <div style={{}}>
                <Typography variant='h3' sx={{}} className=''>
                    Contact Us
                </Typography>
            </div>

            <div>
                <Typography variant='body1' sx={{}} className=''>
                Sign up for our service, reach out to client support or log in to your dashboard.
                </Typography>
            </div>
            <div>
                <Typography variant='body1' sx={{}} className=''>
                We’re here to help.
                </Typography>
            </div>
            
        </div>

    </div>
  )
}

export default Hero