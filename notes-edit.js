const titleElement = document.getElementById('noteTitle');
const bodyElement = document.getElementById('noteBody');
const removeNote = document.getElementById('removeNotes');
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note) {
    return note.id === noteId;
});

if (note === undefined) {
    location.assign('/index.html');
};

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener("input", function(event) {
    note.title = event.target.value;
    savedNotes(notes);
});

bodyElement.addEventListener("input", function(event) {
    note.body = event.target.value;
    savedNotes(notes);
});

removeNote.addEventListener("click", function(event) {
    removeNotes(note.id);
    savedNotes(notes);
    location.assign("/index.html");
});