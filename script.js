let open = document.querySelector('.btn-open');
let close = document.querySelector('.btn-close');
let nav = document.querySelector(".mobile-nav");
let container = document.querySelector(".container");

open.onclick = function () {
    nav.style.width = "200px";
    nav.style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)";
    close.style.display = "block";
}

close.onclick = function () {
    nav.style.width = "0";
    nav.style.boxShadow = "none";
    close.style.display = "none";
}
