
// ====================
// Startup functions
// ====================
function setupTitleToggle() {
    const title = document.querySelector("#page-title");
    if (!title) return; // If there's no title on this page, stop here

    const button = document.querySelector("#change-title-btn");
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
    const form = document.querySelector("#contact-form");
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

// ====================
// Data (arrays)
// ====================
const topics = [
    "HTML Semantics",
    "CSS Layout",
    "JavaScript Basics",
    "Git and GitHub",
    "Flexbox",
    "Forms and Validation"
];
const wins = [
    "Finished semantic HTML",
    "Styled navigation with Flexbox",
    "Built JS button toggle",
    "Handled form submission",
    "Looped through data to build list"
];


// ====================
// Render lists from data
// ====================
function setupHighlights() {
    const allHighlights = document.querySelectorAll(".highlight");

    for (const el of allHighlights) {
        el.classList.add("highlight-active");
    }
}

// Topics list
function renderLists() {
    const topicsList = document.querySelector("#topics-list");
    const winsList = document.querySelector("#wins-list");

    if (topicsList) {
        for (const topic of topics) {
            const li = document.createElement("li");
            li.textContent = topic;
            topicsList.appendChild(li);
        }
    }

    if (winsList) {
        for (const win of wins) {
            const li = document.createElement("li");
            li.textContent = win;
            winsList.appendChild(li);
        }
    }
}


// ====================
// Initialize behavior
// ====================
setupTitleToggle();
setupContactForm();
renderLists();
setupHighlights();

