
let randomNumbers = [];
for (let i = 0; i < 52; i++) {
  let randomNumber = Math.floor(Math.random() * 52);

  while (randomNumbers.includes(randomNumber)) {
    //if a number is repeated, then get a new random number
    randomNumber = Math.floor(Math.random() * 52);
  }

  randomNumbers[i] = randomNumber;

}

console.log(randomNumbers);