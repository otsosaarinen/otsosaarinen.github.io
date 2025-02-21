let email: string = "saarinenotso@gmail.com";

// Function for copying text to clipboard
function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
}

//  Copies discord username to clipboard
document.getElementById("button-email")?.addEventListener("click", function () {
    copyToClipboard(email);

    // Add popup-animation class to trigger the animation
    document.getElementById("popup")?.classList.remove("popup-animation");
    void document.body.offsetWidth;
    document.getElementById("popup")?.classList.add("popup-animation");
});

// Opens my GitHub profile on click
document
    .getElementById("button-github")
    ?.addEventListener("click", function () {
        window.open("https://github.com/otsosaarinen");
    });

// Opens my LinkedIn profile on click
document
    .getElementById("button-linkedin")
    ?.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/otso-saarinen/");
    });

// Preload images
const images = ["/img/tokyo.jpg", "/img/tokyo_view.jpg"];
images.forEach((src) => {
    const img = new Image();
    img.src = src;
});

// Changes the background color of the website
document
    .getElementById("background-button")
    ?.addEventListener("click", function () {
        if (document.body.classList.contains("background-animation-1")) {
            document.body.classList.remove("background-animation-1");
            void document.body.offsetWidth;
            document.body.classList.add("background-animation-2");
        } else {
            document.body.classList.remove("background-animation-2");
            void document.body.offsetWidth;
            document.body.classList.add("background-animation-1");
        }
    });
