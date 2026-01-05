const title = document.getElementById("page-title");
title.textContent = "Welcome to My Learning Journal";

const button = document.getElementById("change-title-btn");

let isOriginalTitle = true;

button.addEventListener("click", () => {
    if (isOriginalTitle) {
        title.textContent = "Title Changed by JavaScript";
        isOriginalTitle = false;
    } else {
        title.textContent = "Welcome to my Learning Journal"
        isOriginalTitle = true;
    }
});