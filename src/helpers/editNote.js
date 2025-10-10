// Import helpers
import hideButtons from "./hideButtons.js";
import updateNote from "./upateNote.js";

// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Instantiate Class 
const ManageNoteData_EditNote = new GetLocalStorageData('NoteData', 'editNote', 'zecco_note_app-Note');

// declare a global variable
let foundData = undefined;

// Function to edit notes
const editNote = async (noteSection, e) => {
    // Store data in a variable
    const storedData = await ManageNoteData_EditNote.getNoteData(); 

    // Get current note card ID from the event
    let cardId = e.currentTarget.id;

    // Search stored data and retrive one that matches that on the current note card
    foundData = storedData.find(data => data.id === cardId);

    // Select element from DOM
    const returnBtn = document.querySelector('.return_button');
    const main = noteSection.parentNode;
    const formSection = main.querySelector('.form_section');
    const titleInput = formSection.querySelector('.note_title_input'); 
    const noteTextArea = formSection.querySelector('.note_textarea'); 
    const timeElement = formSection.querySelector('.form_time_element');
    const saveBtn = formSection.querySelector('.save_button');
    const updateBtn = formSection.querySelector('.update_button');
    
    // Add and remove classes for accessibility
    formSection.classList.add('active_section');
    noteSection.classList.remove('active_section');
    returnBtn.classList.add('show_return_button');
    returnBtn.classList.add('edit');
    saveBtn.classList.remove('show_note_form_btn');
    updateBtn.classList.add('show_note_form_btn');

    // Clear input and textarea value before adding a new value to update
    titleInput.value = '';
    noteTextArea.value = '';

    // Set time in the form
    titleInput.value = foundData.title;
    noteTextArea.value = foundData.content;
    timeElement.innerHTML = `${foundData.date}`;

    // Add event listener to the update note nutton to update current note data in the note form 
    updateBtn.addEventListener('click', updateNote);

    // Hide all buttons
    hideButtons();
}

export default editNote;
export { foundData };