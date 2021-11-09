
const express = require('express')
const router = express.Router()

const Posts = require('../data.js').posts

// index route
router.get('/', (req, res)=>{
  res.render('pages/index.ejs')
})


// posts route
router.get('/all-post', (req, res)=>{
  let currentPage = parseInt(req.query.page) ;
  const perPage = 6;
  let totalPost = Posts.length;
  let totalPage = Math.ceil(totalPost/perPage);
  let start = (currentPage-1)*perPage;
  let end = currentPage*perPage;

  let result = Posts.slice(start,end);
  
  let pagination = [currentPage, totalPage];

  res.render('pages/allPost.ejs',{result,pagination})
})



router.get('/posts/:id', (req, res)=>{
  let postDir = 'post-'+ req.params.id
  res.render('pages/posts/' + postDir)
})

// search route
router.get('/search', (req, res)=>{
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
  res.render('pages/search.ejs', {result})
})  

function isSooner(target, days){
  let now = Date.now()
  return dateDiff(target, now) < days
}
function dateDiff(first, second) {
  return Math.round((second-first)/(1000*60*60*24));
}
module.exports = router