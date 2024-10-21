function generatePassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]";

  let password = "";
  for (let i = 0; i < 12; i++) {
    // math.random() => 0.7891234 generates decimal values between 0-1
    // then it multiples with chars.length(82) => 0.7891234 = 64.70
    // math floor rounds the values 64
    // 64 = @
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  document.getElementById("password").value = password;
}

// when user click on button it runs the generatePassword function
document.querySelector("button").addEventListener("click", generatePassword);

// copy function
document
  .getElementById("copyBtn")
  .addEventListener("click", function copyPassword() {
    password.select();
    document.execCommand("copy");
    alert("Your password is copied");
  });
