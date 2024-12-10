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
const choiceText = document.getElementById("choiceText");
const cardText = document.querySelector("#cardText");

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
  cardText.innerHTML = "";
});

// Event Listener for calling the "shuffle" function for shuffling the cards.
document.getElementById("shuffle").addEventListener("click", () => {
  deck = shuffle(choices);
  deck.forEach((card) => {
    cardText.innerHTML += 
    `
      <div class="card">
        <h2>${card}</h2>
      </div>
    `;
  });
  // cardText.innerHTML = deck.join("_ ");
});
