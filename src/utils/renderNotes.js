import highlightCard from '../events/selectCard.js';
import EmptySearchResultContainer from '../fragments/EmptySearchResultContainer.js';
import EmptyState from '../fragments/EmptyState.js';
import Note from '../fragments/NoteCard.js';

// Global variable to track state
let initialNoteSectionState = 0;

// function which render nots to DOM with given condition
const renderNote = async (noteData, noteSection, noteStateValue) => {
    // Select element from the DOM
    const selectAllBtn = document.querySelector('#select-all-btn');
    
    // Check if note sectio n is passed to thi scope
    if (noteSection) {
        // Clear note section and log a warning for debugging
        noteSection.innerHTML = '';
        console.warn('Note section cleared');
        console.log('');
    } else if (noteData === 0) {
        console.warn('Note data array is not iterable!');
    } else {
        // log a warning when note section not available and stop execution to avoid breaking application
        console.warn('Can\'t find note section');
        return;
    }

    /*
        The initialNoteSectionState valuse are evaluated as follows
        _______________________________________________________________________________________________
       
        0. There's no data to render .// Show an empty state when theres no data to render to page
        1. The initial rendering of found notes data when page first loads.
        2. The state when a new note is added or a search occured and the DOM and needs to be re-rendered, (2) is the passed value 
        3. Value passed when page tries to render a second time from the first page reload, its checked and asign (0) to initialNoteSectionState.
        4. When searching notes and an empty array is passed to the render funtion.  

    */

    // Check passed state value and note data length to manage App State consistently
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

    // console.log('');
    // console.log('passed value:', noteStateValue);
    // console.log('data length:', noteData.length);
    // console.log('state value:', initialNoteSectionState);

    if (initialNoteSectionState === 0) {
        EmptyState(noteSection); // Show an empty state when theres no data to render to page
        selectAllBtn.disabled = true; // Disable theselect all button
    } else if (initialNoteSectionState === 1) {
        noteData.forEach(note => noteSection.append( Note( { ...note } ) )); // Loop through notes and add to DOM
        highlightCard(noteSection); // Call the hight card function for the newly added cards
    } else if (initialNoteSectionState === 2) {
        noteData.forEach(note => noteSection.append( Note( { ...note } ) ));// Loop through notes and add to DOM
        selectAllBtn.disabled = false; // Enable theselect all button 
        console.log("Note section state: ", initialNoteSectionState); // Log state to console
        highlightCard(noteSection); // Call the hight card function for the newly added cards
        return;
    } else if (initialNoteSectionState === 4) {
        EmptySearchResultContainer(noteSection); // Show an empty area when no result found from search
    }

    // Log state for bug tracking
    console.log("Note section state: ", initialNoteSectionState);
}

export default renderNote;