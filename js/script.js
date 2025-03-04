document.getElementById("email").addEventListener("click", () => {
    navigator.clipboard.writeText("saarinenotso@gmail.com");
});

const skillButton = document.getElementById("skills-button");
const skillList = document.getElementById("skills-container");

// Scroll to skills
skillButton.addEventListener("click", () => {
    skillList.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Scroll back up
const backButton = document.getElementById("back-button");
const pageContainer = document.getElementById("page-container");

backButton.addEventListener("click", () => {
    pageContainer.scrollIntoView({ behavior: "smooth", block: "center" });
});
