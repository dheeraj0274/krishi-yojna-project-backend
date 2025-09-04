const express = require('express');
const dotenv = require('dotenv')

dotenv.config()
const Port = process.env.PORT || 5000;

const app =express()

app.listen(Port ,()=>{
    console.log(`Server is running on tje port ${Port}`)
})


