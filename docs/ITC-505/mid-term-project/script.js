const story = {
    start: {
        text: "You are Arthur Fleck, struggling to find your place in Gotham. What do you do?",
        choices: [
            { text: "Go to work", next: "work" },
            { text: "Stay home", next: "home" }
        ],
        image: "https://img.freepik.com/premium-photo/group-teenagers-night-forest_763713-1961.jpg?%22"// Add your link here
    },
    work: {
        text: "At work, you're mistreated. Do you...",
        choices: [
            { text: "Fight back", next: "fight" },
            { text: "Endure silently", next: "endure" }
        ],
        image: "https://www.example.com" // Add your link here
    },
    home: {
        text: "You stay home, watching TV with your mother. What do you do?",
        choices: [
            { text: "Talk to her", next: "talk" },
            { text: "Ignore her", next: "ignore" }
        ],
        image: "https://www.example.com" // Add your link here
    },
    fight: {
        text: "You fight back and get fired. Your rage builds... What next?",
        choices: [
            { text: "Embrace chaos", next: "joker" },
            { text: "Regret actions", next: "regret" }
        ],
        image: "https://www.example.com" // Add your link here
    },
    endure: {
        text: "You endure, but the pain lingers. The story ends here...",
        choices: [],
        image: "https://www.example.com" // Add your link here
    },
    joker: {
        text: "You fully embrace the Joker persona. The story ends here...",
        choices: [],
        imageLink: "https://www.example.com" // Add your link here
    },
    regret: {
        text: "You regret everything and spiral further into despair. The story ends here...",
        choices: [],
        imageLink: "https://www.example.com" // Add your link here
    },
    talk: {
        text: "You talk to your mother, but it doesn't change much. The story ends here...",
        choices: [],
        imageLink: "https://www.example.com" // Add your link here
    },
    ignore: {
        text: "Ignoring her, you feel even more isolated. The story ends here...",
        choices: [],
        imageLink: "https://www.example.com" // Add your link here
    }
};

function startGame() {
    updateStory("start");
}

function updateStory(step) {
    const stage = story[step];
    document.getElementById("story").innerText = stage.text;

    // Create a clickable link text
    const imageLink = document.createElement("a");
    imageLink.href = stage.imageLink;  // Use the link from the story object.
    imageLink.target = "_blank";  // Open the link in a new tab.
    imageLink.innerText = "Click here for more information"; // Text that the user will click on.

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

    // Replace the previous image container with the link text
    const linkContainer = document.getElementById("image-container");
    linkContainer.innerHTML = "";  // Clear previous content
    linkContainer.appendChild(imageLink); // Append the link text
}

document.addEventListener("DOMContentLoaded", startGame);
