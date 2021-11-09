
const express = require('express')
const router = express.Router()
const expressLayout = require('express-ejs-layouts')

const Posts = require('../data.js').posts

// index route
router.get('/', expressLayout, (req, res)=>{
  res.render('pages/index.ejs')
})

//courses router
router.get('/courses/python/lesson1', (req, res)=>{
  res.render('pages/course/coursePythonLesson1.ejs')
})

router.get('/courses/python',expressLayout, (req, res)=>{
  res.render('pages/course/coursePython.ejs')
})

router.get('/courses',expressLayout, (req, res)=>{
  res.render('pages/course/coursesList.ejs')
})

//blog router
router.get('/blogs/all-post',expressLayout, (req, res)=>{
  let currentPage = parseInt(req.query.page) ;
  const perPage = 6;
  let totalPost = Posts.length;
  let totalPage = Math.ceil(totalPost/perPage);
  let start = (currentPage-1)*perPage;
  let end = currentPage*perPage;

  let result = Posts.slice(start,end);
  
  let pagination = [currentPage, totalPage];

  res.render('pages/blog/allPost.ejs',{result,pagination})
})


router.get('/blogs', expressLayout, (req, res)=>{
  res.render('pages/blog/index.ejs')
})

//sign up

router.get('/sign-up', (req, res)=>{
  res.render('pages/signUp/signUp.ejs')
})

// posts route


router.get('/posts/:id',expressLayout, (req, res)=>{
  let postDir = 'post-'+ req.params.id
  res.render('pages/posts/' + postDir)
})

// search route
router.get('/search',expressLayout, (req, res)=>{
  let result = [];
  if(req.query.searchKey!= undefined){
    let key = req.query.searchKey.toLowerCase()
    let days = Number(req.query.time);
    
    result = Posts.filter(post=>{
      let checkCategory = req.query.category == 'all'? true: post.category == req.query.category
      return post.title.toLowerCase().includes(key)
          && isSooner(post.date, days)
          && checkCategory
    })
  }
  res.render('pages/search.ejs', expressLayout, {result})
})  

function isSooner(target, days){
  let now = Date.now()
  return dateDiff(target, now) < days
}
function dateDiff(first, second) {
  return Math.round((second-first)/(1000*60*60*24));
}
module.exports = router