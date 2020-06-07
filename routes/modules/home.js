const express = require('express')
const router = express.Router()
const restaurantList = require('../../models/restaurant')

router.get('/', (req, res) => {
  const userId = req.user._id
  console.log(req.user._id)
  restaurantList.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort/alphabet-asc', (req, res) => {
  const userId = req.user._id
  restaurantList.find({ userId })
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort/alphabet-desc', (req, res) => {
  const userId = req.user._id
  restaurantList.find({ userId })
    .lean()
    .sort({ name: 'desc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort/category', (req, res) => {
  const userId = req.user._id
  restaurantList.find({ userId })
    .lean()
    .sort({ category: 'asc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

router.get('/sort/location', (req, res) => {
  const userId = req.user._id
  restaurantList.find({ userId })
    .lean()
    .sort({ location: 'asc' })
    .then(restaurants => res.render('index', { restaurant: restaurants }))
    .catch(error => console.log(error))
})

module.exports = router