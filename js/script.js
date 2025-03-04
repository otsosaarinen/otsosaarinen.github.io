document.getElementById("email").addEventListener("click", () => {
    navigator.clipboard.writeText("saarinenotso@gmail.com");
});

const skillsButton = document.getElementById("skills-button");
const skillsList = document.getElementById("skills");

skillsButton.addEventListener("click", () => {
    skillsList.scrollIntoView();
});
