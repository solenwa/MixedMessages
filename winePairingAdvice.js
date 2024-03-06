function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Pool of advices for meals and drinks to pair
const foodAndWinePairing = {
  food: [
    "Raclette",
    "Gnocchi al gorgonzola",
    "Morrocan Lamb & truffles",
    "Vol-au-vent",
    "Roasted duck and potatoes",
  ],
  drink: [
    "Whisky",
    "La Chabanne, Domaine des Bérioles",
    "Calvados",
    "Champagne",
    `L'Amourvèdre, Domaine des Terres Promises`,
  ],
};

function foodAndWineRecommendation() {
  // Array to store the future food and wine pairing
  let recommendation = [];

  for (let element in foodAndWinePairing) {
    // To generate a random index inside the options of food and wine
    let optionIdx = generateRandomNumber(foodAndWinePairing[element].length);

    switch (element) {
      case "food":
        recommendation.push(
          `I recommend pairing ${foodAndWinePairing[element][optionIdx]}`
        );
        break;
      case "drink":
        recommendation.push(` with ${foodAndWinePairing[element][optionIdx]}.`);
        break;
      default:
        recommendation.push(`An error occured.`);
    }
  }

  // To format the array into an easily readable message
  const formatted = recommendation.join("");
  return console.log(formatted);
}

foodAndWineRecommendation();
