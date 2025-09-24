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

// When called updates notes with te given parameters
const updatedNoteData = (savedNoteData, idValue, title, note, currentTime) => {
    // Tweak data to be save since title is not passed
    let newNoteData = {
        id: idValue,
        title: title,
        content: note,
        date: currentTime
    }

    // Destruct the saved data and add the new data then store in local storage and return the updated value
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
    const { titleInput, noteTextArea } = selectElements(); // Get input and textarea
    const getRandomCharacters = randomCharGenerator(6); // Get random characters to generate unique ID'S for each stored note
    const { currentTime } = NoteForm(); // Get time values from Note form

    // Collect data from local storage
    const savedNoteData = await getLocalStorageNoteData();

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
        return; 
    } else if (title && note) {
        console.log('All note content is specified by user');   
        console.log('');
        
        // Get note section from current scope so valid element can be sent to render notes function
        const noteSection = document.querySelector('.note_section');

        // Call the update note function and collect the returned values and update the DOM then all to local storage
        let updatedData = updatedNoteData(savedNoteData, getRandomCharacters, title, note, currentTime);

        console.log('Why u tripping...');
        

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
}

export default saveNote;