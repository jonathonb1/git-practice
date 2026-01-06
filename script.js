const title = document.getElementById("page-title");

if (title) {
    title.textContent = "Welcome to My Learning Journal";

    const button = document.getElementById("change-title-btn");

    let isOriginalTitle = true;

    if (button) {
        button.addEventListener("click", () => {
            if (isOriginalTitle) {
                title.textContent = "Title Changed by JavaScript";
                isOriginalTitle = false;
            } else {
                title.textContent = "Welcome to my Learning Journal"
                isOriginalTitle = true;
            }
        });
    }
}

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const feedback = document.getElementById("form-feedback");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (message === "") {
            feedback.textContent = "Please enter a message before submitting";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Thanks! Your message has been received.";
            feedback.style.color = "green";
        }
    });
}