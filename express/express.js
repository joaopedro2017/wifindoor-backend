const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://Wifi:Wifi@2020@cluster0.l85oj.mongodb.net/reactEstacionamento?retryWrites=true&w=majority',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

module.exports = app