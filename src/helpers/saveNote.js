// Import fragments
import NoteForm from "../fragments/NoteForm.js";
import StateMessage from "../fragments/StateMessage.js";

// Import Helpers
import selectElements from "./selectElements.js";
import randomCharGenerator from "./generateRandomChar.js";
import showButtons from "./showButtons.js";

// Import utils
import renderNote from "../utils/renderNotes.js";

// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Instantiate Class 
const ManageNoteData_SaveNote = new GetLocalStorageData('NoteData', 'saveNote', 'zecco_note_app-Note');

// When called updates notes with te given parameters
const updatedNoteData = (noteData, idValue, title, note, currentTime) => {
    // Create a new note from values passed from parameters
    let newNoteData = { id: idValue, title: title, content: note, date: currentTime }

    // Add to the new note data to saved note data array
    noteData.unshift(newNoteData);

    // Sort data and keep new data first
    noteData.sort((a, b) => a.date - b.date);

    // Save note data to local storage
    ManageNoteData_SaveNote.saveNoteData(noteData);
 
    // Return the saved note data to update the DOM
    return ManageNoteData_SaveNote.getNoteData();
}

const saveNote = async (e) => {
    // Stop the page refresh on submit of note form
    e.preventDefault();

    // Select element from DOM
    const noteSection = document.querySelector('.note_section');
    const formSection = document.querySelector('.form_section');

    // Get required data for new Note
    const { titleInput, noteTextArea, navHeading } = selectElements(); // Get input and textarea
    const getRandomCharacters = randomCharGenerator(6); // Get random characters to generate unique ID'S for each stored note
    const { currentTime } = NoteForm(); // Get time values from Note form

    // Increase font size and add innerHTML
    navHeading.style.fontSize = "2.2rem";

    // Collect data from local storage
    const noteData = await ManageNoteData_SaveNote.getNoteData();

    // Format input and textarea values
    let title = titleInput.value.trim();
    let note = noteTextArea.value.trim();

    // Check Conditions and save appropraite data
    if (!title && !note) {
        console.warn('Note content not specified by user');
        console.log('');

        // Call render function when no data specified 
        renderNote(noteData, noteSection, 2); //

    } else if (title && note) {
        console.log('All note content is specified by user');   
        console.log('');

        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = await updatedNoteData(noteData, getRandomCharacters, title, note, currentTime);

        // Pass a state message
        StateMessage(noteSection, 'New note added.');

        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else if (!title && note) {
        console.warn('Note title not specified by user');
        console.log('');

        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = await updatedNoteData(noteData, getRandomCharacters, 'No title specified', note, currentTime);   
        
        // Pass a state message
        StateMessage(noteSection, 'New note added.');

        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else if (title && !note) {
        console.warn('Note data not specified by user');
        console.log('');

        // Pass a state message
        StateMessage(noteSection, 'New note added.');
        
        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = await updatedNoteData(noteData, getRandomCharacters, title, 'Note content not specified!', currentTime);

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