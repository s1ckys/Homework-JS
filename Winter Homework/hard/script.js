const categories = {
    movies: [
        { word: "avatar", hint: "A famous sci-fi movie." },
        { word: "titanic", hint: "A romantic film on a ship." },
        { word: "inception", hint: "A dream within a dream." },
        { word: "jaws", hint: "A thriller involving a shark." },
        { word: "matrix", hint: "A simulated reality." }
    ],
    football: [
        { word: "ronaldo", hint: "A famous Portuguese footballer." },
        { word: "messi", hint: "An Argentinian football legend." },
        { word: "goalkeeper", hint: "The player who guards the goal." },
        { word: "penalty", hint: "Awarded after a foul in the box." },
        { word: "stadium", hint: "Where football matches are played." }
    ],
    cars: [
        { word: "tesla", hint: "A popular electric car brand." },
        { word: "mustang", hint: "A famous Ford muscle car." },
        { word: "ferrari", hint: "A luxury Italian car brand." },
        { word: "audi", hint: "A German car brand with four rings." },
        { word: "toyota", hint: "A Japanese car manufacturer." }
    ],
    animals: [
        { word: "elephant", hint: "The largest land animal." },
        { word: "giraffe", hint: "The tallest animal on Earth." },
        { word: "penguin", hint: "A flightless bird that swims." },
        { word: "dolphin", hint: "An intelligent marine mammal." },
        { word: "kangaroo", hint: "An Australian marsupial." }
    ],
    countries: [
        { word: "brazil", hint: "Famous for football and the Amazon." },
        { word: "japan", hint: "Known for sushi and samurai." },
        { word: "italy", hint: "The birthplace of pizza and pasta." },
        { word: "egypt", hint: "Home of the Great Pyramids." },
        { word: "canada", hint: "The second largest country by area." }
    ],
    space: [
        { word: "galaxy", hint: "A massive system of stars, dust, and gas." },
        { word: "asteroid", hint: "A rocky object orbiting the Sun." },
        { word: "nebula", hint: "A cloud of gas and dust in space." },
        { word: "saturn", hint: "A planet with prominent rings." },
        { word: "comet", hint: "An icy body that releases gas and dust." }
    ],
    technology: [
        { word: "internet", hint: "A global network for communication." },
        { word: "robotics", hint: "The field of designing intelligent machines." },
        { word: "smartphone", hint: "A device combining a phone and a computer." },
        { word: "algorithm", hint: "A set of instructions for solving problems." },
        { word: "blockchain", hint: "A decentralized ledger technology." }
    ],
    food: [
        { word: "sushi", hint: "A Japanese dish with rice and fish." },
        { word: "burger", hint: "A sandwich with a patty inside." },
        { word: "spaghetti", hint: "A popular Italian pasta dish." },
        { word: "taco", hint: "A Mexican dish with a folded tortilla." },
        { word: "chocolate", hint: "A sweet treat made from cacao." }
    ],
};

let chosenWord;
let chosenCategoryWords;
let lives;
let guessedWord;
const maxLives = 6;

const categoryDiv = document.getElementById("category");
const categorySelectionDiv = document.getElementById("category-selection");
const gameContainer = document.getElementById("game-container");
const alphabetDiv = document.getElementById("alphabet");
const wordDiv = document.getElementById("word");
const livesDiv = document.getElementById("lives");
const hintBtn = document.getElementById("hint-btn");
const hintDiv = document.getElementById("hint");
const restartBtn = document.getElementById("restart-btn");
const hangmanCanvas = document.getElementById("hangmanCanvas");
const ctx = hangmanCanvas.getContext("2d");

function showCategorySelection() {
    categoryDiv.innerHTML = "";
    for (let category in categories) {
        const categoryButton = document.createElement("button");
        categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryButton.addEventListener("click", () => startGame(category));
        categoryDiv.appendChild(categoryButton);
    }
}

function startGame(category) {
    chosenCategoryWords = categories[category];
    initializeGame();
    categorySelectionDiv.style.display = "none";
    gameContainer.style.display = "block";
}

