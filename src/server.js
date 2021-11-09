
// if(process.env.NODE_ENV !== 'production'){
//   require('dotenv').config()
// }
// includes packages
const express = require('express')
const passport = require('passport')
const passportConfig = require('./api/passport-config.js')
const flash = require('express-flash')
const session = require('express-session')
const expressLayout = require('express-ejs-layouts')
const app = express()

// includes routes
const allRoute = require('./api/routes/all.js')
const authRoute = require('./api/routes/auth.js')
const port = 3000
const Users = require('./api/data').users

passportConfig.init(
  passport, 
  email => Users.find(user=> user.email == email),
  id => Users.find(user => user.id = id)
)
app.use(flash())
app.use(session({
  secret: "REtVxemV2Q25",
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

// setting
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/api/views')
app.set('layout', 'layouts/layout')

// utilities
app.use(expressLayout)
app.use(express.static('public'))
app.use('/public', express.static(__dirname+ '/public'))

app.use('/', allRoute)
app.use('/auth', authRoute(passport))
// routes

// listen
app.listen(port)
