require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGO_URL,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

module.exports = app