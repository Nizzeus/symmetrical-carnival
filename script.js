//  haetaan button ja app

const button = document.getElementById('button');
const app = document.getElementById('app');

// tallennetaan muistiinpanot localstoragella
function saveNote(note) {
  localStorage.setItem("note-app", JSON.stringify(note));
}


// haetaan muistiinpanoja JSONilla
function getNotes(){
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  app.insertBefore(noteEl, button);
});

function addNote() {
  const notes = getNotes();
  const Note = {
    id: Math.floor(Math.random() * 100000),  // annetaan muistiinpanolle satunnainen id 0-100000 väliltä ja tyhjä content
    content: "",
  }
  const noteElement = createNoteEl(Note.id, Note.content);
  app.insertBefore(noteElement, button);
  notes.push(Note);
  saveNote(notes);
}

function createNoteEl(id, content) {
  const noteText = document.createElement('textarea');
  noteText.classList.add('notes');
  noteText.placeholder = "Kirjoita tähän...";
  noteText.value = content;

  //  lisätään mahdollisuus poistaa muistiinpanoja tuplaklikkaamalla
  noteText.addEventListener("dblclick", () => {
    const warning = confirm("Haluatko varmasti poistaa muistiinpanon?");
    if (warning) {
      deleteNote(id, noteText);
    }
  });

  noteText.addEventListener("input", () => {
    updateNote(id, noteText.value);
  });

  return noteText;
}

function deleteNote(id, noteEl) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNote(notes);
  app.removeChild(noteEl);
}


function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}


button.addEventListener('click', addNote);