import theme from '@/styles/theme/lightThemeOptions'
import { Box, Button, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useState, FormEventHandler, useEffect } from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'




const LoginForm = () => {

    const router = useRouter();

    const [credentialOne, setCredentialOne] = useState<string>("");
    const [credentialTwo, setCredentialTwo] = useState<string>("");
    const [button, setButton] = useState<string>("Login");
    const [signup, setSignup] = useState<boolean>(false);



    const handleSubmit:FormEventHandler<HTMLFormElement> = async(e:any) => {
        console.log(credentialOne, credentialTwo);
        e.preventDefault();

        const res = await signIn('credentials', {
            credentialOne, credentialTwo
        });
        console.log(res);
        
    }
    useEffect(() => {
        const checkSession = async () => {
        const session = await getSession();
        if (session) {
            const u = session.user
            console.log(u);

            router.push('/'); 
        }
        };

        checkSession();
    }, [router]);


    return (
                    <div className='h-[60vh]'>

                    <div className='flex flex-col justify-center items-center gap-6 h-full ' style={{marginBlock: theme.spacing(3)}}>


                        <div>
                        <Typography variant='h3' className='' sx={{}}>
                            Login
                        </Typography>
                        </div>

                        <div>
                            <form onSubmit={(e)=>{handleSubmit(e)}}>
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
                                    
                                    <Button size="large" type='submit' variant='contained' sx={{}} className=''>
                                    {button}
                                    </Button>


                                </Box>                                
                            </form>

                        </div>

                    </div>

                    </div>
    )
}

export default LoginForm