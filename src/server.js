
// if(process.env.NODE_ENV !== 'production'){
//   require('dotenv').config()
// }
// includes packages
const express = require('express')
const expressLayout = require('express-ejs-layouts')
const app = express()

// includes routes
const allRoute = require('./api/routes/all.js')
const port = 3000

// setting
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/api/views')
app.set('layout', 'layouts/layout')

// utilities
app.use(expressLayout)
app.use(express.static('public'))
app.use('/public', express.static(__dirname+ '/public'))

app.use('/', allRoute)
// routes

// listen
app.listen(port)
