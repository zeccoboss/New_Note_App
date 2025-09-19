// Import fragments 
import Note from './NoteCard.js';

// Import class
import SetElementAttributes from '../utils/setElementAttributes.js';

// Import service handler 
import { getNoteData } from '../../service/notesService.js';

const NoteSection = async () => {
    // Create element
    const noteSection = document.createElement('section');
    
    // Initiate instance of SetElementAttributes class
    const NoteSectionAttributes = new SetElementAttributes(noteSection);
    
    // Set attributes 
    NoteSectionAttributes.setId('note-section');
    NoteSectionAttributes.addClass('note_section', 'section', 'active_section');
    
    const noteData = await getNoteData();
    
    // console.log(noteData)
    
    if (noteData.length === 0) {
        const emptyState = document.createElement('div');

        const emptyStateP = document.createElement('p');
        const createNoteButton = document.createElement('button');
        
        emptyStateP.innerText = 'No notes found📝';
        createNoteButton.innerText = 'Create note ';
        
        emptyState.classList.add('empty_state');
        createNoteButton.classList.add('create_note_button', 'button');
        
        emptyState.append(emptyStateP, createNoteButton);
        noteSection.append(emptyState);
    } else {
        noteData.forEach(note => {
        noteSection.append(Note({ ...note }));
        });
    }
    
    return noteSection;
}

export default NoteSection;