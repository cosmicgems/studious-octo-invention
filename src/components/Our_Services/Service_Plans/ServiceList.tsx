import { features, services } from '@/assets/services'
import theme from '@/styles/theme/lightThemeOptions'
import { Typography } from '@mui/material'
import React from 'react'

const ServiceList = () => {
  return (
    <div>
      
      <div className='flex flex-row'>

        <div className='flex flex-col'>

          <div>
            <Typography variant='h6' sx={{}} className=''>
              Features
            </Typography>

            <div>
              <hr/>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='flex flex-col'>
              {features.map((f, i) => {
                return (
                  <div className='text-left' key={i.toString + f.name + 'featureOnly'} style={{marginBlockEnd: theme.spacing(3)}}>
                    <Typography variant='body2' sx={{}} className=''>
                      {f.name}
                    </Typography>
                  </div>
                )
              })}            
            </div> 
            {services.map((s, i) => {
              const {features} = s
              return(
                <div key={s.name} className='flex flex-col'>

                </div>
              )
            })}
           
          </div>


        </div>
      </div>
    </div>
  )
}

export default ServiceList