// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

// Import utils
import renderNote from '../utils/renderNotes.js';

// Import events
import searchNotes from '../events/searchNotes.js';

// Instantiate Class 
const ManageNoteData_RenderNote = new GetLocalStorageData('NoteData', 'NoteSection', 'zecco_note_app-Note');

// Declare global variables
let calledStateOnce = true;
let renderCount = 0;

const NoteSection = async () => {
    // Create element
    let noteSection = document.createElement('section');
    
    // Initiate instance of SetElementAttributes class
    const NoteSectionAttributes = new SetElementAttributes(noteSection);
    
    // Set attributes 
    NoteSectionAttributes.setId('note-section');
    NoteSectionAttributes.addClass('note_section', 'section', 'active_section');
    
    // const noteData = await getNoteData(); // Skip for now till Node Server is set up
    const noteData = await ManageNoteData_RenderNote.getNoteData();

    // Declare to keep track of notes
    let noNotes = true;

    calledStateOnce && noteData.length !== 0 ?
        (() => {
            renderCount++;
            renderNote(noteData, noteSection, 1);
            console.warn('NoteSection render notes card ', renderCount, ' times');
        }) () : renderNote([], noteSection, 3);

        calledStateOnce = false;
    noNotes = true;

    // Search notes
    searchNotes(noteSection);
    


    // Return noteSection
    return { noteSection, noNotes };
}

export default NoteSection;