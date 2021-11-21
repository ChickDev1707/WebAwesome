const express = require('express')
const Users = require('../data').users

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
  //sign up
  router.get('/sign-up', (req, res)=>{
    res.render('pages/signUp/signUp.ejs')
  })
  router.post('/sign-up', checkNotAuthenticated, async (req , res)=>{
    try{
      Users.push({
        id: Date.now().toString(),
        name: req.body.username,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect('/')
    }catch(error){
      res.redirect('/auth/sign-up')
    }
  })
  router.delete('/logout', (req, res)=>{
    req.logOut()
    res.redirect('/')
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