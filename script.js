
// ====================
// Startup functions
// ====================
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
// Console checks
// ====================
console.log("Topics array:", topics);
console.log("Wins array:", wins);

// Loops (render content)
for (let i = 0; i < topics.length; i++) {
    console.log("Learning topic:", topics[i]);
}

for (let i = 0; i < wins.length; i++) {
    console.log("Win:", wins[i]);
}


// ====================
// Render lists from data
// ====================

// Topics list
const topicsList = document.getElementById("topics-list");
const winsList = document.getElementById("wins-list");

if (topicsList) {
    for (let i = 0; i < topics.length; i++) {
        const li = document.createElement("li");
        li.textContent = topics[i];
        topicsList.appendChild(li);
    }
}

if (winsList) {
    for (let i = 0; i < wins.length; i++) {
        const li = document.createElement("li");
        li.textContent = wins[i];
        winsList.appendChild(li);
    }
}

// ====================
// Initialize behavior
// ====================
setupTitleToggle();
setupContactForm();

