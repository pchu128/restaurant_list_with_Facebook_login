// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./models/restaurant.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const port = 3000
require('./config/mongoose')

const app = express()

// setting template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

app.use(methodOverride('_method'))
app.use(routes)

// Listen the server
app.listen(3000, () => {
  console.log(`Express is running on http://localhost:${port}`)
})