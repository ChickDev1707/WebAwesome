displayComment.addEventListener("click", function() {
    commnentPart.classList.add("display");
    lesson_overlay.style.display = "block"
})


hideComment.addEventListener("click", function() {
    setTimeout(() => {
        lesson_overlay.style.display = "none"
    }, 300)

    commnentPart.classList.remove("display");
})


lesson_overlay.addEventListener("click", function() {
    setTimeout(() => {
        lesson_overlay.style.display = "none"
    }, 300)

    commnentPart.classList.remove("display");
})


var lesson_item = document.getElementsByClassName('lesson_content1');
var l = 0;
next.onclick = () => {
    l++;
    
    for (var i of lesson_item) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-500px";
        }
        if (l == 2) {
            i.style.left = "-1000px";
        }
        if (l == 3) {
            i.style.left = "-1500px";
        }
        if (l > 3) {
          l=3;
        }
    }
   let current = document.getElementById(l);
   current.classList.add("current");
   current.previousElementSibling.classList.remove("current");
}

back.onclick = () => {
    l--;
  
    for (var i of lesson_item) {
        if (l == 0) {
          
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-500px";
        }
        if (l == 2) {
            i.style.left = "-1000px";
        }
        if (l == 3) {
            i.style.left = "-1500px";
        }

        if (l < 0) {
            l = 0;
        }
    }

let current = document.getElementById(l);
   current.classList.add("current");
   current.nextElementSibling.classList.remove("current");
}