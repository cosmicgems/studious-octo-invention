import React from 'react'
import { Typography } from '@mui/material'
import theme from '@/styles/theme/lightThemeOptions'

const CreditScoreCostToYouCalculator = () => {
  return (
    <div>
      
      <div className='' style={{borderRadius: '10px', borderWidth: '3px', borderStyle:'solid', borderColor: theme.palette.primary.main, paddingInline: theme.spacing(2), backgroundColor: '#fff', padding:theme.spacing(3)}}>
          <div style={{marginBlockEnd: theme.spacing(4)}}>
            <Typography variant='h6' component='div' sx={{}} className=''>
              Credit Score Type Placeholder
            </Typography>
          </div>
          <div style={{borderRadius: '10px', borderWidth: '3px', borderStyle:'solid', borderColor: theme.palette.primary.main, marginBlockEnd: theme.spacing(3)}}>
            Credit Slider
          </div>
          <div style={{borderRadius: '10px', borderWidth: '3px', borderStyle:'solid', borderColor: theme.palette.primary.main, marginBlockEnd: theme.spacing(3)}}>
            Credit Situation PlaceHolder Make component
          </div>

          <div className='flex flex-col ' style={{marginBlockEnd: theme.spacing(3)}}>

            <div className='flex flex-row items-center' style={{marginBlockEnd: theme.spacing(2)}}>
              
              <div className='w-1/2'>
                <Typography variant='body1' sx={{}} className=''>
                  Placeholder
                </Typography>
              </div>
              <div className='w-1/2' style={{borderRadius: '10px', borderWidth: '3px', borderStyle:'solid', borderColor: theme.palette.primary.main,}}>
                <div className='text-center'>
                  <Typography variant='h6' sx={{}} className='text-bold'>
                    $X,XXX
                  </Typography>
                </div>
              </div>

              


            </div>

            <div className='flex flex-row items-center' style={{marginBlockEnd: theme.spacing(2)}}>
            
              <div className='w-1/2 '>
                <Typography variant='body1' sx={{}} className=''>
                  Placeholder
                </Typography>
              </div>
              <div className='w-1/2'>
                <div className='text-center' style={{borderRadius: '10px', borderWidth: '3px', borderStyle:'solid', borderColor: theme.palette.primary.main,}}>
                  <Typography variant='h6' sx={{}} className='text-bold'>
                    $X,XXX
                  </Typography>
                </div>
              </div>   

            </div>

            <div className='flex flex-row items-center' style={{marginBlockEnd: theme.spacing(2)}}>

              <div className='w-1/2'>
                <Typography variant='body1' sx={{}} className=''>
                  Placeholder
                </Typography>
              </div>
              <div className='w-1/2'>
                <div className='text-center' style={{borderRadius: '10px', borderWidth: '3px', borderStyle:'solid', borderColor: theme.palette.primary.main,}}>
                  <Typography variant='h6' sx={{}} className='text-bold'>
                    $X,XXX
                  </Typography>
                </div>
              </div>

            </div>

          </div>

          <div>
            <Typography variant='body2' sx={{}} className='text-center'>
              Disclaimer: The average personal loan amount is based on data from TranUnion. The 5 year personal loan APRS are estimated based on loan amount of $8,085 and FICO scores between 300 and 850. Calculators were made using the Bankrate calculator on Oct 6, 2022.
            </Typography>
          </div>

        </div>
    </div>
  )
}

export default CreditScoreCostToYouCalculator