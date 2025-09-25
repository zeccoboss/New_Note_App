import selectElements from "../helpers/selectElements.js";
import { localNoteData } from "../utils/initApp.js";
import renderNote from "../utils/renderNotes.js";



const searchNotes = async (noteSection) => {
    // Get search input element from select element function
    const { searchInput } = selectElements();

    // Get all notes card from note section 
    const noteCards = Array.from(noteSection.children);

    // Retrive the stored notes value thats in memory
    const allNotes = await localNoteData;

    // Add event listiner to search to filter notes and call the render function to display the resault
    searchInput.addEventListener('input', searchNotesLogic);
    searchInput.removeEventListener('blur', searchNotesLogic);

    function searchNotesLogic(e) {
      // Get live value from search input
        let serchValue = e.target.value.trim();

        // Filter notes 
        const filteredNotesArray = allNotes.filter((data) => {
            // return data 
            return data.title.toLowerCase().includes(serchValue) || data.content.toLowerCase().includes(serchValue) || data.date.toLowerCase().includes(serchValue);
        });

        filteredNotesArray.length === 0 ? renderNote(filteredNotesArray, noteSection, 4) : renderNote(filteredNotesArray, noteSection, 2);
    }
}

export default searchNotes;