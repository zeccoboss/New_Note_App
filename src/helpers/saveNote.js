// Import services
import getLocalStorageNoteData from "../../service/localSorageData.js";

// Import fragments
import NoteForm from "../fragments/NoteForm.js";

// Import Helpers
import selectElements from "./selectElements.js";
import randomCharGenerator from "./generateRandomChar.js";
import renderNote from "../utils/renderNotes.js";

const saveNote = async (e) => {
    // Stop the page refresh on submit
    e.preventDefault();

    // Select element from DOM
    const noteSection = document.querySelector('.note_section');

    // Get required data for new Note
    const { titleInput, noteTextArea } = selectElements();
    const savedNoteData = await getLocalStorageNoteData();
    const getRandomCharacters = randomCharGenerator(6);
    const { currentTime } = NoteForm();

    // Format input and textarea values
    let title = titleInput.value.trim();
    let note = noteTextArea.value.trim();

    // Create a new object to hold new data
    let newNoteData = {
        id: getRandomCharacters,
        title: title,
        content: note,
        date: currentTime
    }

    // Check Conditions and save appropraite data
    if (!title && !note) {
        console.warn('Note content not specified by user');

        // Tweak data to be save since title is not passed
        let newNoteData = {
            id: getRandomCharacters,
            title: 'No title specified',
            content: 'Note content not specified!',
            date: currentTime
        }
        console.warn('Save note function of id 0 sent data to render function');

        // 
        renderNote([], null, 3);
        return; 
    } else if (title && note) {
        console.log('All note content is specified by user');
        console.warn('Save note function of id 1 sent data to render function');

        sendDataToLocalStorage(newNoteData); // Save data to local storage
    } else if (!title && note) {
        console.warn('Note content not specified by user');

        // Tweak data to be save since title is not passed
        let newNoteData = {
            id: getRandomCharacters,
            title: 'No title specified',
            content: note,
            date: currentTime
        }

        // Updated note value
        let updatedData = [...savedNoteData, newNoteData]; 
        console.warn('Save note function of id 2 sent data to render function');

        // Save data to local storage
        sendDataToLocalStorage(updatedData); 
    } else {
        console.warn('Note content not specified by user');

        // Tweak data to be save since title is not passed
            let newNoteData = {
            id: getRandomCharacters,
            title: title,
            content: 'Note content not specified!',
            date: currentTime
        }

        // Updated note value
        let updatedData = [...savedNoteData, newNoteData]; 

        console.warn('Save note function of id 3 sent data to render function');
        
        // Save data to local storage
        sendDataToLocalStorage(updatedData); 
    }

    // Call to set updated value to local storage
    function sendDataToLocalStorage(newData) {
        localStorage.setItem('zecco_note_app', JSON.stringify(newData));
    }

    titleInput.value = '';
    noteTextArea.value = '';

    // render the note section
    renderNote(updatedData, noteSection, 2);
}


export default saveNote;