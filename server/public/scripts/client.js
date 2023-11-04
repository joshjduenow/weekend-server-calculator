console.log('client.js is sourced!');

function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()
let firstNumber = 0;
let secondNumber = 0;

function onAdd(event){
    event.preventDefault();
    let adding = document.getElementById("plusBtn");
    console.log("checking add function", adding);
}

function onSubtract(event){
    event.preventDefault()

    console.log("checking subtract function",);

}

function onMultiply(event){
    event.preventDefault()
    console.log("checking multiply function",);

}

function onDivide(event){
    event.preventDefault()
    console.log("checking divide function",);

}

function onEquals(event){
    event.preventDefault()
    document.getElementById('numberOneIn').value = '';
    document.getElementById('numberTwoIn').value = '';
    console.log("checking equal function",);
    axios({
        url: '/calculations',
        method: 'GET'
    }).then((response) => {
        console.log('response.data:', response.data)
        let equations = response.data
        renderEquation(equations)
    })
}


function onClear(event){
    event.preventDefault()
    console.log("checking clear function",);

}
function renderEquation(equations) {
    let equationResults = document.getElementById('resultHistory');
    //equationResults.innerHTML = '';
    for (let equation of equations) {
        equationResults.innerHTML += `
        <p>${equation}:</p><br>

      `
      console.log('is my equation list working?', equation);
    }
}
//let roundCounter =0;

// function onReset() {
//   // technichally don't need to clear guesses, but it 
//   // looked funny with them being there if playing multiple games
//   let rounds = document.getElementById('playerRound');
//   rounds.innerHTML = '';
//   roundCounter = 0;
//   axios({
//     method: 'POST',
//     url: '/randomNumber'
//   })
// }

// function formSubmit(event) {
//   event.preventDefault()
// }

// function onSubmit() {
  
//   let playerOne = document.getElementById('playerOne').value;
//   let playerTwo = document.getElementById('playerTwo').value;
//   let playerThree = document.getElementById('playerThree').value;
//   let numberOne = document.getElementById('oneNumber').value;
//   let numberTwo = document.getElementById('twoNumber').value;
//   let numberThree = document.getElementById('threeNumber').value;
//   document.getElementById('playerOne').value = '';
//   document.getElementById('playerTwo').value = '';
//   document.getElementById('playerThree').value = '';
//   document.getElementById('oneNumber').value = '';
//   document.getElementById('twoNumber').value = '';
//   document.getElementById('threeNumber').value = '';
//   let newRound = [
//     {
//       playerName: playerOne,
//       playerNumber: Number(numberOne)
//     },
//     {
//       playerName: playerTwo,
//       playerNumber: Number(numberTwo),
//     },
//     {
//       playerName: playerThree,
//       playerNumber: Number(numberThree)
//     }]
//     roundCounter ++;
//     console.log(roundCounter);
//     console.log('expect array of input guesses', newRound);
//   axios({
//     method: 'POST',
//     url: '/round',
//     data: newRound
//   }).then((response) => {
//     getRound()
//   })
  
// }

// function getRound() {
//     axios({
//       url: '/round',
//       method: 'GET'
//   }).then((response) => {
//     let currentRound = response.data;
//     console.log('expect array of guess with results', currentRound);
//     renderRound(currentRound)
//   })
// }

// function renderRound(currentRound){
//   let rounds = document.getElementById('playerRound');
//   rounds.innerHTML = '';
//   for (let i=0; i < currentRound.length; i++){
//     console.log('expect one person:', currentRound[i]);
//     rounds.innerHTML += `
//       <li>${currentRound[i].playerName} guessed ${currentRound[i].playerNumber} which is ${currentRound[i].numberComparison}</li>
//     `
//   }
//   document.getElementById('total-rounds').textContent = roundCounter;
  
//   console.log('Expect a round counter');
// }
// //innerHtml
//   //will parse`` items as html within .js

// //textContent
//   //used to modify content in HTML (text)

// //value
//   //this is how we obtain text that a user types into
//   //types into and <input>
//   //if you set the value="" if the <input>
//   //it will store that value in your input box

// //querySelectory is used when an ID is not used

// //Radio Buttons research...