loginBtn.addEventListener("click", function() {
    layout_login.style.display = "block";
    content_login.style.display = "block";
})

layout_login.addEventListener("click", function() {

    layout_login.style.display = "none";
    content_login.style.display = "none";
})
content_login.addEventListener("click", function(e){
    e.stopPropagation();
})
close_login.addEventListener("click", function() {
    layout_login.style.display = "none";
    content_login.style.display = "none";
})