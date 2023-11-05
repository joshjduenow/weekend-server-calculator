const express = require('express');
const app = express();
let PORT = process.env.PORT || 8001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = []



// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  res.send(calculations);
})
// this sends the result to the client
// app.get('/result', (req, res) => {
//   res.send({ result: result });
// })

// POST /calculations
app.post('/calculations', (req, res) => {
  console.log('POST /calculations received a request!')
  console.log('req.body', req.body)
  newCalc(req.body)
  res.sendStatus(201)
})
function newCalc(object) {
  // let numOne = newCalc.numOne;
  // let numTwo = newCalc.numTwo;
  // let operator = object.operator;
  if (object.operator === '+') {
    object.result = Number(object.numOne) + Number(object.numTwo)
    calculations.push(object);
  }
  else if (object.operator === '-') {
    object.result = Number(object.numOne) - Number(object.numTwo)
    calculations.push(object)
  }
  else if (object.operator === '*') {
    object.result = Number(object.numOne) * Number(object.numTwo)
    calculations.push(object)
  }
  else if (object.operator === '/') {
    object.result = Number(object.numOne) / Number(object.numTwo)
    calculations.push(object)
  }
  console.log(object);
}


// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 8001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
