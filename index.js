const path = require('path');
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoute'))
app.listen(port, ()=>console.log(`Server started on ${port}`))