const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
    attachEvents();
  }
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNote() {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.addEventListener("keyup", updateStorage);

  img.src = "./delete.png";
  img.alt = "Delete Note";
  img.className = "delete-btn";


  inputBox.appendChild(img);

  notesContainer.appendChild(inputBox);
  updateStorage();
}


function attachEvents() {
  const notes = notesContainer.querySelectorAll(".input-box");
  notes.forEach(note => {
    note.setAttribute("contenteditable", "true");
    note.addEventListener("keyup", updateStorage);
  });
}

createBtn.addEventListener("click", createNote);

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    updateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
