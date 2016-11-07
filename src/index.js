// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope" and IIFEs
function keepScore() {

var score = 0

function increaseScore() {
    score++
}

function decreaseScore() {
    score--
}

function run(){
    // ...
    increaseScore()
}

function printScore() {
  console.log(score)
}

}

//From Todd Motto

// var Module = (function () {
//   return {
//     myMethod: function () {
//
//     },
//     someOtherMethod: function () {
//
//     }
//   };
// })();
//
// // call module + methods
// Module.myMethod();
// Module.someOtherMethod();
