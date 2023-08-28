import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button, Typography } from '@mui/material';
import theme from '@/styles/theme/lightThemeOptions';

const StatisticsComponent = () => {
  return (
    <div className='text-center min-h-screen flex flex-col' style={{padding: theme.spacing(3)}}> 

      <div className='grow items-center justify-center flex flex-col' style={{marginBlockEnd: theme.spacing(3)}}>
          img placeholder

        <div className='flex flex-row ' style={{marginBlockEnd: theme.spacing(3)}}>
          
          <div>
            <ArrowDropUpIcon />
          </div>
          
          <div>
            <Typography variant='h2' sx={{}} className=''>
              50 PTS
            </Typography>
          </div>

        </div>
      </div>

      <div className='grow-0' style={{marginBlockEnd: theme.spacing(3)}}>
        <Typography variant='body1' className='' sx={{}} >
          92% of our clients who saw their score increase saw an average improvement of 50 points while working with Credit Zen.
        </Typography>
      </div>

      <div className='grow-0' style={{marginBlockEnd: theme.spacing(3)}}>
        <Typography variant='body1' className='' sx={{}} >
          See how we count score improvement
        </Typography>
      </div>

      <div className='grow-0' style={{marginBlockEnd: theme.spacing(3)}}>
        <Button variant='contained' sx={{}} className=''>
          Sign up now
        </Button>
      </div>

      <div className='grow-0'>
        <Typography variant='body1' className='' sx={{}} >
          Or get your FREE consultation online
        </Typography>
      </div>

    </div>
  )
}

export default StatisticsComponent