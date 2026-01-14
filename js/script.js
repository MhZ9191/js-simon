//VARIABILI PER IL COUNTDOWN
const countD = document.getElementById("countdown");
let counter = 5; //imposta i secondi del countdown
const info = document.getElementById("instructions"); //info per utente

//VARIABILI PER I NUMERI CASUALI
const numbers = document.getElementById("numbers-list");
const liArray = generateFiveRandomNumbers(); //assegno un array di 5 numeri random

outputNumbers(liArray); //invoco la funzione che assegna i numeri ai tag <li>

//VARIABILI INTERVAL
const intervalID = setInterval(countF, 1000);

//VARIABILI FORM
const aForm = document.getElementById("answers-form");
const tInput = document.querySelectorAll(".form-control");
const message = document.getElementById("message");

//EVENT LISTENER FORM
aForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let contCorrispondenze = 0;
  const outputArray = [];
  //ciclo per contare corrispondenze
  for (let i = 0; i < 5; i++) {
    if (liArray.includes(parseInt(tInput[i].value))) {
      ++contCorrispondenze;
      outputArray.push(tInput[i].value);
    }
  }

  message.innerText = `Hai indovinato ${contCorrispondenze} numeri! (${outputArray})`;
});

countF(); //la chiamo subito
// FUNCTION INTERVAL COUNTDOWN
function countF() {
  if (counter >= 0) {
    countD.innerText = counter--;
  } else {
    clearInterval(intervalID);
    countD.innerText = "";
    numbers.classList.add("d-none");
    aForm.classList.remove("d-none");
    info.innerText = "Inserisci i numeri!";
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

//FUNCTION TO ASSIGN NUMBER TO <LI>
function outputNumbers(listArray) {
  for (let i = 0; i < listArray.length; i++) {
    numbers.innerHTML += `<li>${listArray[i]}</li>`;
  }
  return;
}
