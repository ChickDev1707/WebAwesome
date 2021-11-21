
const LocalStrategy = require('passport-local').Strategy

function init(passport, getUserByEmail, getUserById){

  const authenticateUser = async function(email, password, done){

    let user = getUserByEmail(email)
    if(user == null){
      done(null, false, {message: 'user not found'})
    }else{
      try{
        if(user.password == password){
          return done(null, user)
        }else{
          return done(null, false, {message: 'password incorrect'})
        }
      }catch(e){
        console.log(e)
        return done(e)
      }
    }
  }
  passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))
  passport.serializeUser((user, done)=> done(null, user.id))
  passport.deserializeUser((id, done)=> done(null, getUserById(id)))
}

module.exports = {
  init
}