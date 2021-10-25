var react_item = document.getElementsByClassName('react_item');
var l = 0;
right.onclick = () => {
    l++;
    for (var i of react_item) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-260px";
        }
        if (l == 2) {
            i.style.left = "-520px";
        }
        if (l == 3) {
            i.style.left = "-780px";
        }
        if (l == 4) {
            i.style.left = "-1040px";
        }
        if (l > 4) {
            l = 4;
        }
    }
}

left.onclick = () => {
    l--;
    for (var i of react_item) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-260px";
        }
        if (l == 2) {
            i.style.left = "-520px";
        }
        if (l == 3) {
            i.style.left = "-780px";
        }

        if (l < 0) {
            l = 0;
        }
    }
}


window.addEventListener("scroll", scrollHandle);

function scrollHandle()
{
    if (window.pageYOffset >= 500)
    {
        if (!backToTop.classList.contains("btnEntrance"))
        {
            backToTop.classList.remove("btnExit")
            backToTop.classList.add("btnEntrance")
            backToTop.style.display = "block";
        }
        
    }
    else {
        if (backToTop.classList.contains("btnEntrance"))
        {
            backToTop.classList.remove("btnEntrance")
            backToTop.classList.add("btnExit")
            setTimeout(function(){
                backToTop.style.display = "none";
            },250)
           
        }

        
    }
}

backToTop.addEventListener("click", scrollToTop)

function scrollToTop() {
    window.scroll(0,0);
}