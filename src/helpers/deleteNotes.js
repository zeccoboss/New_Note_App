// Import fragments
import Modal from "../fragments/Modal.js";
import StateMessage from "../fragments/StateMessage.js";

// Import helpers

// Import utils
import renderNote from "../utils/renderNotes.js";

// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Instantiate Class 
const ManageNoteData_DeleteNote = new GetLocalStorageData('NoteData', 'deleteNote', 'zecco_note_app-Note');

// When called updates notes with te given parameters
const updatedNoteData = async (filteredNoteData) => {
    ManageNoteData_DeleteNote.saveNoteData(filteredNoteData);

    // Return the saved note data to update the DOM
    return  ManageNoteData_DeleteNote.getNoteData();
}

// Function to delete notes
const deleteNotes = async (noteSection, openedSelection) => {
    // Get element from DOM
    const main = noteSection.parentNode;
    const optionListToggler = main.querySelector('.option_list_toggler');
    const highlightOptionList = main.querySelector('.highlight_option_list');

    // Check when selection mood is on to show the selection option list
    if (openedSelection === 1) {
        // Add event to toggle highlight option list
        optionListToggler.classList.add('show_option_list_toggler'); // Show the toggler and add an event
        highlightOptionList.classList.remove('show_highlight_option_list');  // Toggle list to show

        // Make initial value Even number range.
        let toggleValue = 2;

        // Event to toggle high light list
        optionListToggler.addEventListener('click', (e) => {
            //Check the toggle value to remove the class for hight light option
            if (toggleValue %  2 === 0) {
                // Remove "show_highlight_option_list" class so it can be toggled correctly
                highlightOptionList.classList.remove('show_highlight_option_list') ;
                toggleValue = 5; // Make the value 5 so it becomes an Odd number
            }

            // Toggle the high light option list
            highlightOptionList.classList.toggle('show_highlight_option_list')
        });
    } else {
        // Remove class to hide them as their initial state
        highlightOptionList.classList.remove('show_highlight_option_list'); 
        optionListToggler.classList.remove('show_option_list_toggler'); 
    }
}

const hideElements = (noteSection, optionListToggler, highlightOptionList) => {
    // Get element from DOM
    const main = noteSection.parentNode
    const overlays = main.querySelectorAll('.overlay');

    // Loop through and remove overlay if appended to DOM more than once
    overlays.forEach(el => {
        el.remove();
        el.classList.remove('show_overlay');
    });

    // Remove classed to hide elements
    optionListToggler.classList.remove('show_option_list_toggler');
    highlightOptionList.classList.remove('show_highlight_option_list');
}

async function saveNoteAndRemoveOvrlay(noteSection, noteData, optionListToggler, highlightOptionList) {
    // Collect updated note to pass to render funtion
    let updatedData = await updatedNoteData(noteData);
    // Check if noteData is not empty and pass the correct flag to render notes
    if (noteData.length > 0) {
        // Hide elements from the DOM
        hideElements(noteSection, optionListToggler, highlightOptionList);
        // render the note section
        renderNote(updatedData, noteSection, 2);
        console.warn('Render function called from delete notes module');
        console.log('');
    } else {
        // Hide elements from the DOM
        hideElements(noteSection, optionListToggler, highlightOptionList);
        // render the note section
        renderNote(updatedData, noteSection, 3);
        console.warn('Render function called from delete notes module');
        console.log('');
    }
}

// Fnction to handle the delete notes logic
const handleDeleteNote = async (noteSection) => {
    // Get element from DOM
    const main = noteSection.parentNode;
    const optionListToggler = main.querySelector('.option_list_toggler');
    const highlightOptionList = main.querySelector('.highlight_option_list');
    const deleteOption = main.querySelector('.delete_option');

    // Get the stored data
    const localData = await ManageNoteData_DeleteNote.getNoteData();

    // Select all not cards and convert to array that can be looped throu and retrive their ID's
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));

    // Loop thrpugh note card and retrive card that has selected attribute
    const selectedNotes = noteCards.filter(note => note.dataset.isSelected === 'selected');
    const notSelectedNotes = noteCards.filter(note => !note.hasAttribute('data-is-selected'));

    // Filter and retun notes that are selected and not selected in the DOM
    const filteredNotesAndSave = localData.filter(data => notSelectedNotes.some(fd => fd.id === data.id )); // Selected
    const filtereSelecteddNotes = localData.filter(data => selectedNotes.some(fd => fd.id === data.id )); // not Selected

    // Add event to delete notes
    deleteOption.addEventListener('click', (e) => {
        // Data to be passed to overlay
        let modalData = {
            modalMessage: 'Are you sure you want to delete these note/s?',
            modalClass: 'none', modalId: 'none' 
        };

        // call overlay and collect element to add event
        let { overlay, acceptBtn, cancleBtn } = Modal(modalData, noteSection, 'show_overlay');
        
        // Add event to overly
        overlay.addEventListener('click', (e) => {
            let target = e.target; // Get current target from event object
            // Check to know action tyo take when overlay is clicked
            if (target === acceptBtn) {
                console.warn('Confirm Deletion!');
                saveNoteAndRemoveOvrlay(noteSection, filteredNotesAndSave, optionListToggler, highlightOptionList, overlay);

                // Pass a state message
                StateMessage(noteSection, 'Note deleted.');
            } else if (target === cancleBtn) {
                console.log('Cancled deletion');
                saveNoteAndRemoveOvrlay(noteSection, localData, optionListToggler, highlightOptionList, overlay);

                // Pass a state message
                StateMessage(noteSection, 'Cancled deletion.');
                return;
            }
        });
    });
}

export default deleteNotes;
export { handleDeleteNote };