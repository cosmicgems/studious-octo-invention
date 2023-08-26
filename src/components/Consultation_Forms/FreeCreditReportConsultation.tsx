import theme from '@/styles/theme/lightThemeOptions'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { grey } from '@mui/material/colors';

const FreeCreditReportConsultation = () => {

  const handleSubmit = () => {

  }

  return (
    <Box sx={{}} className=''>
      <div className='min-h-screen' style={{padding: theme.spacing(3),}}>

        <div style={{marginBlockEnd: theme.spacing(1)}}>
          <Typography variant='body1' sx={{}} className='' >
            Get some peace and start your Credit Zen journey today with a FREE online credit report consultation
          </Typography>
        </div>

        <div style={{marginBlockEnd: theme.spacing(3)}} className='flex flex-col justify-center items-center'>
          <div>
            <div className='flex flex-row items-center '>
              <div className='flex items-center'>
                <StarRoundedIcon />
              </div>
              <div className='flex items-center'>
                <Typography variant='body1' sx={{}} className=''>
                  Free Credit Score
                </Typography>
              </div>
            </div>
            <div className='flex flex-row items-center '>
              <div className='flex items-center'>
                <StarRoundedIcon />
              </div>
              <div className='flex items-center'>
                <Typography variant='body1' sx={{}} className=''>
                  Free Credit Report Summary
                </Typography>
              </div>
            </div>
            <div className='flex flex-row items-center '>
              <div className='flex items-center'>
                <StarRoundedIcon />
              </div>
              <div className='flex items-center'>
                <Typography variant='body1' sx={{}} className=''>
                  Free Credit Repair Recommendation
                </Typography>
              </div>
            </div>          
          </div>

        </div>

        <div className='text-center' style={{marginBlockEnd: theme.spacing(3)}}>
          <Typography variant='body1' sx={{}} className='font-bold'>
            Experian, TransUnion, and Equifax need a little information before we can pull those credit reports.
          </Typography>
        </div>

        <div className='text-center' style={{marginBlockEnd: theme.spacing(3)}}>
          <Typography variant='body2' sx={{}} className=''>
            Rest at ease, this is secure and won&apos;t damage your score.
          </Typography>
        </div>

        <div style={{paddingInline: theme.spacing(3), marginBlockEnd:theme.spacing(3)}}>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth variant='outlined' value='' label='First Name' sx={{marginBlockEnd: theme.spacing(2)}} className=''/>
            <TextField fullWidth variant='outlined' value='' label='Last Name' sx={{marginBlockEnd: theme.spacing(2)}} className=''/>
            <TextField fullWidth variant='outlined' value='' label='Email' sx={{marginBlockEnd: theme.spacing(2)}} className=''/>
            <TextField fullWidth variant='outlined' value='' label='Phone' sx={{marginBlockEnd: theme.spacing(2)}} className=''/>
            <TextField fullWidth variant='outlined' value='' label='Street Address' sx={{marginBlockEnd: theme.spacing(2)}} className=''/>
            <TextField fullWidth variant='outlined' value='' label='Zip Code' sx={{marginBlockEnd: theme.spacing(3)}} className=''/>
            <div className='w-full'>
              <Button fullWidth variant='contained' type='submit' size='large'>
                Start My Credit Zen Journey Now
              </Button>
            </div>
          </form>
        </div>

        <div className='text-center' style={{}}>
          <Typography variant='body2' sx={{}} className=''>
          By clicking &apos;Start My Credit Zen Journey Now&apos; I agree by electronic signature to: (1) be contacted by Credit Zen about credit repair or credit repair marketing by a live agent, artificial or prerecorded voice, SMS text at my residential or cellular number, dialed manually or by auto-dialer even if my phone number is on a do-not-call registry, and by email (consent to be contacted is not conditioned to purchase services); and (2) the <Typography variant='body2' sx={{color: '#0FCCF3'}} className='inline-block'> Privacy Policy</Typography> and <Typography variant='body2' sx={{color: '#0FCCF3'}} className='inline-block'>Terms of Use  </Typography>(including this <Typography variant='body2' sx={{color: '#0FCCF3'}} className='inline-block'>arbitration provision</Typography>). 
          </Typography>
        </div>


      </div>
    </Box>

  )
}

export default FreeCreditReportConsultation