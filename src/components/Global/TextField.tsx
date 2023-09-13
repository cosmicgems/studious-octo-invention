import React from "react"
import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";
import { green, grey } from "@mui/material/colors";



export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
    color: green[50],
    },
    '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
        borderColor: grey[900],
    },
    '&:hover fieldset': {
        borderColor: grey[50],
    },
    '&.Mui-focused fieldset': {
        borderColor: grey[50],
    },
    },
});