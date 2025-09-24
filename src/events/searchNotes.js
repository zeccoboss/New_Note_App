import getLocalStorageNoteData from "../../service/localSorageData.js";
import selectElements from "../helpers/selectElements.js";
import renderNote from "../utils/renderNotes.js";

const searchNotes = async (noteSection) => {
    const { searchInput } = selectElements();
    const allNotes = await getLocalStorageNoteData();

    const noteCards = Array.from(noteSection.children);
    

    searchInput.addEventListener('input', (e) => {
        let serchValue = e.target.value.trim();

        const filteredNotesArray = allNotes.filter((data) => {
            // return data 
            return data.title.toLowerCase().includes(serchValue) || data.content.toLowerCase().includes(serchValue) || data.date.toLowerCase().includes(serchValue);
        });

        filteredNotesArray.length === 0 ? renderNote(filteredNotesArray, noteSection, 4) : renderNote(filteredNotesArray, noteSection, 2);
    });
}

export default searchNotes;