// Scrolling functions

const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

arrowUp.addEventListener("click", function () {
    window.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth",
    });
});

arrowDown.addEventListener("click", function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
    });
});
