
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

    const feedback = document.querySelector("#form-feedback");
    const savedStatus = document.querySelector("#saved-status");
    const messageInput = document.getElementById("message");
    const clearButton = document.getElementById("clear-draft-btn");

    // Load saved draft from LocalStorage, if it exists
    const savedMessage = localStorage.getItem("savedMessage");

    if (savedMessage && messageInput) {
        messageInput.value = savedMessage;

        if (savedStatus) {
            savedStatus.textContent = "Loaded your saved draft.";
            savedStatus.style.color = "blue";
        }
    }

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
            // Save to LocalStorage before showing success
            localStorage.setItem("savedMessage", message);

            feedback.textContent = "Draft saved!";
            feedback.style.color = "blue";

            // Optional: clear the form after success
            // form.reset();
        }
    });

    if (clearButton) {
        clearButton.addEventListener("click", () => {
            // removed saved draft from local storage
            localStorage.removeItem("savedMessage");

            // Clear the textarea
            if (messageInput) {
                messageInput.value = "";
            }

            // show status message
            if (savedStatus) {
                savedStatus.textContent = "Saved draft cleared.";
                savedStatus.style.color = "gray";
            }

            // Optional: Clear the main feedback
            if (feedback) {
                feedback.textContent = "";
            }
        });
    }
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
let wins = [
    "Finished semantic HTML",
    "Styled navigation with Flexbox",
    "Built JS button toggle",
    "Handled form submission",
    "Looped through data to build list"
];

// Try to load saved wins from LocalStorage
const savedWins = localStorage.getItem("wins");

if (savedWins) {
    wins = JSON.parse(savedWins);
}


// ====================
// Render lists from data
// ====================

// Highlight Paragraph with queryselectors
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

function setupWinsFeature() {
    const input = document.querySelector("#new-win-input");
    const button = document.querySelector("#add-win-btn");
    const feedback = document.querySelector("#win-feedback");
    const winsList = document.querySelector("#wins-list");

    // If this page doesn't have the new win UI, do nothing
    if (!input || !button) return;

    function updateButtonState() {
        const hasText = input.value.trim().length > 0;
        button.disabled = !hasText;
    }
    updateButtonState();

    input.addEventListener("input", updateButtonState);

    button.addEventListener("click", () => {
        const value = input.value.trim();
        console.log("New win input:", value);

        if (value === "") {
            if (feedback) {
                feedback.textContent = "Please type a win before adding.";
                feedback.style.color = "red";
            }
        } else {
            // 1) Add to our in-memory wins array
            wins.push(value);

            // 2) Save updated wins array to LocalStorage
            localStorage.setItem("wins", JSON.stringify(wins));

            // 3) Add a new <li> to the list on the page
            if (winsList) {
                const li = document.createElement("li");
                li.textContent = value;
                winsList.appendChild(li);
            }

            // 4) Clear the input
            input.value = "";
            updateButtonState();

            // 5) Update feedback
            if (feedback) {
                feedback.textContent = "Win added!";
                feedback.style.color = "green";
            }
        }
    });
}

function setupDailyCheckin() {
    const form = document.querySelector("form"); // or give it an ID if you prefer
    const moodInput = document.querySelector("#mood");
    const feedback = document.querySelector("#checkin-feedback");
    const submitButton = document.querySelector("#daily-submit-btn");
    const clearButton = document.querySelector("#clear-checkin-btn");

    if (!form || !moodInput || !feedback || !submitButton || !clearButton) return;

    function updateSubmitState() {
        submitButton.disabled = moodInput.value.trim().length === 0;
    }

    updateSubmitState();
    moodInput.addEventListener("input", updateSubmitState);

    const savedMood = localStorage.getItem("dailyMood");
    if (savedMood) {
        feedback.textContent = `Today you're feeling: ${savedMood}`;
        feedback.style.color = "green";
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault(); //  stop page refresh

        const mood = moodInput.value.trim();

        localStorage.setItem("dailyMood", mood);

        feedback.textContent = `Today you're feeling: ${mood}`;
        feedback.style.color = "green";

        moodInput.value = "";
        updateSubmitState();
    });

    clearButton.addEventListener("click", () => {
        //remove saved mood
        localStorage.removeItem("dailyMood");

        //clear UI
        moodInput.value = "";
        feedback.textContent = "";
        feedback.style.color = "";

        //Disable submit again
        updateSubmitState();
    });
}



// ====================
// Initialize behavior
// ====================
setupTitleToggle();
setupContactForm();
renderLists();
setupHighlights();
setupWinsFeature();
setupDailyCheckin();

