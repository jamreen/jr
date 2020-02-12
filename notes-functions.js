//Read existing notes from local Storage

const getSavedNotes = function() {
    const notesJSON = localStorage.getItem("notes");
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

//save notes to localStorage
const savedNotes = function(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
};

//remove notes from the list
const removeNotes = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id;
    });

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    };
};
//generate the DOM structure
const generateNotesDOM = (note) => {
    const noteElement = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    //Setup the note button
    button.textContent = 'x';
    noteElement.appendChild(button);
    button.addEventListener('click', function() {
        removeNotes(note.id);
        savedNotes(notes);
        renderNotes(notes, filters);
    });
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'unnamed note';
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`);
    noteElement.appendChild(textEl);
    return noteElement;
};

//Render application notes

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.getElementById('notes').innerHTML = '';

    filteredNotes.forEach(function(note) {
        const noteEl = generateNotesDOM(note);
        document.getElementById('notes').appendChild(noteEl);
    });
};