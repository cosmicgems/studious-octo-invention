import React, { useState } from 'react'
import {
  Typography,
  Button, 
} from '@mui/material'
import theme from '@/styles/theme/lightThemeOptions'
import { motion } from 'framer-motion'
import { grey } from '@mui/material/colors'

const CreditRepairVsCreditBuilding = () => {

  const [opacityRepair, setOpacityRepair] = useState(1);
  const [opacityBuild, setOpacityBuild] = useState(1);
  const [repair, setRepair] = useState(true);
  const [build, setBuild] = useState(true);


  return (
    <div className='min-h-screen' style={{paddingInline: theme.spacing(3), paddingBlock: theme.spacing(3)}}>
        <Typography sx={{marginBlockEnd: theme.spacing(3)}} variant='h4' className='text-center ' >
          Let&apos;s meditate on <Typography variant='h4' className='inline-block italic' sx={{}}>Credit Repair</Typography> and <Typography variant='h4' className='inline-block italic' sx={{}}>Credit Building</Typography> 
        </Typography>
        <Typography sx={{paddingInline: theme.spacing(3), marginBlockEnd: theme.spacing(6)}} className=' text-center' variant='body1' >
        Building credit and repairing credit are like tending to a garden – one involves nurturing and cultivating new growth, while the other focuses on pruning and revitalizing existing plants.
        </Typography>
        <div style={{marginBlockEnd: theme.spacing(6)}}>
          <div>
            <Typography variant='body2'  component='div' className=''>
              Credit Repair
            </Typography>
            <div className='p-1' style={{backgroundColor: grey[500], width:'100%', borderRadius: '10px', opacity: opacityRepair,}}>
              <motion.div 
              style={{height: '7vh', width:'14vh', backgroundColor: theme.palette.primary.main, borderRadius: '10px', }}
              drag="x"
              dragConstraints={{ left: 0, right: 255}}
              dragElastic={0.05}
              onDrag={(event, info) => {
                const newOpacity = 1 - (info.point.x / 400);
                setOpacityRepair(newOpacity);
                if(newOpacity <= .75) {
                  setBuild(false);
                }
              }}
              />            
            </div>

          </div>
          <div>
            <Typography variant='body2'  component='div' className=''>
              Credit Building
            </Typography>
            <div className='p-1' style={{backgroundColor: grey[500], width:'100%', borderRadius: '10px', opacity: opacityBuild, }}>
              <motion.div 
              style={{height: '7vh', width:'14vh', backgroundColor: theme.palette.secondary.main, borderRadius: '10px'}}
              drag="x"
              dragConstraints={{ left: 0, right: 255}}
              dragElastic={0.05}
              onDrag={(event, info) => {                
                const newOpacity = 1 - (info.point.x / 500);
                
                if(newOpacity <= .75) {
                  setRepair(false);
                }
                setOpacityBuild(newOpacity);
                
              }}
              />       
            </div>
            
          </div>
        </div>
        <div className='text-center'>
          <Typography variant='body1' sx={{marginBlockEnd: theme.spacing(3)}} className='' >
            With Credit Zen, you can get some solitude. We have you covered with credit building, and repair.
          </Typography>
          <Typography variant='body2' sx={{marginBlockEnd: theme.spacing(3)}} className='' >
          Find out what your credit needs, with a FREE Credit Assessment.
          </Typography>          
        </div>
        <div className='text-center' >
          <Button variant='contained' >
            Start Now
          </Button>
        </div>
    </div>
  )
}

export default CreditRepairVsCreditBuilding