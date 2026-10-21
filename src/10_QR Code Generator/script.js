const form = document.querySelector(".container");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const inputBox = document.getElementById("input-box");

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = inputBox.value.trim();

  if (!text) {
    // Shake the input to show it's empty
    inputBox.classList.add("error");
    setTimeout(() => inputBox.classList.remove("error"), 1000);
    return;
  }

  // encodeURIComponent keeps characters like & and # from breaking the URL.
  qrImage.src = apiUrl + encodeURIComponent(text);
});

// Only show the image box once the QR code has loaded.
qrImage.addEventListener("load", () => imgBox.classList.add("show-img"));
