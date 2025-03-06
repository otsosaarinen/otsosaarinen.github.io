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

// Hide arrow controls if screen isn't wide enough
const arrowControls = document.getElementById("up-down-container");

function toggleArrowControls() {
    if (window.innerWidth < 800) {
        arrowControls.style.display = "none";
    } else {
        arrowControls.style.display = "flex";
    }
}

// Run the function when the page loads
toggleArrowControls();

// Listen for window resize events
window.addEventListener("resize", toggleArrowControls);
