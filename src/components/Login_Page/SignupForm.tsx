import theme from '@/styles/theme/lightThemeOptions'
import { Box, Button, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useState, useEffect } from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { states } from '@/assets/states'
import axios from "axios"
import { Dayjs } from 'dayjs';

const SignupForm = () => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<any>({
        email: "",
        confirmEmail: "",
    });
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<any>({
        password: "",
        confirm: "",
    })
    const [phone, setPhone] = useState<any>({
        sequence_one: "",
        sequence_two: "",
        sequence_three: "",
    });
    const [address, setAddress] = useState<any>({
        line_one: "",
        line_two: "",
        city: "",
        state: [],
        zip: "",
    });
    const [birthDate, setBirthDate] = useState<any>({
        month: 0,
        day: 0,
        year: 0,
    })
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [social, setSocial] = useState<any>({
        sequence_one: "",
        sequence_two: "",
        sequence_three: "",
    })
    const [button, setButton] = useState<any>({
        forward: "Next",
        backward: "Back",
        review: "Review",
        submit: "Submit"
    });
    const [formPage, setFormPage] = useState<any>({
        one: true, 
        two: false,
        three: false,
        four: false,
    })
    const [ready, setReady]= useState<boolean>(false);
    const [form, setForm] = useState<any>({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: {
            sequence_one: "",
            sequence_two: "",
            sequence_three: ""
        },
        address: {
            line_one: "",
            line_two: "",
            city: "",
            state: [],
            zip: "",
        },
        birthdate: {
            month: 0,
            day: 0,
            year: 0
        },
        social: {
            sequence_one: "",
            sequence_two: "",
            sequence_three: "",
        }

    })
    const [signup, setSignup] = useState<boolean>(false);

    

    
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    


    useEffect(()=> {
        setForm({...form,firstName, lastName, username, email:email.email,
            address:{
                line_one: address.line_one,
                line_two: address.line_two,
                city: address.city,
                state: address.state,
                zip: address.zip
            },
            phone:{
                sequence_one: phone.sequence_one,
                sequence_two: phone.sequence_two,
                sequence_three: phone.sequence_three
            },
            birthdate: {
                month: birthDate.month,
                day: birthDate.day,
                year: birthDate.year
            },
            social: {
                sequence_one: social.sequence_one,
                sequence_two: social.sequence_two,
                sequence_three: social.sequence_three
            }
        })

        console.log(form);
        
        
    }, [firstName, lastName, username, email, address.line_one, address.line_two, address.city, address.state, address.zip, social.sequence_one, social.sequence_two, social.sequence_three, phone.sequence_one, phone.sequence_two, phone.sequence_three, birthDate.month, birthDate.day, birthDate.year]);

    const handleSubmit = async(e:any) => {
        e.preventDefault()
        // setReady(false);
        const registrationForm = {
            firstName, lastName,
            email, username, address,
            phone, social, birthDate
        }
        const signup = await axios.post("/api/auth/signup", {registrationForm})
        console.log("Submit the form.", signup.data);
        
    }



    return (
                    <div className=' w-[100%]'>

                        <div className='flex flex-col justify-center items-center gap-6 h-full  w-[100%]' style={{marginBlock: theme.spacing(3)}}>


                            <div>
                                {
                                    ready ? 
                                    <div className='flex flex-col justify content center items-center text-center' style={{padding:theme.spacing(3)}}>
                                        <Typography variant='h3' sx={{}} className=''>
                                            Verify Information
                                        </Typography>
                                        <Typography variant='body2' className='' sx={{}}>
                                            This avoids erroneous personal information being registered with the credit bureau.
                                        </Typography>                                    
                                    </div>
                                    :
                                        <Typography variant='h3' className='' sx={{}}>
                                            Sign Up
                                        </Typography>
                                }

                            </div>

                            <div className='w-full'>

                                {
                                    formPage.one &&
                                        <Box  sx={{paddingInline: theme.spacing(3)}} className='flex flex-col gap-6 '>

                                            <TextField 
                                            fullWidth
                                            sx={{}} 
                                            variant="outlined" 
                                            className='w-full' 
                                            value={firstName} 
                                            onChange={(e)=>{setFirstName(e.target.value)}} 
                                            label="First Name" 
                                            />
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="outlined" 
                                            className='' 
                                            value={lastName} 
                                            onChange={(e)=>{setLastName(e.target.value)}} 
                                            label="Last Name" 
                                            />

                                            <TextField 
                                            fullWidth
                                            sx={{}} 
                                            variant="outlined" 
                                            className='w-full' 
                                            value={username} 
                                            onChange={(e)=>{setUsername(e.target.value)}} 
                                            label="Username" 
                                            />

                                            <TextField 
                                            fullWidth
                                            sx={{}} 
                                            variant="outlined" 
                                            className='w-full' 
                                            value={email.email} 
                                            onChange={(e)=>{setEmail({...email,email: e.target.value})}} 
                                            label="Email" 
                                            />
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="outlined" 
                                            className='' 
                                            value={email.confirmEmail} 
                                            onChange={(e)=>{setEmail({...email,confirmEmail:e.target.value})}} 
                                            label="Confirm Email" 
                                            />

                                            <div className='flex flex-row justify-center items-center gap-3'>
                                                {
                                                    formPage > 1 &&
                                                    <Button size="large" onClick={()=>{formPage - 1}} variant='contained' sx={{}} className='w-1/2'>
                                                        {button.backward}
                                                    </Button>                                    
                                                }

                                                <Button size="large" onClick={()=>{setFormPage({one:false, two:true})}} variant='contained' sx={{}} className='w-1/2'>
                                                    {button.forward}
                                                </Button>
                                            </div>



                                        </Box>                                
                                }

                                {
                                    formPage.two &&
                                        <Box  sx={{paddingInline: theme.spacing(3)}} className='flex flex-col gap-6 '>

                                            <div className='flex flex-col gap-3'>
                                                <Typography variant='body1' className='text-bold' sx={{}}>
                                                    Phone
                                                </Typography>
                                                
                                                <div className='flex justify-center items-center gap-1'>
                                                    <Typography variant='h5' sx={{}} className=''>
                                                        &#40;
                                                    </Typography>
                                                    <TextField 
                                                    fullWidth
                                                    sx={{}} 
                                                    variant="outlined" 
                                                    className='w-full' 
                                                    value={phone.sequence_one} 
                                                    onChange={(e)=>{setPhone({...phone,sequence_one:e.target.value})}} 
                                                    label="123" 
                                                    />
                                                    <Typography variant='h5' sx={{}} className=''>
                                                        &#41;&nbsp;&nbsp;
                                                    </Typography>
                                                    <TextField 
                                                    fullWidth
                                                    sx={{}} 
                                                    variant="outlined" 
                                                    className='w-full' 
                                                    value={phone.sequence_two} 
                                                    onChange={(e)=>{setPhone({...phone, sequence_two:e.target.value})}} 
                                                    label="456" 
                                                    />
                                                    <Typography variant='h6' sx={{}} className=''>
                                                        -
                                                    </Typography>
                                                    <TextField 
                                                    fullWidth
                                                    sx={{}} 
                                                    variant="outlined" 
                                                    className='w-full' 
                                                    value={phone.sequence_three} 
                                                    onChange={(e)=>{setPhone({...phone, sequence_three:e.target.value})}} 
                                                    label="7890" 
                                                    />
                                                    
                                                </div>                                            
                                            </div>
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="outlined" 
                                            className='' 
                                            value={address.line_one} 
                                            onChange={(e)=>{setAddress({...address, line_one:e.target.value})}} 
                                            label="Address line one" 
                                            />
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="outlined" 
                                            className='' 
                                            value={address.line_two} 
                                            onChange={(e)=>{setAddress({...address, line_two:e.target.value})}} 
                                            label="Address line two" 
                                            />
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="outlined" 
                                            className='' 
                                            value={address.city} 
                                            onChange={(e)=>{setAddress({...address, city:e.target.value})}} 
                                            label="City" 
                                            />

                                            <div className='flex justify-center items-center gap-3'>
                                            <FormControl sx={{ m: 1, width: 300 }}>
                                                <InputLabel id="demo-multiple-checkbox-label">State</InputLabel>
                                                <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                value={address.state}
                                                onChange={(e)=>{setAddress({...address,state:e.target.value})}}
                                                input={<OutlinedInput label="State" />}
                                                MenuProps={MenuProps}
                                                >
                                                {states.map((state) => (
                                                    <MenuItem key={state.name} value={state.name}>
                                                    <Checkbox  checked={address.state?.indexOf(state.name) > -1} />
                                                    <ListItemText primary={state.name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                                
                                                <TextField 
                                                sx={{}} 
                                                variant="outlined" 
                                                className='w-3/5' 
                                                value={address.zip} 
                                                onChange={(e)=>{setAddress({...address, zip:e.target.value})}} 
                                                label="Zipcode" 
                                                />
                                            </div>


                                            <div className='flex flex-row justify-center items-center gap-3'>
                                                {
                                                    formPage.two &&
                                                    <Button size="large" onClick={()=> {setFormPage({two: false, one: true})}}  variant='contained' sx={{}} className='w-1/2'>
                                                        {button.backward}
                                                    </Button>                                    
                                                }

                                                    <Button size="large"  variant='contained' onClick={()=>{setFormPage({two:false, three: true})}} className='w-1/2'>
                                                        {button.forward}
                                                    </Button>      
                                            </div>



                                        </Box>                                
                                }

                                {
                                    formPage.three &&
                                        <Box  sx={{paddingInline: theme.spacing(3)}} className='flex flex-col gap-6 '>
                                            
                                            <div className='flex justify-center items-center gap-1 text-center'>
                                                <TextField 
                                                fullWidth
                                                sx={{}} 
                                                variant="outlined" 
                                                className='w-full' 
                                                value={social.sequence_one} 
                                                onChange={(e)=>{setSocial({...social,sequence_one:e.target.value})}} 
                                                label="SSN #" 
                                                />
                                                <Typography variant='h6' sx={{}} className=''>
                                                    -
                                                </Typography>
                                                <TextField 
                                                fullWidth
                                                sx={{}} 
                                                variant="outlined" 
                                                className='w-full text-center' 
                                                value={social.sequence_two} 
                                                onChange={(e)=>{setSocial({...social,sequence_two:e.target.value})}} 
                                                label="" 
                                                />
                                                <Typography variant='h6' sx={{}} className=''>
                                                    -
                                                </Typography>
                                                <TextField 
                                                fullWidth
                                                sx={{}} 
                                                variant="outlined" 
                                                className='w-full' 
                                                value={social.sequence_three} 
                                                onChange={(e)=>{setSocial({...social, sequence_three:e.target.value})}} 
                                                label="" 
                                                />
                                                
                                            </div>
                                            <TextField 
                                            fullWidth
                                            sx={{}} 
                                            variant="outlined" 
                                            className='w-full' 
                                            value={password.password} 
                                            onChange={(e)=>{setPassword({password:e.target.value})}} 
                                            label="Password" 
                                            />
                                            <TextField 
                                            fullWidth
                                            sx={{}} 
                                            variant="outlined" 
                                            className='w-full' 
                                            value={password.confirm} 
                                            onChange={(e)=>{setPassword({confirm:e.target.value})}} 
                                            label="Confirm Password" 
                                            />


                                            <DatePicker onChange={(newValue)=>{setBirthDate({month: newValue.$M, day:newValue.$D, year: newValue.$y }) ; console.log(birthDate);setValue(newValue)}} />

                                            <div className='flex flex-row justify-center items-center gap-3'>
                                                {
                                                    formPage.three &&
                                                    <Button size="large" onClick={()=> {setFormPage({two: true, three: false})}}  variant='contained' sx={{}} className='w-1/2'>
                                                        {button.backward}
                                                    </Button>                                    
                                                }

                                                    <Button size="large"  variant='contained' onClick={()=>{setFormPage({three:false}); setReady(true)}} className='w-1/2'>
                                                        {button.review}
                                                    </Button>      
                                            </div>



                                        </Box>                                
                                }

                                {
                                    ready &&
                                    <Box  sx={{paddingInline: theme.spacing(3)}} className='flex flex-col gap-6 '>
                                        <div>
                                            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                                                <TextField disabled variant='filled' sx={{}} className='' value={form.firstName} label="First Name" />
                                                <TextField disabled variant='filled' sx={{}} className='' value={form.lastName} label="Last Name" />
                                                <TextField disabled variant='filled' sx={{}} className='' value={form.username} label="Username" />
                                                <TextField disabled variant='filled' sx={{}} className='' value={form.email} label="Email" />
                                            <div className='flex flex-col gap-3'>
                                                <Typography variant='body1' className='text-bold' sx={{}}>
                                                    Phone
                                                </Typography>
                                                
                                                <div className='flex justify-center items-center gap-1'>
                                                    <Typography variant='h5' sx={{}} className=''>
                                                        &#40;
                                                    </Typography>
                                                    <TextField 
                                                    fullWidth
                                                    sx={{}} 
                                                    variant="filled" 
                                                    disabled
                                                    className='w-full' 
                                                    value={form.phone.sequence_one} 
                                                    label="123" 
                                                    />
                                                    <Typography variant='h5' sx={{}} className=''>
                                                        &#41;&nbsp;&nbsp;
                                                    </Typography>
                                                    <TextField 
                                                    fullWidth
                                                    sx={{}} 
                                                    variant="filled"
                                                    disabled 
                                                    className='w-full' 
                                                    value={form.phone.sequence_two} 
                                                    label="456" 
                                                    />
                                                    <Typography variant='h6' sx={{}} className=''>
                                                        -
                                                    </Typography>
                                                    <TextField 
                                                    fullWidth
                                                    sx={{}} 
                                                    variant="filled"
                                                    disabled 
                                                    className='w-full' 
                                                    value={form.phone.sequence_three} 
                                                    label="7890" 
                                                    />
                                                    
                                                </div>                                            
                                            </div>
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="filled"
                                            disabled 
                                            className='' 
                                            value={form.address.line_one} 
                                            label="Address line one" 
                                            />
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="filled" 
                                            disabled
                                            className='' 
                                            value={form.address.line_two} 
                                            label="Address line two" 
                                            />
                                            
                                            <TextField 
                                            sx={{}} 
                                            variant="filled" 
                                            disabled
                                            className='' 
                                            value={form.address.city} 
                                            label="City" 
                                            />

                                            <div className='flex justify-center items-center gap-3'>
                                            <FormControl sx={{ m: 1, width: 300 }}>
                                                <InputLabel id="state-checkbox-label">State</InputLabel>
                                                <Select
                                                disabled
                                                id="state-checkbox"
                                                value={form.address.state}
                                                input={<OutlinedInput label="State" />}
                                                MenuProps={MenuProps}
                                                >
                                                {states.map((state) => (
                                                    <MenuItem key={state.name} value={state.name}>
                                                    <Checkbox  checked={address.state.indexOf(state.name) > -1} />
                                                    <ListItemText primary={state.name} />
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                                
                                                <TextField 
                                                sx={{}} 
                                                disabled
                                                variant="filled" 
                                                className='w-3/5' 
                                                value={form.address.zip} 
                                                label="Zipcode" 
                                                />
                                            </div>                                            
                                            <div className='flex justify-center items-center gap-1 text-center'>
                                                <TextField 
                                                fullWidth
                                                sx={{}} 
                                                variant="filled" 
                                                disabled
                                                className='w-full' 
                                                value={form.phone.sequence_one} 
                                                label="SSN #" 
                                                />
                                                <Typography variant='h6' sx={{}} className=''>
                                                    -
                                                </Typography>
                                                <TextField 
                                                fullWidth
                                                sx={{}} 
                                                variant="filled"
                                                disabled 
                                                className='w-full text-center' 
                                                value={form.phone.sequence_two} 
                                                label="" 
                                                />
                                                <Typography variant='h6' sx={{}} className=''>
                                                    -
                                                </Typography>
                                                <TextField 
                                                fullWidth
                                                sx={{}} 
                                                variant="filled"
                                                disabled 
                                                className='w-full' 
                                                value={form.phone.sequence_three} 
                                                label="" 
                                                />
                                                
                                            </div>


                                            <DatePicker value={value} disabled />


                                            <div className='flex flex-row justify-center items-center gap-3'>
                                                {
                                                    ready &&
                                                    <Button size="large" onClick={()=> {setFormPage({ three: true}); setReady(false)}}  variant='contained' sx={{}} className='w-1/2'>
                                                        {button.backward}
                                                    </Button>                                    
                                                }

                                                    <Button size="large"  variant='contained' type='submit' className='w-1/2'>
                                                        {button.submit}
                                                    </Button>      
                                            </div>
                                            </form>
                                        </div>
                                    </Box>
                                    
                                }



                            </div>

                        </div>

                    </div>
    )
}

export default SignupForm