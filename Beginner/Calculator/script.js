/*
//**  monitor clicks of each button
// listen to each click,observe the type of key pressed
// if key is a number, display number on the display.
// if it's a decimal, concatenate "." to the firstValue
// if it's an operator, hold firstvalue and operator(+,-,*,/)
// if the key is a clear button, clear everything on memory and display "0"
// if equalTo, claculate firstValue and secondValue and return result.

//**  monitor display of content pressed
// if a number is pressed, display firstValue
// if an operator is pressed, display nothing but the firstValue
// if secondValue is press, display secondValue
// if an operator or equalTo is pressed, return result and display result as firstValue
// if the clear key is engaged, clear the display and return "0"

//**  perform operation(calculation)
// Note type of operation and execute
// return result of operation and update result as firstValue
 */

const allBtnNumber = document.querySelectorAll(".numbers");
const allBtnOperations = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const showEqual = document.querySelector(".equalto");
const display = document.querySelector(".display");
const allMemoryBtn = document.querySelectorAll(".memory");

let result = "";
let secondVal = "";
let firstVal = "";
let isOperating;
let toEvaluate;
let _operation;

const alterDisplay = (value) => {
  if (value || value === 0) display.innerText = value;
  if (secondVal) {
    toEvaluate = `${firstVal} ${_operation} ${secondVal}`;
  }
};

const assignSigns = (action) => {
  if (action === "add") _operation = "+";
  if (action === "subtract") _operation = "-";
  if (action === "multiply") _operation = "*";
  if (action === "divide") _operation = "/";
};

for (let i = 0; i < allBtnNumber.length; i++) {
  const element = allBtnNumber[i];
  element.addEventListener("click", (e) => {
    if (isOperating && e.target.innerText === ".") {
      const dotExists = secondVal.includes(".");
      if (!dotExists) secondVal += ".";
      return alterDisplay(secondVal);
    } else if (e.target.innerText === ".") {
      const hasDot = firstVal.includes(".");
      if (!hasDot) firstVal += ".";
      return alterDisplay(firstVal);
    } else {
      if (isOperating) {
        secondVal += e.target.innerText;
        alterDisplay(secondVal);
      } else {
        firstVal += e.target.innerText;
        alterDisplay(firstVal);
      }
    }

    // if (alterDisplay(firstVal).includes(".")) {
    //   return;
    // }
  });
}

for (var i = 0; i < allBtnOperations.length; i++) {
  const element = allBtnOperations[i];
  element.addEventListener("click", (e) => {
    const { action } = e.target.dataset;
    if (!isOperating) isOperating = true;
    assignSigns(action);
    performOperation(action);

    // alterDisplay({ value: e.target.innerText, type: "operator" });
  });
}
deleteBtn.addEventListener("click", (e) => {
  if (!isOperating) {
    if (firstVal && firstVal.length !== 1) {
      let sliced = firstVal.slice(0, firstVal.length - 1);
      firstVal = sliced;
      alterDisplay(firstVal);
    } else {
      firstVal = "";
      alterDisplay("0");
    }
  } else {
    if (secondVal && secondVal.length !== 1) {
      let slicedStr = secondVal.slice(0, secondVal.length - 1);
      secondVal = slicedStr;
      alterDisplay(secondVal);
    } else {
      secondVal = "";
      alterDisplay("0");
    }
  }
});
clearBtn.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (firstVal || secondVal) {
    firstVal = "";
    secondVal = "";
    isOperating = false;
    alterDisplay("0");
  }
});

showEqual.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  if (eval) {
    alterDisplay(performOperation(result));
  }
});

const performOperation = (operation) => {
  if (!secondVal) return;
  result = eval(toEvaluate);
  toEvaluate = "";
  secondVal = "";
  firstVal = result;
  alterDisplay(result);
};
