const createBtn = document.querySelector("button");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", function () {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "img/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

// delete function
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "p") {
    let notes = document.querySelectorAll(".input-box");
  }
});
