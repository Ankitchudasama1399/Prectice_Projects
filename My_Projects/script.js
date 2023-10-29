let nav = document.querySelector(".tabs-container");

let offset = nav.offsetTop;

window.addEventListener("scroll", function() {
    if(window.scrollY > offset) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});