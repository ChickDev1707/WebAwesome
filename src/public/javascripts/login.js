loginBtn.addEventListener("click", function() {
    layout_login.style.display = "block";
    content_login.style.display = "block";


})


layout_login.addEventListener("click", function() {

    layout_login.style.display = "none";
    content_login.style.display = "none";

})

close_login.addEventListener("click", function() {
    layout_login.style.display = "none";
    content_login.style.display = "none";
})