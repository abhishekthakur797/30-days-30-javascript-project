const createBtn = document.getElementById("createBtn");
const notesContainer = document.querySelector(".notes-container");

// Save the text of every note to localStorage.
function updateStorage() {
  const notes = [...notesContainer.querySelectorAll(".input-box")].map((note) => note.innerText);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function createNote(text = "") {
  const note = document.createElement("p");
  note.className = "input-box";
  note.contentEditable = "true";
  note.innerText = text;

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "img/delete.png";
  deleteIcon.alt = "Delete note";

  // The wrapper keeps the delete icon outside the editable text.
  const wrapper = document.createElement("div");
  wrapper.className = "note";
  wrapper.append(note, deleteIcon);
  notesContainer.appendChild(wrapper);

  return note;
}

createBtn.addEventListener("click", () => {
  createNote().focus();
  updateStorage();
});

// Delete a note when its icon is clicked.
notesContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    event.target.parentElement.remove();
    updateStorage();
  }
});

// Save while typing.
notesContainer.addEventListener("input", updateStorage);

// Load saved notes when the page opens.
const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
savedNotes.forEach((text) => createNote(text));
