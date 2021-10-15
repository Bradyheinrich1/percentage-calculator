// Declaring Variables

const percentOne = document.getElementById('percentInputOne');
const percentTwo = document.getElementById('percentInputTwo');
const percentThree = document.getElementById('percentInputThree');
const percentFour = document.getElementById('percentInputFour');
const percentFive = document.getElementById('percentInputFive');
const percentSix = document.getElementById('percentInputSix');

const buttonOne = document.getElementById('btnOne');
const buttonTwo = document.getElementById('btnTwo');
const buttonThree = document.getElementById('btnThree');

const outputOne = document.getElementById('resultsOne');
const outputTwo = document.getElementById('resultsTwo');
const outputThree = document.getElementById('resultsThree');

// Event Listeners

buttonOne.addEventListener("click", firstCalc);
buttonTwo.addEventListener("click", secondCalc);
buttonThree.addEventListener("click", thirdCalc);

percentOne.addEventListener("input", clearSpaceOne);
percentTwo.addEventListener("input", clearSpaceOne);
percentThree.addEventListener("input", clearSpaceTwo);
percentFour.addEventListener("input", clearSpaceTwo);
percentFive.addEventListener("input", clearSpaceThree);
percentSix.addEventListener("input", clearSpaceThree);


// Clear Space Functions

function clearSpaceOne() {
    outputOne.innerHTML = "-";
}

function clearSpaceTwo() {
    outputTwo.innerHTML = "-";
}

function clearSpaceThree() {
    outputThree.innerHTML = "-";
}

// Calculation Functions

function firstCalc() {
let results = (percentOne.value / 100) * percentTwo.value;
results = +results.toFixed(2);
outputOne.innerHTML = results;
};

function secondCalc() {
    let results = (percentThree.value / percentFour.value) * 100;
    results = +results.toFixed(2);
    outputTwo.innerHTML = results + "%";
};

function thirdCalc() {
    let results = (percentSix.value - percentFive.value) / percentFive.value * 100;
    results = +results.toFixed(2);
    outputThree.innerHTML = results + "%";
};