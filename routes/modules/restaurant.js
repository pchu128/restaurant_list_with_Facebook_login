const express = require('express')
const router = express.Router()
const restaurantList = require('../../models/restaurant')

// detail page for each restaurant
router.get('/detail/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return restaurantList.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// search function
router.get('/search', (req, res) => {
  console.log('keyword', req.query.keyword)
  const restaurant = restaurantList.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  res.render('index', { restaurant: restaurant, keyword: req.query.keyword })
})

// direct to page: create new restaurant
router.get('/new', (req, res) => {
  return res.render('new')
})

// direct to page: edit existing restaurant
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return restaurantList.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// create new restaurant
router.post('/', (req, res) => {
  return restaurantList.create(
    {
      userId: req.user._id,
      _id: req.body.id,
      name: req.body.name,
      name_en: req.body.name_en,
      category: req.body.category,
      image: req.body.image,
      location: req.body.location,
      phone: req.body.phone,
      google_map: req.body.google_map,
      rating: req.body.rating,
      description: req.body.description
    }
  )
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit existing restaurant
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return restaurantList.findOne({ _id, userId })
    .then(restaurant => {
        restaurant.userId = req.user._id
        restaurant.id = req.body.id,
        restaurant.name = req.body.name,
        restaurant.name_en = req.body.name_en,
        restaurant.category = req.body.category,
        restaurant.image = req.body.image,
        restaurant.location = req.body.location,
        restaurant.phone = req.body.phone,
        restaurant.google_map = req.body.google_map,
        restaurant.rating = req.body.rating,
        restaurant.description = req.body.description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/detail/${_id}`))
    .catch(error => console.log(error))
})

// delete restaurant
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return restaurantList.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router