const story = {
    start: {
        text: "You are Arthur Fleck, struggling to find your place in Gotham. What do you do?",
        choices: [
            { text: "Go to work", next: "work" },
            { text: "Stay home", next: "home" }
        ],
        image: "https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22" // Add your link here
    },
    work: {
        text: "At work, you're mistreated. Do you...",
        choices: [
            { text: "Fight back", next: "fight" },
            { text: "Endure silently", next: "endure" }
        ],
        image: "https://com.https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.com" // Add your link here
    },
    home: {
        text: "You stay home, watching TV with your mother. What do you do?",
        choices: [
            { text: "Talk to her", next: "talk" },
            { text: "Ignore her", next: "ignore" }
        ],
        image: "https://https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.example.com" // Add your link here
    },
    fight: {
        text: "You fight back and get fired. Your rage builds... What next?",
        choices: [
            { text: "Embrace chaos", next: "joker" },
            { text: "Regret actions", next: "regret" }
        ],
        image: "https://www.https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.com" // Add your link here
    },
    endure: {
        text: "You endure, but the pain lingers. The story ends here...",
        choices: [],
        image: "https://www.https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.com" // Add your link here
    },
    joker: {
        text: "You fully embrace the Joker persona. The story ends here...",
        choices: [],
        image: "https://www.https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.com" // Add your link here
    },
    regret: {
        text: "You regret everything and spiral further into despair. The story ends here...",
        choices: [],
        image: "https://https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.example.com" // Add your link here
    },
    talk: {
        text: "You talk to your mother, but it doesn't change much. The story ends here...",
        choices: [],
        image: "https://https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.example.com" // Add your link here
    },
    ignore: {
        text: "Ignoring her, you feel even more isolated. The story ends here...",
        choices: [],
        image: "https://https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22.example.com" // Add your link here
    }
};

function startGame() {
    updateStory("start");
}

function updateStory(step) {
    const stage = story[step];
    document.getElementById("story").innerText = stage.text;

    // Create an image element and set the source to the image link
    const imageElement = document.getElementById("story-image"); // Reference to the existing image tag
    imageElement.src = stage.image;  // Use the image URL from the story object
    imageElement.alt = "Story Image"; // Optional alt text for accessibility

    // Clear previous choices and display the current choices
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    if (stage.choices.length > 0) {
        stage.choices.forEach(choice => {
            let button = document.createElement("button");
            button.innerText = choice.text;
            button.onclick = () => updateStory(choice.next);
            choicesDiv.appendChild(button);
        });
    } else {
        let restartButton = document.createElement("button");
        restartButton.innerText = "Restart";
        restartButton.onclick = startGame;
        choicesDiv.appendChild(restartButton);
    }
}

document.addEventListener("DOMContentLoaded", startGame);
