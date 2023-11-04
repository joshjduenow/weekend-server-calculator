console.log('client.js is sourced!');

function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()
let operators = "";

function formSubmit(event){
    event.preventDefault()
}
function onAdd(){
    operators = "+"
    console.log("checking add function", operators);
}

function onSubtract(){
    operators = "-"

    console.log("checking subtract function",);

}

function onMultiply(){
    operators = "*"
    console.log("checking multiply function",);

}

function onDivide(){
    operators = "/"
    console.log("checking divide function",);

}


function onEquals(){
    let firstNumber = document.getElementById('numberOneIn').value;
    let secondNumber = document.getElementById('numberTwoIn').value;
    let newCalc = {
        firstNumber,
        secondNumber,
        operators
    }
    document.getElementById('numberOneIn').value = '';
    document.getElementById('numberTwoIn').value = '';
    console.log("checking equal function", firstNumber, secondNumber, operators, newCalc);
//     axios({
//         url: '/result',
//         method: 'POST'
//     }).then((response) => {
//         console.log('response.data:', response.data)
//         let equations = response.data
//         renderEquation(equations)
//     })
}


function onClear(){
    document.getElementById('numberOneIn').value = '';
    document.getElementById('numberTwoIn').value = '';

    console.log("checking clear function", );

}
function renderEquation(equations) {
    let equationResults = document.getElementById('resultHistory');
    for (let equation of equations) {
        equationResults.innerHTML += `
        <p>${equation}:</p><br>

      `
      console.log('is my equation list working?', equation);
    }
}