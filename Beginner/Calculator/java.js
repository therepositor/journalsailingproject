const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator_keys");
const firstValue;
const secondValue;
const displayedNum;
const result;

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
  }
  const key = e.target;
  const action = key.dataset.action;
  if (!action) {
    console.log("number key!");
  }
  if (
    action === "add" ||
    action === "subtract" ||
    action === "divide" ||
    action === "multiply"
  ) {
    console.log("operator key!");
  }
  if (action === "clear") {
    console.log("clear key!");
  }
  if (action === "decimal") {
    console.log("decimal key!");
  }
  if (action === "calculate") {
    console.log("equal key!");
  }
});

const display = document.querySelector(".display");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
  }
  if (!action) {
    if (displayedNum === 0) {
      display.textContent = keyContent;
    }
  }
  if (!action) {
    if (displayedNum === 0) {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }
  if (action === "decimal") {
    display.textContent = keyContent + ".";
  }
  if (
    action === "add" ||
    action === "subtract" ||
    action === "divide" ||
    action === "multiply"
  ) {
    key.classList.add("is-depressed");
    calculator.dataset.previousKeyType = "operator";
  }
});

keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  if (e.target.matches("button")) {
    const key = e.target;
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
  }
  const previousKeyType = calculator.dataset.previousKeyType;

  if (!action) {
    if (displayedNum === "0" || previousKeyType === "operator") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }
  if (action === "calculate") {
    const secondValue = displayedNum;
  }
  if (
    action === "add" ||
    action === "subtract" ||
    action === "divide" ||
    action === "multiply"
  ) {
    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = action;
  }
  if (action === "calculate") {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;

    display.textContent = calculate(firstValue, operator, secondValue);
  }
});

const calculate = (n1, operator, n2) => {
  const result = "";
  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  }
  return result;
};
if (!displayedNum.includes(".")) {
  display.textContent = displayedNum + ".";
}
if (!action) {
  calculator.dataset.previousKey = "number";
}
if (action === "decimal") {
  calculator.dataset.previousKey = "decimal";
}
if (action === "clear") {
  calculator.dataset.previousKey = "clear";
}
if (action === "calculate") {
  calculator.dataset.previousKey = "calculate";
}
if (action === "decimal") {
  if (!displayedNum.includes(".")) {
    display.textContent = displayedNum + ".";
  } else if (previousKeyType === "operator") {
    display.textContent = "0.";
  }
  calculator.dataset.previousKeyType = "decimal";
}
if (
  action === "add" ||
  action === "subtract" ||
  action === "divide" ||
  action === "multiply"
) {
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator;
  const secondValue = displayedNum;
}
if (firstValue && operator) {
  display.textContent = calculate(firstValue, operator, secondValue);
}
key.classList.add("is-depressed");
calculator.dataset.previousKeyType = "operator";
calculator.dataset.firstValue = displayedNum;
calculator.dataset.operator = action;

if (firstValue && operator && previousKeyType !== "operator") {
  display.textContent = calculate(firstValue, operator, secondValue);
}
const firstValue = calculator.dataset.firstValue;
const operator = calculator.dataset.operator;
const secondValue = displayedNum;

if (firstValue && operator && previousKeyType == "operator") {
  const calcValue = calculate(firstValue, operator, secondValue);
  display.textContent = calcValue;
  calculator.dataset.firstValue = calcValue;
} else {
  calculator.dataset.firstValue = displayedNum;
}
key.classList.add("is-depressed");
calculator.dataset.previousKeyType = "operator";
calculator.dataset.operator = action;

if (action === "calculate") {
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator.operator;
  const secondValue = displayedNum;

  if (firstValue) {
    display.textContent = calculate(firstValue, operator, secondValue);
    {
    }
    calculator.dataset.previousKeyType = "calculate";
  }
}
if (action === "calculate") {
  let firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator.operator;
  const secondValue = displayedNum;

  if (firstValue) {
    if (previousKeyType === "calculate") {
      firstValue = displayedNum;
    }
    display.textContent = calculate(firstValue, operator, secondValue);
  }
  calculator.dataset.previousKeyType = "calculate";
}

if (action === "calculate") {
  let firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator.operator;
  const secondValue = displayedNum;

  if (firstValue) {
    if (previousKeyType === "calculate") {
      firstValue = displayedNum;
    }
    display.textContent = calculate(firstValue, operator, secondValue);
  }
  calculator.dataset.modValue = secondValue;
  calculator.dataset.previousKeyType = "calculate";
}
if (firstValue) {
  if (previousKeyType === "calculate") {
    firstValue = displayedNum;
    secondValue = calculator.dataset.modValue;
  }
  display.textContent = calculate(firstValue, operator, secondValue);
}

if (!action) {
  if (
    displayedNum === "0" ||
    previousKeyType === "operator" ||
    previousKeyType === "calculate"
  ) {
    display.textContent = keyContent;
  } else {
    display.textContent = displayedNum + keyContent;
  }
  calculator.dataset.previousKeyType = "number";
}
if (action === "decimal") {
  if (!displayedNum.includes(".")) {
    display.textContent = displayedNum + ".";
  } else if (
    previousKeyType === "operator" ||
    previousKeyType === "calculate"
  ) {
    display.textContent = "0.";
  }
  calculator.dataset.previousKeyType = "decimal";
}
if (
  action === "add" ||
  action === "subtract" ||
  action === "divide" ||
  action === "multiply"
) {
  if (
    firstValue &&
    operator &&
    previousKeyType !== "operator" &&
    previousKeyType !== "calculate"
  ) {
    const calcValue = calculate(firstValue, operator, secondValue);
    display.textContent = calcValue;
    calculator.dataset.firstValue = calcValue;
  } else {
    calculator.dataset.firstValue = displayedNum;
  }
}
if (action !== "clear") {
  const clearButton = calculator.querySelector("[data-action = clear]");
  clearButton.textContent = "CE";
}

if ((action = "clear")) {
  display.textContent = 0;
  key.textContent = "C";
  calculator.dataset.previousKeyType = "clear";
}

if (action === "clear") {
  if (key.textContent === "C") {
    calculator.dataset.firstValue = "";
    calculator.dataset.modValue = "";
    calculator.dataset.operator = "";
    calculator.dataset.previousKeyType = "";
  } else {
    key.textContent = "C";
  }
  display.textContent = 0;
  calculator.dataset.previousKeyType = "clear";
}
