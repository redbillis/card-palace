# Card Palace!
This app is built with one goal in mind: shuffling playing cards. It uses the Fischer-Yates shuffle algorithm to provide a random shuffle, perfect for games or the memory palace technique.

## Fischer-Yates shuffle Algorithm.
The Fisher–Yates shuffle is an algorithm for shuffling a finite sequence. The algorithm takes a list of all the elements of the sequence, and continually determines the next element in the shuffled sequence by randomly drawing an element from the list until no elements remain.[1] The algorithm produces an unbiased permutation: every permutation is equally likely. The modern version of the algorithm takes time proportional to the number of items being shuffled and shuffles them in place.

The Fisher–Yates shuffle is named after Ronald Fisher and Frank Yates, who first described it. It is also known as the Knuth shuffle after Donald Knuth.[2] A variant of the Fisher–Yates shuffle, known as Sattolo's algorithm, may be used to generate random cyclic permutations of length n instead of random permutations.

## shuffle function used for this app.

```javascript
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
```

## References
- [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
