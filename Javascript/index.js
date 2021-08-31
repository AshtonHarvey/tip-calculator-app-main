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
const errorText = document.getElementById("error-message");
const peopleInput = document.getElementById("people-input");

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
  if (isValidNumber()) {
    UpdateTipAmounts();
    DisableError();
  } else EnableError();
}

function EnableError() {
  errorText.classList.remove("hidden-element");
  peopleInput.classList.add("error-border");
}

function DisableError() {
  errorText.classList.add("hidden-element");
  peopleInput.classList.remove("error-border");
}

function isValidNumber() {
  let valid = numberOfPeopleInput.value > 0 ? true : false;
  console.log(`checking is valid:  ${valid} ${numberOfPeopleInput.value}`);

  return valid;
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
  console.log("updating tip");
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
