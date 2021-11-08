
window.onload = function(){
  let slidingBtns = document.querySelectorAll('.sliding-btn')

  let slider = document.querySelector('.slider')
  let courseBoxWidth = document.querySelector('.course-box-wrapper').offsetWidth
  slidingBtns[0].addEventListener('click', (event)=>{
    let posX;
    if(slider.scrollLeft%courseBoxWidth!== 0){
      posX = (Math.floor(slider.scrollLeft/courseBoxWidth))*courseBoxWidth
    }else{
      posX = slider.scrollLeft- courseBoxWidth
    }
    slider.scrollTo(posX, 0)
  })
  slidingBtns[1].addEventListener('click', (event)=>{
    let posX = (Math.floor(slider.scrollLeft/courseBoxWidth) + 1)*courseBoxWidth
    slider.scrollTo(posX, 0)
  })


  let featureSecTitle = document.getElementById('feature-sec-title')
  let featureTexts = ["coding", "blog", "course", "discuss", "challenge", "explore"]
  let text = "";
  let index = 0;
  let time = 100;
  let show, del
  show = setInterval(showText, time)
  function showText(){
    if(text.length< featureTexts[index].length){
      text = featureTexts[index].slice(0, text.length+ 1)
    }else{
      clearInterval(show)
      setTimeout(function(){
        del = setInterval(deleteText, time)
      }, 1000)
    }
    featureSecTitle.innerText = "\xa0"+ text;
  }
  
  function deleteText(){
    if(text.length > 0){
      text = text.slice(0, text.length -1)
    }else{
      clearInterval(del)
      show = setInterval(showText, time)
      index= index< featureTexts.length -1? index+ 1: 0;
    }
    featureSecTitle.innerText = "\xa0"+ text;
  }
}
