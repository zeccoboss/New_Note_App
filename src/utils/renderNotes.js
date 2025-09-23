import handleAddNotes from '../events/handleAddNotes.js';
import highlightCard from '../events/selectCard.js';
import EmptyState from '../fragments/EmptyState.js';
import Note from '../fragments/NoteCard.js';

let initialNoteSectionState = 0;

const renderNote = async (noteData, noteSection=[], noteStateValue=0) => {
    //
    if (noteSection) {
        noteSection.innerHTML = '';
        console.log('Note section cleared');
    } else if (noteData === 0) {
        console.warn('Note data array is not iterable!');
    } else {
        console.warn('Can\'t find note section');
        return;
    }
    
    //
    initialNoteSectionState = noteStateValue === 1 && noteData.length > 0  ? 1 : 0; // Returns 1 when true
    initialNoteSectionState = noteStateValue === 2 && noteData.length > 0 ? 2 : 1; // Add 1 
    initialNoteSectionState = noteStateValue === 3 && noteData.length === 0  ? 0 : 1; // Returns 0 when true

    if (initialNoteSectionState === 0) {
        EmptyState(noteSection);
    } else if (initialNoteSectionState === 1) {
        // console.log(noteData);

        noteData.forEach(note => {
            // console.log(note);
            
            noteSection.append(Note({ ...note }));
        });
        
        // console.log('initialNoteSectionState 1?', initialNoteSectionState);
        return;
    } else if (initialNoteSectionState === 2) {
        noteData.forEach(note => {
            console.log(note);
            noteSection.append(Note({ ...note }));
        });
    
        console.log('initialNoteSectionState 2?', initialNoteSectionState);
    }

    console.log("Note section state: ", initialNoteSectionState);
    highlightCard(noteSection);
}

export default renderNote;