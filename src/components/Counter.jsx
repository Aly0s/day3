import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[Count,setCount]= useState("0")
    const incCount=()=>{
        setCount(Count+1)
    }
    const decCount=()=>{
        setCount(Count-1)
    }
  return (
    <div>
        <Typography variant='h4'>count:{Count}</Typography>
        <Button variant="contained"color="success" onClick={incCount}>+</Button>
        <Button variant="contained" color="error" onClick={decCount}>-</Button>
    </div>
  )
}

export default Counter