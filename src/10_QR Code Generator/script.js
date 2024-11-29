// The API Server is currently not working :: Project unfinished

const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const inputBox = document.getElementById("input-box");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function generateQR() {
  if (inputBox.value === "") {
    inputBox.classList.add("error");
    setTimeout(() => {
      inputBox.classList.remove("error");
    }, 1000);
  } else {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputBox.value;
  }
});
