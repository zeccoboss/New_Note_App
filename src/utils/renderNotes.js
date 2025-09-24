import editNote from '../events/editNote.js';
import highlightCard from '../events/selectCard.js';
import EmptySearchResultContainer from '../fragments/EmptySearchResultContainer.js';
import EmptyState from '../fragments/EmptyState.js';
import Note from '../fragments/NoteCard.js';

let initialNoteSectionState = 0;

const renderNote = async (noteData, noteSection, noteStateValue) => {
    //
    if (noteSection) {
        noteSection.innerHTML = '';
        console.warn('Note section cleared');
        console.log('');
    } else if (noteData === 0) {
        console.warn('Note data array is not iterable!');
    } else {
        console.warn('Can\'t find note section');
        return;
    }

    /*
        The initialNoteSectionState valuse are evaluated as follows
        ____________________________________________________________________________________________________________________________
       
        0. There's no data to render .
        1. The initial rendering of found notes data when page first loads.
        2. The state when a new note is added or a search occured and the DOM and needs to be re-rendered, (2) is the passed value 
        3. Value passed when page tries to render a second time from the first page reload, its checked and asign (0) to initialNoteSectionState.
        4. When searching notes and an empty array is passed to the render funtion.  

    */

    console.log('passed value:', noteStateValue);

    if (noteStateValue === 1 && noteData.length > 0) {
        //
        initialNoteSectionState = 1
    } else if (noteStateValue === 2 && noteData.length > 0) {
        // 
        initialNoteSectionState = 2;
    } else if ( noteStateValue === 3 && noteData.length === 0 ) {
        //
        initialNoteSectionState = 0;
    } else if (noteStateValue === 4 && noteData.length === 0 ) {
        initialNoteSectionState = 4;
    }

    // initialNoteSectionState = noteStateValue === 1 && noteData.length > 0  ? 1 : 0; // 
    // console.log('state value', initialNoteSectionState);

    // initialNoteSectionState = noteStateValue === 2 && noteData.length > 0 ? 2 : 1; // 
    // console.log('state value', initialNoteSectionState);

    // initialNoteSectionState = noteStateValue === 3 && noteData.length === 0  ? 0 : 1; //
    // console.log('state value', initialNoteSectionState);
    
    
    // initialNoteSectionState = noteStateValue === 4 && noteData.length === 0 ? 4 : 1;

    console.log('');
    console.log('passed value:', noteStateValue);
    console.log('data length:', noteData.length);
    console.log('state value:', initialNoteSectionState);
    

        

    if (initialNoteSectionState === 0) {
        EmptyState(noteSection);
    } else if (initialNoteSectionState === 1) {
        noteData.forEach(note => {
            noteSection.append(Note({ ...note }));
        });

        // Edit note
        editNote(noteSection);
        
        // Function for highlighting notes
        highlightCard(noteSection);    } else if (initialNoteSectionState === 2) {
        noteData.forEach(note => {
            console.log(note);
            noteSection.append(Note({ ...note }));
        });

        // Edit note
        editNote(noteSection);

        // Function for highlighting notes
        highlightCard(noteSection);
    } else if (initialNoteSectionState === 4) {
        // EmptyState(noteSection);
        EmptySearchResultContainer(noteSection);
    }

    console.log("Note section state: ", initialNoteSectionState);
}

export default renderNote;