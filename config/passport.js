const passport = require('passport')
const localStrategy = require('passport-local').Strategy

module.exports = app => {
  app.use(passport.initialized())
  app.use(passport.session())
  passport.use( new localStrategy ({ usernameField: email }), ( email, password, done ) => {
    user.findOne({ email })
      .then( user => {
        if (!user) {
          return done (null, false, { message: '此信箱尚未被註冊！'})
        }
        if (user.password !== password) {
          return done (null, false, { message: '使用者信箱或密碼輸入不正確！'})
        }
        return done(null, user)
      })
      .catch(err => done(err, false))
  })
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((user, done) => {
    user.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(err => done(err, null))
  })
}