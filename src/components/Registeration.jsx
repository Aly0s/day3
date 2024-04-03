import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registeration = () => {
  return (
    <div>
        <h1>Registeration</h1>
        
    <Typography variant='h5'>Registration </Typography><br></br>
    <TextField label="Enter a name"variant="outlined"/><br></br>
    <TextField label="enter a password"variant="filled"/><br></br>
    <TextField label="enter a email"variant="standard"></TextField><br></br>
    <TextField label="enter a phone number"variant="outlined"></TextField><br></br>
    <Button variant="text" color="success">Click Here</Button>
    <Button variant="contained" color="error">Touch me </Button>
    <Button variant="outlined"color="secondary">Tap here </Button>


        </div>
  )
}

export default Registeration