const form = document.querySelector(".row");
const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

// Tasks are stored as an array of { text, done } objects.
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  listContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text; // textContent stops user input from being run as HTML
    li.dataset.index = index;
    if (task.done) li.classList.add("checked");

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.title = "Delete task";
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);
  });
}

// Add a task (button click or Enter key)
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = inputBox.value.trim();

  if (!text) {
    alert("You must write something!");
    return;
  }

  tasks.push({ text, done: false });
  inputBox.value = "";
  saveTasks();
  renderTasks();
});

// Toggle or delete a task. One listener on the list handles every item.
listContainer.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  const index = Number(li.dataset.index);

  if (event.target.tagName === "SPAN") {
    tasks.splice(index, 1);
  } else {
    tasks[index].done = !tasks[index].done;
  }

  saveTasks();
  renderTasks();
});

renderTasks();
