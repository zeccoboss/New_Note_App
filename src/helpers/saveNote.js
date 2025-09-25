// Import fragments
import NoteForm from "../fragments/NoteForm.js";

// Import Helpers
import selectElements from "./selectElements.js";
import randomCharGenerator from "./generateRandomChar.js";
import renderNote from "../utils/renderNotes.js";
import showButtons from "./showButtons.js";
import { localNoteData } from "../utils/initApp.js";

// Call to set updated value to local storage
function sendDataToLocalStorage(newData) {
    localStorage.setItem('zecco_note_app', JSON.stringify(newData));
}

// When called updates notes with te given parameters
const updatedNoteData = (savedNoteData, idValue, title, note, currentTime) => {
    // Create a new note from values passed from parameters
    let newNoteData = {
        id: idValue,
        title: title,
        content: note,
        date: currentTime
    }

    // Add to the new note data to saved note data array
    savedNoteData.push(newNoteData);     

    // Call and passed the updated data to save to local storage
    sendDataToLocalStorage(savedNoteData);
    return savedNoteData; // Return the saved note data to update the DOM
}

const saveNote = async (e) => {
    // Stop the page refresh on submit of note form
    e.preventDefault();

    // Select element from DOM
    const noteSection = document.querySelector('.note_section');
    const formSection = document.querySelector('.form_section');

    // Get required data for new Note
    const { titleInput, noteTextArea } = selectElements(); // Get input and textarea
    const getRandomCharacters = randomCharGenerator(6); // Get random characters to generate unique ID'S for each stored note
    const { currentTime } = NoteForm(); // Get time values from Note form

    // Collect data from local storage
    const savedNoteData = await localNoteData;

    // Format input and textarea values
    let title = titleInput.value.trim();
    let note = noteTextArea.value.trim();

    // Check Conditions and save appropraite data
    if (!title && !note) {
        console.warn('Note content not specified by user');
        console.log('');
        // Get note section from current scope so valid element can be sent to render notes function
        const noteSection = document.querySelector('.note_section');

        // Call render function when no data specified and return array, note section and 3 for error handling
        renderNote([], noteSection, 3); // Must send note section since the render function clears the DOM it completelt wipes the note card selection mood
    } else if (title && note) {
        console.log('All note content is specified by user');   
        console.log('');
        // Get note section from current scope so valid element can be sent to render notes function
        const noteSection = document.querySelector('.note_section');

        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = updatedNoteData(savedNoteData, getRandomCharacters, title, note, currentTime);

        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else if (!title && note) {
        console.warn('Note title not specified by user');
        console.log('');
        // Get note section from current scope so valid element can be sent to render notes function
        const noteSection = document.querySelector('.note_section');

        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData =  updatedNoteData(savedNoteData, getRandomCharacters, 'No title specified', note, currentTime);        

        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else if (title && !note) {
        console.warn('Note data not specified by user');
        console.log('');
        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData =  updatedNoteData(savedNoteData, getRandomCharacters, title, 'Note content not specified!', currentTime);

        // render the note section
        renderNote(updatedData, noteSection, 2);
    }

    // Clear input and textarea after all operation is complete
    titleInput.value = '';
    noteTextArea.value = '';

    // add the "active_section" for navigation between the Form Section & Notes Section 
    noteSection.classList.add('active_section');
    formSection.classList.remove('active_section');

    // Show all hidden buttons after closing the note section
    showButtons();
}

export default saveNote;