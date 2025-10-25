// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Import helpers
import selectElements from "../helpers/selectElements.js";

// Import utils
import renderNote from "../utils/renderNotes.js";

// Instantiate Class 
const ManageNoteData_SearchNote = new GetLocalStorageData('NoteData', 'searchNote', 'zecco_note_app-Note');

// Search note function
const searchNotes = async (noteSection) => {
    // Get search input element from select element function
    const { searchInput } = selectElements();

    // Declare local variable
    let search = true;

    //  Clear search when search input loss focucus and 
    // searchInput.addEventListener('blur', async (e) => {
    //     // Retrive the stored notes value thats in memory
    //     const allNotes = await ManageNoteData_SearchNote.getNoteData();

    //     // Clear search input
    //     searchInput.value = '';
    //     search = false;

    //     // Render notes
    //     // renderNote(allNotes, noteSection, 5);
    //     return;
    // });

    // Add event listiner to search to filter notes and call the render function to display the resault
    searchInput.addEventListener('input', searchNotesLogic);

    // Logic to search notes
    async function searchNotesLogic(e) {
        // Retrive the stored notes value thats in memory
        const allNotes = await ManageNoteData_SearchNote.getNoteData();

        // Get live value from search input
        let serchValue = e.target.value.trim();

        // Filter notes 
        const filteredNotesArray = allNotes.filter((data) => {
            // return data 
            return data.title.toLowerCase().includes(serchValue) || data.content.toLowerCase().includes(serchValue) || data.date.toLowerCase().includes(serchValue);
        });

        // Check seacrch value and retun data to the render notes function
        filteredNotesArray.length > 0 
        ? renderNote(filteredNotesArray, noteSection, 2)
        : renderNote(filteredNotesArray, noteSection, 4);
        // renderNote(filteredNotesArray, noteSection, 2)

        console.log('Search is: ', search);
    }
}

export default searchNotes;