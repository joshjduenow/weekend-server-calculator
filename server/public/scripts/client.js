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