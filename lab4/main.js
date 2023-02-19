const noteTitle = document.getElementById("note-title");
const noteContent = document.getElementById("note-content");
const addNoteButton = document.getElementById("add-note");
const editNoteButton = document.getElementById("edit-note");
const deleteNoteButton = document.getElementById("delete-note");
const noteList = document.getElementById("note-list");

const notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  noteList.innerHTML = "";
  for (const [index, { title }] of notes.entries()) {
    const li = document.createElement("li");
    li.textContent = title;
    li.setAttribute("data-note-id", index);
    li.addEventListener("click", () => onNoteClick(index));
    noteList.appendChild(li);
  }
}

function onNoteClick(noteId) {
  const { title, content } = notes[noteId];
  noteTitle.value = title;
  noteContent.value = content;
  addNoteButton.disabled = true;
  editNoteButton.disabled = false;
  deleteNoteButton.disabled = false;
  removeEventListeners();
  addNoteButton.addEventListener("click", saveNote);
  editNoteButton.addEventListener("click", () => saveNote(noteId));
  deleteNoteButton.addEventListener("click", () => deleteNote(noteId));
}

function addNote() {
  const note = {
    title: noteTitle.value,
    content: noteContent.value,
  };
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
  clearForm();
}

function editNote(noteId) {
  const note = {
    title: noteTitle.value,
    content: noteContent.value,
  };
  notes[noteId] = note;
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
  clearForm();
}

function deleteNote(noteId) {
  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
  clearForm();
}

function saveNote(noteId = null) {
  if (editNoteButton.disabled) {
    addNote();
  } else {
    editNote(noteId);
  }
}

function clearForm() {
  noteTitle.value = "";
  noteContent.value = "";
  addNoteButton.disabled = false;
  editNoteButton.disabled = true;
  deleteNoteButton.disabled = true;
  removeEventListeners();
  addNoteButton.addEventListener("click", addNote);
}

function removeEventListeners() {
  addNoteButton.removeEventListener("click", saveNote);
  editNoteButton.removeEventListener("click", saveNote);
  deleteNoteButton.removeEventListener("click", deleteNote);
}

function initializeEventListeners() {
  addNoteButton.addEventListener("click", addNote);
  editNoteButton.addEventListener("function onNoteClick(event)") 
    const noteId = event.target.getAttribute("data-note-id");
    const note = notes[noteId];
    noteTitle.value = note.title;
    noteContent.value = note.content;
    addNoteButton.disabled = true;
    editNoteButton.disabled = false;
    deleteNoteButton.disabled = false;
    addNoteButton.removeEventListener("click", addNote);
    editNoteButton.removeEventListener("click", editNote);
    deleteNoteButton.removeEventListener("click", deleteNote);
    addNoteButton.addEventListener("click", saveNote);
    editNoteButton.addEventListener("click", saveNote.bind(null, noteId));
    deleteNoteButton.addEventListener("click", deleteNote.bind(null, noteId));
    }
    
    function addNote() {
    const note = {
    title: noteTitle.value,
    content: noteContent.value,
    };
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
    clearForm();
    }
    
    function editNote(noteId) {
    const note = {
    title: noteTitle.value,
    content: noteContent.value,
    };
    notes[noteId] = note;
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
    clearForm();
    }
    
    function deleteNote(noteId) {
    notes.splice(noteId, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
    clearForm();
    }
    
    function saveNote() {
    if (editNoteButton.disabled) {
    addNote();
    } else {
    const noteId = parseInt(editNoteButton.getAttribute("data-note-id"));
    editNote(noteId);
    }
    }
    
    function clearForm() {
    noteTitle.value = "";
    noteContent.value = "";
    addNoteButton.disabled = false;
    editNoteButton.disabled = true;
    deleteNoteButton.disabled = true;
    addNoteButton.removeEventListener("click", saveNote);
    editNoteButton.removeEventListener("click", saveNote);
    deleteNoteButton.removeEventListener("click", deleteNote);
    addNoteButton.addEventListener("click", addNote);
    }
    
    renderNotes();
    clearForm();
