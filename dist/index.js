"use strict";
var _a, _b, _c, _d;
let email = "saarinenotso@gmail.com";
// Function for copying text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
//  Copies discord username to clipboard
(_a = document.getElementById("button-email")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b;
    copyToClipboard(email);
    // Add popup-animation class to trigger the animation
    (_a = document.getElementById("popup")) === null || _a === void 0 ? void 0 : _a.classList.remove("popup-animation");
    void document.body.offsetWidth;
    (_b = document.getElementById("popup")) === null || _b === void 0 ? void 0 : _b.classList.add("popup-animation");
});
// Opens my GitHub profile on click
(_b = document
    .getElementById("button-github")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    window.open("https://github.com/otsosaarinen");
});
// Opens my LinkedIn profile on click
(_c = document
    .getElementById("button-linkedin")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/otso-saarinen/");
});
// Changes the background color of the website
(_d = document.getElementById("color-button")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    if (document.body.classList.contains("black-to-blue-animation")) {
        document.body.classList.remove("black-to-blue-animation");
        void document.body.offsetWidth;
        document.body.classList.add("blue-to-black-animation");
    }
    else {
        document.body.classList.remove("blue-to-black-animation");
        void document.body.offsetWidth;
        document.body.classList.add("black-to-blue-animation");
    }
});
