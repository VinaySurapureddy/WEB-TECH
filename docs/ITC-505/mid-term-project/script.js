const story = {
    start: {
        text: "You are Arthur Fleck, struggling to find your place in Gotham. What do you do?",
        choices: [
            { text: "Go to work", next: "work" },
            { text: "Stay home", next: "home" }
        ],
        image: "images/start.jpg"
    },
    work: {
        text: "At work, you're mistreated. Do you...",
        choices: [
            { text: "Fight back", next: "fight" },
            { text: "Endure silently", next: "endure" }
        ],
        image: "images/work.jpg"
    },
    home: {
        text: "You stay home, watching TV with your mother. What do you do?",
        choices: [
            { text: "Talk to her", next: "talk" },
            { text: "Ignore her", next: "ignore" }
        ],
        image: "images/home.jpg"
    },
    fight: {
        text: "You fight back and get fired. Your rage builds... What next?",
        choices: [
            { text: "Embrace chaos", next: "joker" },
            { text: "Regret actions", next: "regret" }
        ],
        image: "images/fight.jpg"
    },
    endure: {
        text: "You endure, but the pain lingers. The story ends here...",
        choices: [],
        image: "images/endure.jpg"
    },
    joker: {
        text: "You fully embrace the Joker persona. The story ends here...",
        choices: [],
        image: "images/joker.jpg"
    },
    regret: {
        text: "You regret everything and spiral further into despair. The story ends here...",
        choices: [],
        image: "images/regret.jpg"
    },
    talk: {
        text: "You talk to your mother, but it doesn't change much. The story ends here...",
        choices: [],
        image: "images/talk.jpg"
    },
    ignore: {
        text: "Ignoring her, you feel even more isolated. The story ends here...",
        choices: [],
        image: "images/ignore.jpg"
    }
};

function startGame() {
    updateStory("start");
}

function updateStory(step) {
    const stage = story[step];
    document.getElementById("story").innerText = stage.text;
    document.getElementById("story-image").src = stage.image;
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
