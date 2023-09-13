import LoginForm from '@/components/Login_Page/LoginForm'
import SignupForm from '@/components/Login_Page/SignupForm'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { green } from '@mui/material/colors'

const SignupPage = () => {

  const [signup, setSignup] = useState<boolean>(false);



  return (
    <div className='flex flex-col justify-center items-center w-full'>
      
      {
        signup ? 
          <LoginForm />
        :
          <SignupForm />
      }



    
        <Button onClick={()=>{setSignup(!signup)}} sx={{color:green[500]}} className=''>
          Don&apos;t have an account? Sign up now!
        </Button>
    </div>
  )
}

export default SignupPage