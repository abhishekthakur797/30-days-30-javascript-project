const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector("#addBtn");

// if click on the button it will append li list
addBtn.addEventListener("click", function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // cross icon will be there for deleting the task
    let span = document.createElement("span"); // we have created a element span
    span.innerHTML = "\u00d7"; // we have add innerHTML value of span and give code
    li.appendChild(span); // now it add in li
  }
  // after adding the element it will empty the input box for new value.
  inputBox.value = "";
  saveData(); // every time we add new item it will add here and save the data
});

// function to tick and delete list
// the list item is storing in list-container so we will target list container.

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData(); // after checkbox it will save data.
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(); // after every delete it will save data.
  }
});

// storing the data in Local storage.
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// when we will close browser it will save the data

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
