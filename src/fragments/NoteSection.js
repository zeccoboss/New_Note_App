// Import fragments 
import Note from './NoteCard.js';

// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

// Keep initial state of app
// let initialNoteSectionState = 0; 
let calledStateOnce = true;
let renderCount = 0;

// Import service handler 
import { getNoteData } from '../../service/notesService.js';
import handleAddNotes from '../events/handleAddNotes.js';
import getLocalStorageNoteData from '../../service/localSorageData.js';
import renderNote from '../utils/renderNotes.js';
import searchNotes from '../events/searchNotes.js';
import editNote from '../events/editNote.js';

const NoteSection = async () => {
    // Create element
    let noteSection = document.createElement('section');
    
    // Initiate instance of SetElementAttributes class
    const NoteSectionAttributes = new SetElementAttributes(noteSection);
    
    // Set attributes 
    NoteSectionAttributes.setId('note-section');
    NoteSectionAttributes.addClass('note_section', 'section', 'active_section');
    
    const noteData = await getNoteData(); // Skip for now till Node Server is set up
    const localNoteData = await getLocalStorageNoteData();

    // Declare to keep track of notes
    let noNotes = true;

    calledStateOnce && localNoteData.length !== 0 ?
        (() => {
            renderCount++;
            renderNote(localNoteData, noteSection, 1);
            console.warn('NoteSection render notes card ', renderCount, ' times');
        }) () : renderNote([], noteSection, 3);

        calledStateOnce = false;
    noNotes = true;

    // Search notes
    searchNotes(noteSection);

    // Edit note
    editNote(noteSection);

    // Return noteSection
    return { noteSection, noNotes };
}

export default NoteSection;