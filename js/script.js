document.getElementById("email").addEventListener("click", () => {
    navigator.clipboard.writeText("saarinenotso@gmail.com");
});

const skillButton = document.getElementById("skills-button");
const skillList = document.getElementById("skills-container");

skillButton.addEventListener("click", () => {
    skillList.scrollIntoView({ behavior: "smooth", block: "center" });
});
