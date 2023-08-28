import theme from '@/styles/theme/lightThemeOptions'
import { Button, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <div className='' style={{padding: theme.spacing(3)}}>

        <div className=' flex flex-col min-h-[75vh] items-center justify-end  content-end pb-12 text-center'>

            <Typography variant='h3' sx={{marginBlockEnd: theme.spacing(3)}} className='text-center'>
                Our Services
            </Typography>

            <Typography variant='h5' sx={{marginBlockEnd: theme.spacing(3)}} className=''>
                Discover the services that will give you peace.
            </Typography>

            <Typography variant='body1' sx={{marginBlockEnd: theme.spacing(3)}} className=''>
                Get a free credit report consultation to see which service is right for you
            </Typography>

            <div style={{marginBlockEnd: theme.spacing(2)}}>
                <Button variant='contained' sx={{}} className=''>
                    Get started
                </Button>
            </div>

            <Typography variant='body1' sx={{}} className=''>
                Or sign up online
            </Typography>

        </div>




    </div>
  )
}

export default Hero