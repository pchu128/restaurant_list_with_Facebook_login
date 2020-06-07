const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/users')
const bcrypt = require('bcryptjs')

module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())
  passport.use( new localStrategy ({ usernameField: 'email' }, ( email, password, done ) => {
    User.findOne({ email })
      .then( user => {
        if (!user) {
          return done (null, false, { message: '此信箱尚未被註冊！'})
        }
        return bcrypt.compare(password, user.password).then(isMatch => {
          if (!isMatch) {
            return done(null, false, { message: 'Email or Password incorrect.' })
          }
          return done(null, user)
        })
      })
      .catch(err => done(err, false))
  }))
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(err => done(err, null))
  })
}