window.onload = function(){
  let links = document.querySelectorAll('.my-index-table a')
  for(let i = 0; i< links.length; i++){
    let selectedLink = links[i];
    let chevron = selectedLink.querySelector('i')
    selectedLink.addEventListener('click', function(e){
      clearLinks(links)
      e.target.style.color = "#3498db"
      e.target.style.fontWeight = "bold"
      chevron.style.visibility = "visible"
    })
  }
}
function clearLinks(links){
  for(let i = 0; i< links.length; i++){
    let selectedLink = links[i];
    let chevron = selectedLink.querySelector('i')
    selectedLink.style.color= "#333";
    selectedLink.style.fontWeight = "normal";
    chevron.style.visibility = "hidden"
  }
}