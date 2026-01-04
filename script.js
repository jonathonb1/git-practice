const title = document.getElementById("page-title");
title.textContent = "Welcome to My Learning Journal";

const button = document.getElementById("change-title-btn");

button.addEventListener("click", () => {
    title.textContent = "Title Changed by JavaScript"
});