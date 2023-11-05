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
    let numOne = document.getElementById('numberOneIn').value;
    let numTwo = document.getElementById('numberTwoIn').value;
    let equals = {
        numOne: Number(numOne),
        operator: operator,
        numTwo: Number(numTwo)

    }
    document.getElementById('numberOneIn').value = '';
    document.getElementById('numberTwoIn').value = '';
    console.log("checking equal function", numOne, numTwo, operator, equals);
    axios({
        url: '/calculations',
        method: 'POST',
        data: equals
    }).then((response) => {
        console.log('response.data:', response.data)
        getCalc();
    })
}
getCalc()

function getCalc() {
    axios({
        url: '/calculations',
        method: 'GET'
    }).then((response) => {
        console.log('response.data:', response.data)
        renderEquation(response.data)
    })
}

function onClear() {
    document.getElementById('numberOneIn').value = '';
    document.getElementById('numberTwoIn').value = '';

    console.log("checking clear function");

}
function renderEquation(equations) {
    let equationResults = document.getElementById('resultHistory');
    equationResults.innerHTML = "";
    for (let i = 0; i < equations.length; i++) {
        equationResults.innerHTML += `

        <li>${equations[i].numOne}
        ${equations[i].operator}
        ${equations[i].numTwo} =       
        ${equations[i].result}</li>


        `
    }

    let mostRecent = document.getElementById('recentResult');
    mostRecent.innerHTML = "";
    let lastResult = equations.slice(-1);
    mostRecent.innerHTML += `
    <h2>${lastResult[0].result}</h2>
    `;
    console.log('is my equation list working?', equations, lastResult);

}