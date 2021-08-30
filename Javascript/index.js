const billInput = document.getElementById("bill-input");
const fivePercentButton = document.getElementById("five");
const tenPercentButton = document.getElementById("ten");
const fifteenPercentButton = document.getElementById("fifteen");
const twentyfivePercentButton = document.getElementById("twentyfive");
const fiftyPercentButton = document.getElementById("fifty");
const customPercentInput = document.getElementById("custom");
const numberOfPeopleInput = document.getElementById("number-of-people");
const individualTotalText = document.getElementById("individual-total");
const combinedTotalText = document.getElementById("combined-total");
const resetButton = document.getElementById("reset-button");

let tipPercent;

fivePercentButton.addEventListener("click", OnFivePercentButtonClick);
tenPercentButton.addEventListener("click", OnTenPercentButtonClick);
fifteenPercentButton.addEventListener("click", OnFifteenPercentButtonClick);
twentyfivePercentButton.addEventListener(
  "click",
  OnTwentyFivePercentButtonClick
);
fiftyPercentButton.addEventListener("click", OnFiftyPercentButtonClick);
resetButton.addEventListener("click", OnResetButton);
customPercentInput.addEventListener("input", OnCustomPercentInput);
numberOfPeopleInput.addEventListener("input", OnNumberOfPeopleInput);

function OnFivePercentButtonClick() {
  UpdateTipPercentage(5);
}
function OnTenPercentButtonClick() {
  UpdateTipPercentage(10);
}
function OnFifteenPercentButtonClick() {
  UpdateTipPercentage(15);
}
function OnTwentyFivePercentButtonClick() {
  UpdateTipPercentage(25);
}
function OnFiftyPercentButtonClick() {
  UpdateTipPercentage(50);
}
function OnCustomPercentInput() {
  UpdateTipPercentage(customPercentInput.value);
}
function OnNumberOfPeopleInput() {
  UpdateTipAmounts();
}

function OnResetButton() {
  console.log("hit reset");
  billInput.value = 0;
  numberOfPeopleInput.value = 1;
  individualTotalText.innerHTML = "$0.00";
  combinedTotalText.innerHTML = "$0.00";
  customPercentInput.value = null;
}

function UpdateTipPercentage(percent) {
  tipPercent = percent;
  UpdateTipAmounts();
}

function UpdateTipAmounts() {
  individualTotalText.innerHTML = `$${String(CalculateIndividualTip())}`;
  combinedTotalText.innerHTML = `$${String(CalculateIndividualTotal())}`;
}

function CalculateIndividualTip() {
  let tip = (billInput.value * tipPercent) / 100 / numberOfPeopleInput.value;
  console.log(tip);
  return tip.toFixed(2);
}
function CalculateIndividualTotal() {
  let total =
    billInput.value / numberOfPeopleInput.value +
    Number(CalculateIndividualTip());
  return total.toFixed(2);
}
