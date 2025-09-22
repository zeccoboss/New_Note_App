// Import services
import getLocalStorageNoteData from "../../service/localSorageData.js";

// Import fragments
import NoteForm from "../fragments/NoteForm.js";

// Import Helpers
import selectElements from "./selectElements.js";
import randomCharGenerator from "./generateRandomChar.js";
import renderNote from "../utils/renderNotes.js";

// Call to set updated value to local storage
function sendDataToLocalStorage(newData) {
    localStorage.setItem('zecco_note_app', JSON.stringify(newData));
}

// 
const updatedNoteData = async (savedNoteData, idValue, title, note, currentTime) => {
    // Tweak data to be save since title is not passed
    let newNoteData = {
        id: idValue,
        title: title,
        content: note,
        date: currentTime
    }

    const updatedDataArray = [...savedNoteData, newNoteData];
    sendDataToLocalStorage(updatedDataArray);
    return updatedDataArray;
}

const saveNote = async (e) => {
    // Stop the page refresh on submit
    e.preventDefault();

    // Select element from DOM
    const noteSection = document.querySelector('.note_section');

    // Get required data for new Note
    const { titleInput, noteTextArea } = selectElements();
    const getRandomCharacters = randomCharGenerator(6);
    const { currentTime } = NoteForm();

    const savedNoteData = await getLocalStorageNoteData();
    // localStorage.removeItem('zecco_note_app');

    // Format input and textarea values
    let title = titleInput.value.trim();
    let note = noteTextArea.value.trim();

    // Check Conditions and save appropraite data
    if (!title && !note) {
        console.warn('Note content not specified by user');
        renderNote([], null, 3);
        return; 
    } else if (title && note) {
        console.log('All note content is specified by user');   

        let updatedData = updatedNoteData(savedNoteData, getRandomCharacters, title, note, currentTime);

        console.log(noteSection);
        
        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else if (!title && note) {
        console.warn('Note content not specified by user');

        let updatedData =  updatedNoteData(savedNoteData, getRandomCharacters, 'No title specified', note, currentTime);

        console.log(noteSection);

        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else {
        console.warn('Note content not specified by user');

        let updatedData =  updatedNoteData(savedNoteData, getRandomCharacters, title, 'Note content not specified!', currentTime);

                console.log(noteSection);
        // render the note section
        renderNote(updatedData, noteSection, 2);
    }

    titleInput.value = '';
    noteTextArea.value = '';
}


export default saveNote;