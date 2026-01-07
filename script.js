

function setupTitleToggle() {
    const title = document.getElementById("page-title");
    if (!title) return; // If there's no title on this page, stop here

    const button = document.getElementById("change-title-btn");
    if (!button) return; // If there's no button, stop here

    let isOriginalTitle = true;
    title.textContent = "Welcome to My Learning Journal";

    button.addEventListener("click", () => {
        if (isOriginalTitle) {
            title.textContent = "Title Changed by JavaScript";
            isOriginalTitle = false;
        } else {
            title.textContent = "Welcome to My Learning Journal";
            isOriginalTitle = true;
        }
    });
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return; // If there's no contact form on this page, do nothing

    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (message === "") {
            feedback.textContent = "Please enter a message before submitting.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Thanks! Your message has been received.";
            feedback.style.color = "green";
            // Optional: clear the form after success
            // form.reset();
        }
    });
}

setupTitleToggle();
setupContactForm();

