const express = require('express')

module.exports = function(passport){
  const router = express.Router()
  router.get('/login', checkNotAuthenticated, (req , res)=>{
    res.render('login.ejs')
  })
  
  router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  router.get('/register', checkNotAuthenticated, (req , res)=>{
    res.render('register.ejs')
  })
  router.post('/register', checkNotAuthenticated, async (req , res)=>{
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.username,
        email: req.body.email,
        password: hashedPassword
      })
      console.log(users)
      res.redirect('/login')
    }catch(error){
      res.redirect('/register')
    }
  })
  router.delete('/logout', (req, res)=>{
    req.logOut()
    res.redirect('/login')
  })
  
  
  function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
      return next()
    }
    res.redirect('/login')
  }
  function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
      return res.redirect('/home')
    }
    next()
  }
  return router
}