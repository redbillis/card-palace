const spades = [
  "A♠️",
  "2♠️",
  "3♠️",
  "4♠️",
  "5♠️",
  "6♠️",
  "7♠️",
  "8♠️",
  "9♠️",
  "10♠️",
  "J♠️",
  "Q♠️",
  "K♠️",
];
const hearts = [
  "A♥️",
  "2♥️",
  "3♥️",
  "4♥️",
  "5♥️",
  "6♥️",
  "7♥️",
  "8♥️",
  "9♥️",
  "10♥️",
  "J♥️",
  "Q♥️",
  "K♥️",
];
const diamonds = [
  "A♦️",
  "2♦️",
  "3♦️",
  "4♦️",
  "5♦️",
  "6♦️",
  "7♦️",
  "8♦️",
  "9♦️",
  "10♦️",
  "J♦️",
  "Q♦️",
  "K♦️",
];
const clubs = [
  "A♣️",
  "2♣️",
  "3♣️",
  "4♣️",
  "5♣️",
  "6♣️",
  "7♣️",
  "8♣️",
  "9♣️",
  "10♣️",
  "J♣️",
  "Q♣️",
  "K♣️",
];

// Variable initiation.
let deck = [];
let choices = [];
let flipped = false;

const choiceText = document.getElementById("choiceText");
const shuffledCards = document.querySelector("#shuffledCards");

function shuffle(cards) {
  // This function shuffles an array of cards using the Fischer-Yates shuffle Algorithm.

  // Iterate through the array from the last card to the second card.
  for (let i = cards.length - 1; i > 0; --i) {
    // Generate a random index j, which is less than the current index i.
    const j = Math.floor(Math.random() * (i - 1));

    // Swap the card at index i with the card at index j.
    // This involves a neat trick using array destructuring:
    // - We create a temporary array with the values of cards[i] and cards[j]
    // - We then assign the values of cards[j] and cards[i] to the elements of this temporary array
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  // Return the shuffled array.
  return cards;
}

// ♠️ Spades Choice Functionality
document.getElementById("spades").addEventListener("click", () => {
  choices.push(...spades);
  choiceText.innerHTML += "♠️";
});

// ♥️ Hearts Choice Functionality
document.getElementById("hearts").addEventListener("click", () => {
  choices.push(...hearts);
  choiceText.innerHTML += "♥️";
});

// ♦️ Diamonds Choice Functionality
document.getElementById("diamonds").addEventListener("click", () => {
  choices.push(...diamonds);
  choiceText.innerHTML += "♦️";
});

// ♣️ Clubs Choice Functionality
document.getElementById("clubs").addEventListener("click", () => {
  choices.push(...clubs);
  choiceText.innerHTML += "♣️";
});

// Event Listener for clearing the user's choices.
document.getElementById("clear").addEventListener("click", () => {
  choices = [];
  choiceText.innerHTML = "";
  shuffledCards.innerHTML = "";
});

// Event Listener for calling the "shuffle" function for shuffling the cards.
document.getElementById("shuffle").addEventListener("click", () => {
  deck = shuffle(choices);
  deck.forEach((card) => {
    shuffledCards.innerHTML += `
      <div class="card" data-card="${card}">
        <span>${card}</span>
      </div>
    `;
  });
});

// Flip all cards when clicked.
document.getElementById("flipCards").addEventListener("click", () => {
  flipped = !flipped; // Toggle flipped state
  shuffledCards.innerHTML = "";
  deck.forEach((card) => {
    shuffledCards.innerHTML += `
      <div class="card" data-card="${card}" data-flipped="${flipped}">
        <span>${flipped ? "🂠" : card}</span>
      </div>
    `;
  });
  addCardClickListeners();
});

// Add click event listeners for flipping to each card.
function addCardClickListeners() {
  document.querySelectorAll(".card").forEach((cardElement) => {
    cardElement.addEventListener("click", () => {
      const isFlipped = cardElement.getAttribute("data-flipped") === "true";
      cardElement.setAttribute("data-flipped", !isFlipped);
      cardElement.innerHTML = `
        <span>${isFlipped ? cardElement.getAttribute("data-card") : "🂠"}</span>
      `;
    });
  });
}
