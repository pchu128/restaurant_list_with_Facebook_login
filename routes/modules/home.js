const express = require('express')
const router = express.Router()
const restaurantList = require('../../models/restaurant')

router.get('/', (req, res) => {
  restaurantList.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort/alphabet-asc', (req, res) => {
  restaurantList.find()
  .lean()
  .sort({ name: 'asc' })
  .then(restaurants => res.render('index', { restaurant: restaurants }))
  .catch(error => console.log(error))
})

router.get('/sort/alphabet-desc', (req, res) => {
  restaurantList.find()
    .lean()
    .sort({ name: 'desc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort/category', (req, res) => {
  restaurantList.find()
    .lean()
    .sort({ category: 'asc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort/location', (req, res) => {
  restaurantList.find()
    .lean()
    .sort({ location: 'asc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

module.exports = router