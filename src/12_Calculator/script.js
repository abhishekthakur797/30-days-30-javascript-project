const display = document.getElementById("display");
const keys = document.getElementById("keys");
const operators = "+-*/";

// Evaluate a simple expression like "12+3*4" without using eval().
// Two passes: first * and /, then + and -.
function calculate(expression) {
  const tokens = expression.match(/\d*\.?\d+|[+\-*/]/g);
  if (!tokens) return "";

  // Allow a leading minus: "-5+2"
  if (tokens[0] === "-") tokens.splice(0, 2, String(-tokens[1]));

  const stack = [Number(tokens[0])];
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const num = Number(tokens[i + 1]);
    if (op === "*") stack.push(stack.pop() * num);
    else if (op === "/") stack.push(stack.pop() / num);
    else if (op === "+") stack.push(num);
    else stack.push(-num);
  }

  const result = stack.reduce((sum, n) => sum + n, 0);
  if (!Number.isFinite(result)) return "Error";
  // Round away floating point noise like 0.1 + 0.2 = 0.30000000000000004
  return String(parseFloat(result.toFixed(10)));
}

function press(value) {
  if (display.value === "Error") display.value = "";
  const last = display.value.slice(-1);

  // Only a minus sign can start an expression
  if (!display.value && "+*/".includes(value)) return;

  // Replace the last operator instead of stacking two in a row ("5+*" -> "5*")
  if (operators.includes(value) && operators.includes(last)) {
    display.value = display.value.slice(0, -1) + value;
    return;
  }

  // Only one decimal point per number
  if (value === ".") {
    const currentNumber = display.value.split(/[+\-*/]/).pop();
    if (currentNumber.includes(".")) return;
  }

  display.value += value;
}

function runAction(action) {
  if (action === "clear") display.value = "";
  if (action === "delete") display.value = display.value.slice(0, -1);
  if (action === "equals") {
    // Ignore a trailing operator: "5+" -> "5"
    const expression = display.value.replace(/[+\-*/.]$/, "");
    display.value = calculate(expression);
  }
}

keys.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.value) press(button.dataset.value);
  else runAction(button.dataset.action);
});

// Keyboard support
document.addEventListener("keydown", (event) => {
  if (/^[0-9.+\-*/]$/.test(event.key)) press(event.key);
  else if (event.key === "Enter" || event.key === "=") runAction("equals");
  else if (event.key === "Backspace") runAction("delete");
  else if (event.key === "Escape") runAction("clear");
  else return;

  // Stop Enter from also "clicking" whichever button has focus
  event.preventDefault();
});
