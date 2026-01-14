//VARIABILI PER IL COUNTDOWN
const countD = document.getElementById("countdown");
let counter = 5; //imposta i secondi del countdown

//VARIABILI PER I NUMERI CASUALI
const numbers = document.getElementById("numbers-list");
const liArray = generateFiveRandomNumbers(); //assegno un array di 5 numeri random

//VARIABILE INTERVAL
const intervalID = setInterval(countF, 1000);

countF(); //la chiamo subito
// FUNCTION INTERVAL COUNTDOWN
function countF() {
  if (counter >= 0) {
    countD.innerText = counter--;
  } else {
    clearInterval(intervalID);
  }
}

// FUNZIONE CHE GENERA 5 NUMERI RANDOM TRA 1 E 50
function generateFiveRandomNumbers() {
  // non voglio numeri doppi
  const tmpArray = [];
  for (let i = 0; i < 5; i++) {
    let tmpNumber = Math.floor(Math.random() * 50 + 1);
    while (tmpArray.includes(tmpNumber)) {
      tmpNumber = Math.floor(Math.random() * 50 + 1);
    }
    tmpArray.push(tmpNumber);
  }

  return tmpArray;
}
