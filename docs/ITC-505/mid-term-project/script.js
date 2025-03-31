const story = {
    start: {
        text: "You are Arthur Fleck, struggling to find your place in Gotham. What do you do?",
        choices: [
            { text: "Go to work", next: "work" },
            { text: "Stay home", next: "home" }
        ],
        image: "https://imageio.forbes.com/specials-images/imageserve/5d66f884fead280008927186/joker/960x0.jpg?format=jpg&width=1440" // Add your link here
    },
    work: {
        text: "At work, you're mistreated. Do you...",
        choices: [
            { text: "Fight back", next: "fight" },
            { text: "Endure silently", next: "endure" }
        ],
        image: "https://wallpapersok.com/images/hd/sad-joker-sits-against-the-wall-4ozr3jpn4iktdckd.jpg" // Add your link here
    },
    home: {
        text: "You stay home, watching TV with your mother. What do you do?",
        choices: [
            { text: "Talk to her", next: "talk" },
            { text: "Ignore her", next: "ignore" }
        ],
        image: "https://pyxis.nymag.com/v1/imgs/572/782/befb484ee3c2c507b2f9e29cf51b65f294-jokernew.1x.rsquare.w1400.jpg" // Add your link here
    },
    fight: {
        text: "You fight back and get fired. Your rage builds... What next?",
        choices: [
            { text: "Embrace chaos", next: "joker" },
            { text: "Regret actions", next: "regret" }
        ],
        image: "https://images.hdqwalls.com/wallpapers/joker-dance-5k-d4.jpg" // Add your link here
    },
    endure: {
        text: "You endure, but the pain lingers. The story ends here...",
        choices: [],
        image: "https://media.gq.com/photos/5ca4c7b2b664d95839006f46/16:9/w_1280,c_limit/joker-movie-trailer-gq-1.jpg" // Add your link here
    },
    joker: {
        text: "You fully embrace the Joker persona. The story ends here...",
        choices: [],
        image: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgwOTE3MjIzODkyMDkz/joker-quotes.jpg" // Add your link here
    },
    regret: {
        text: "You regret everything and spiral further into despair. The story ends here...",
        choices: [],
        image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/joker-2-folie-a-deux-joaquin-phoenix.jpg" // Add your link here
    },
    talk: {
        text: "You talk to your mother, but it doesn't change much. The story ends here...",
        choices: [],
        image: "https://media.vanityfair.com/photos/5d9739887b256900098a17e6/16:9/w_1280,c_limit/MCDJOKE_WB009.jpg" // Add your link here
    },
    ignore: {
        text: "Ignoring her, you feel even more isolated. The story ends here...",
        choices: [],
        image: "https://www.chicagotribune.com/wp-content/uploads/migration/2019/10/29/4V53WUJTINCJFNAIOTWOJNW74Y.jpg?w=1200&resize=1200,900" // Add your link here
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
