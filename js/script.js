const countD = document.getElementById("countdown");
let counter = 5; //imposta i secondi del countdown

const intervalID = setInterval(countF, 1000);

countF(); //la chiamo subito

// FUNCTION TO COUNTDOWN
function countF() {
  if (counter >= 0) {
    countD.innerText = counter--;
  } else {
    clearInterval(intervalID);
  }
}
