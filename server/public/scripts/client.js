console.log('client.js is sourced!');

function onReady() {
    console.log("JavaScript is loaded!")
}

onReady()
let operator = "";

function formSubmit(event) {
    event.preventDefault()
}
function onAdd() {
    console.log("checking add function", operator);
    return operator = "+";
    
}

function onSubtract() {
    console.log("checking subtract function",);
    return operator = "-";
}

function onMultiply() {
    console.log("checking multiply function",);
    return operator = "*";
}

function onDivide() {
    console.log("checking divide function",);
    return operator = "/";
}


function onEquals() {
    let firstNumber = document.getElementById('numberOneIn').value;
    let secondNumber = document.getElementById('numberTwoIn').value;
    let newCalc = {
        firstNumber,
        operator,
        secondNumber
        
    }
    document.getElementById('numberOneIn').value = '';
    document.getElementById('numberTwoIn').value = '';
    console.log("checking equal function", firstNumber, secondNumber, operator, newCalc);
        axios({
            url: '/calculations',
            method: 'POST'
        }).then((response) => {
            console.log('response.data:', response.data)
            let equations = response.data
            //renderEquation(equations)
        })
}


function onClear() {
    document.getElementById('numberOneIn').value = '';
    document.getElementById('numberTwoIn').value = '';

    console.log("checking clear function");

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