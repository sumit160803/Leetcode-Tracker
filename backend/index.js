const express = require('express');
const app = express();  
const mongoose = require('mongoose');
require('dotenv').config();
const {URI, PORT} = process.env;


// Connect to MongoDB
mongoose.connect(URI).then(() =>{
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => console.log(err));

