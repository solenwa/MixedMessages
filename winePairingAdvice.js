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

//Iterate over the pool of advices
function foodAndWineRecommendation() {
  for (let element in foodAndWinePairing) {
    let optionIdx = generateRandomNumber(foodAndWinePairing[element].length);
    let pairingAdvice = `I recommend pairing ${foodAndWinePairing[food][optionIdx]} with ${foodAndWinePairing[drink][optionIdx]}`;
    console.log(pairingAdvice);
    return pairingAdvice;
  }
}

foodAndWineRecommendation();