function initializeGame() {
    const randomIndex = Math.floor(Math.random() * chosenCategoryWords.length);
    chosenWord = chosenCategoryWords[randomIndex].word;
    guessedWord = Array(chosenWord.length).fill("_");
    lives = maxLives;
    livesDiv.textContent = `You have ${lives} lives remaining.`;
    wordDiv.textContent = guessedWord.join(" ");
    hintDiv.textContent = "Clue will appear here.";

    adjustCanvasSize();
    drawScaffold();
    generateAlphabet();
}

function adjustCanvasSize() {
    const availableHeight = window.innerHeight * 0.4;
    hangmanCanvas.height = availableHeight;
    hangmanCanvas.width = availableHeight * 0.75;
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
}

function generateAlphabet() {
    alphabetDiv.innerHTML = "";
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
        const letterDiv = document.createElement("div");
        letterDiv.textContent = char;
        letterDiv.classList.add("letter");
        letterDiv.dataset.char = char;
        letterDiv.addEventListener("click", () => handleGuess(char, letterDiv));
        alphabetDiv.appendChild(letterDiv);
    }
}

function handleGuess(char, letterDiv) {
    if (!chosenWord.includes(char)) {
        lives--;
        livesDiv.textContent = `You have ${lives} lives remaining.`;
        drawHangman();
    } else {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === char) {
                guessedWord[i] = char;
            }
        }
        wordDiv.textContent = guessedWord.join(" ");
    }

    letterDiv.classList.add("disabled");
    letterDiv.removeEventListener("click", () => handleGuess(char, letterDiv));
    checkGameState();
}

function checkGameState() {
    if (!guessedWord.includes("_")) {
        alert("Congratulations! You won!");
        disableAlphabet();
    } else if (lives === 0) {
        alert(`Game over! The word was: ${chosenWord}`);
        disableAlphabet();
    }
}

function disableAlphabet() {
    document.querySelectorAll(".letter").forEach(letter => {
        letter.classList.add("disabled");
        letter.removeEventListener("click", handleGuess);
    });
}

function drawScaffold() {
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";

    ctx.beginPath();
    ctx.moveTo(50, hangmanCanvas.height - 10);
    ctx.lineTo(hangmanCanvas.width - 50, hangmanCanvas.height - 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(hangmanCanvas.width / 4, hangmanCanvas.height - 10);
    ctx.lineTo(hangmanCanvas.width / 4, 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(hangmanCanvas.width / 4, 10);
    ctx.lineTo(hangmanCanvas.width * 0.75, 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(hangmanCanvas.width * 0.75, 10);
    ctx.lineTo(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.25);
    ctx.stroke();
}

function drawHangman() {
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";

    switch (maxLives - lives) {
        case 1:
            ctx.beginPath();
            ctx.arc(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.3, hangmanCanvas.height * 0.05, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2:
            ctx.beginPath();
            ctx.moveTo(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.35);
            ctx.lineTo(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.55);
            ctx.stroke();
            break;
        case 3:
            ctx.beginPath();
            ctx.moveTo(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.4);
            ctx.lineTo(hangmanCanvas.width * 0.7, hangmanCanvas.height * 0.5);
            ctx.stroke();
            break;
        case 4:
            ctx.beginPath();
            ctx.moveTo(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.4);
            ctx.lineTo(hangmanCanvas.width * 0.8, hangmanCanvas.height * 0.5);
            ctx.stroke();
            break;
        case 5:
            ctx.beginPath();
            ctx.moveTo(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.55);
            ctx.lineTo(hangmanCanvas.width * 0.7, hangmanCanvas.height * 0.7);
            ctx.stroke();
            break;
        case 6:
            ctx.beginPath();
            ctx.moveTo(hangmanCanvas.width * 0.75, hangmanCanvas.height * 0.55);
            ctx.lineTo(hangmanCanvas.width * 0.8, hangmanCanvas.height * 0.7);
            ctx.stroke();
            break;
    }
}

hintBtn.addEventListener("click", () => {
    const wordHint = chosenCategoryWords.find(w => w.word === chosenWord).hint;
    hintDiv.textContent = wordHint;
});

restartBtn.addEventListener("click", () => {
    categorySelectionDiv.style.display = "block";
    gameContainer.style.display = "none";
    showCategorySelection();
});

showCategorySelection();