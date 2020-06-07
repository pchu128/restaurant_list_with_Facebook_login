// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./models/restaurant.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')

const routes = require('./routes')

const usePassport = require('./config/passport')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(session({
  secret: 'restaurantSecret',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(methodOverride('_method'))

usePassport(app)

app.use((req, res, next) => {
  console.log(req.user)
  res.locals.isAuthenticated = req.isAuthenticated
  res.locals.user = req.user
  next()
})

app.use(routes)

// Listen the server
app.listen(3000, () => {
  console.log(`Express is running on http://localhost:${port}`)
})