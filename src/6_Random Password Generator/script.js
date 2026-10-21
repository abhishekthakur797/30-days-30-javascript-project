const passwordBox = document.getElementById("password");
const message = document.getElementById("message");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]";
const allChars = upperCase + lowerCase + numbers + symbols;

// crypto.getRandomValues is safer for passwords than Math.random().
function randomChar(chars) {
  const index = crypto.getRandomValues(new Uint32Array(1))[0] % chars.length;
  return chars[index];
}

function generatePassword() {
  // Start with one character from each group so every type is included.
  const password = [randomChar(upperCase), randomChar(lowerCase), randomChar(numbers), randomChar(symbols)];

  while (password.length < length) {
    password.push(randomChar(allChars));
  }

  // Shuffle so the first four characters aren't always in the same order.
  password.sort(() => Math.random() - 0.5);
  passwordBox.value = password.join("");
  message.textContent = "";
}

async function copyPassword() {
  if (!passwordBox.value) {
    message.textContent = "Generate a password first.";
    return;
  }

  await navigator.clipboard.writeText(passwordBox.value);
  message.textContent = "Password copied!";
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyPassword);
