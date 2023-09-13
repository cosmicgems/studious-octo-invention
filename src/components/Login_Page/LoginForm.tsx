import theme from '@/styles/theme/lightThemeOptions'
import { Box, Button, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useState } from 'react'

const LoginForm = () => {

    const [credentialOne, setCredentialOne] = useState<string>("");
    const [credentialTwo, setCredentialTwo] = useState<string>("");
    const [button, setButton] = useState<string>("Login");
    const [signup, setSignup] = useState<boolean>(false);



    return (
                    <div className='h-[60vh]'>

                    <div className='flex flex-col justify-center items-center gap-6 h-full ' style={{marginBlock: theme.spacing(3)}}>


                        <div>
                        <Typography variant='h3' className='' sx={{}}>
                            Login
                        </Typography>
                        </div>

                        <div>
                        <Box sx={{}} className='flex flex-col gap-6'>
                            
                            <TextField 
                            sx={{}} 
                            variant="outlined" 
                            className='' 
                            value={credentialOne} 
                            onChange={(e)=>{setCredentialOne(e.target.value)}} 
                            label="Email or username" 
                            />
                            
                            <TextField 
                            sx={{}} 
                            variant="outlined" 
                            className='' 
                            value={credentialTwo} 
                            onChange={(e)=>{setCredentialTwo(e.target.value)}} 
                            label="Password" 
                            />
                            
                            <Button size="large" variant='contained' sx={{}} className=''>
                            {button}
                            </Button>


                        </Box>
                        </div>

                    </div>

                    </div>
    )
}

export default LoginForm