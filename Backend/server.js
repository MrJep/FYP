require('dotenv').config()
const cors = require('cors')
const express = require('express')
const adminRoute = require('./routes/admin')
const userRoute = require('./routes/user')
const topicRoute = require('./routes/topic')
const mongoose = require('mongoose')

// Express app created
const app = express()

//Middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// Routing
app.use(cors())
app.use('/api/route', adminRoute)
app.use('/api/user', userRoute)
app.use('/api/topic', topicRoute)

// Connecting to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        // Listening to requests
        app.listen(process.env.PORT, () =>{
        console.log('Connected to DB and listening on port', process.env.PORT)
    })
    })
    .catch((error) =>{
        console.log(error)
    })