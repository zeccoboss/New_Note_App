// Import fragments
import NoteForm from "../fragments/NoteForm.js";

// Import Helpers
import selectElements from "./selectElements.js";
import showButtons from "./showButtons.js";
import { foundData } from "./editNote.js";
import StateMessage from "../fragments/StateMessage.js";

// Import utils
import renderNote from "../utils/renderNotes.js";

// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Instantiate Class 
const ManageNoteData_UpdateNote = new GetLocalStorageData('NoteData', 'updateNote', 'zecco_note_app-Note');

// When called updates notes with te given parameters
const updatedNoteData = (noteData, idValue, title, note, currentTime) => {
    // Create a new note from values passed from parameters
    let newNoteData = { id: idValue, title: title, content: note, date: currentTime }

    // Add to the new note data to saved note data array
    noteData.unshift(newNoteData);

    // Sort data and keep new data first
    noteData.sort((a, b) => a.date - b.date);

    // Save note data to local storage
    ManageNoteData_UpdateNote.updateNoteData(noteData);
 
    // Return the saved note data to update the DOM
    return ManageNoteData_UpdateNote.getNoteData();
}

const updateNote = async (e) => {
// Stop the page refresh on submit of note form
    e.preventDefault();

    // Select element from DOM
    const noteSection = document.querySelector('.note_section');
    const formSection = document.querySelector('.form_section');

    // Get required data for new Note
    const { titleInput, noteTextArea } = selectElements(); // Get input and textarea
    const { currentTime } = NoteForm(); // Get time values from Note form

    // Collect data from local storage
    const savedNoteData = await ManageNoteData_UpdateNote.getNoteData();

    // Filter all notes to remove one thats being updated
    const filteredNoteData = savedNoteData.filter((data) => data.id !== foundData.id);

    // Format input and textarea values
    let title = titleInput.value.trim();
    let note = noteTextArea.value.trim();

    // Check Conditions and save appropraite data
    if (!title && !note) {
        console.warn('Note content not specified by user');
        console.log('');
        // Get note section from current scope so valid element can be sent to render notes function
        const noteSection = document.querySelector('.note_section');

        // render the note section
        renderNote(filteredNoteData, noteSection, 2); //
    } else if (title && note) {
        console.log('All note content is specified by user');   
        console.log('');
        // Get note section from current scope so valid element can be sent to render notes function
        const noteSection = document.querySelector('.note_section');

        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = await updatedNoteData(filteredNoteData, foundData.id, title, note, currentTime);

        // Pass a state message
        StateMessage(noteSection, 'Note updated.');

        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else if (!title && note) {
        console.warn('Note title not specified by user');
        console.log('');
        // Get note section from current scope so valid element can be sent to render notes function
        const noteSection = document.querySelector('.note_section');

        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = await updatedNoteData(filteredNoteData, foundData.id, 'No title specified', note, currentTime);      
        
        // Pass a state message
        StateMessage(noteSection, 'Note updated.');

        // render the note section
        renderNote(updatedData, noteSection, 2);
    } else if (title && !note) {
        console.warn('Note data not specified by user');
        console.log('');
        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = await updatedNoteData(filteredSavedData, foundData.id, title, 'Note content not specified!', currentTime);

        // Pass a state message
        StateMessage(noteSection, 'Note updated.');

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

export default updateNote;