import highlightCard from '../events/selectCard.js';
import EmptySearchResultContainer from '../fragments/EmptySearchResultContainer.js';
import EmptyState from '../fragments/EmptyState.js';
import Note from '../fragments/NoteCard.js';

// Global variable to track state
let initialNoteSectionState = 0;

// function which render nots to DOM with given condition
const renderTrash = async (trashData, section, trashStateValue) => {
    // Select element from the DOM
    const selectAllBtn = document.querySelector('#select-all-btn');
    const selectActionBtn = document.querySelector('#select-action-button');

    // Check if section is passed to this scope
    if (section) {
        // Clear note section and log a warning for debugging
        section.innerHTML = '';
        console.warn('Section cleared');
        console.log('');
    } else if (noteData === 0) {
        console.warn('Trash data array is not iterable!');
    } else {
        // log a warning when note section not available and stop execution to avoid breaking application
        console.warn('Can\'t find Section');
        return;
    }

	trashData.forEach(note => section.append( Note( { ...note } ) )); // Loop through notes and add to DOM
	
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

    // 
    if (initialNoteSectionState === 0) {
        EmptyState(noteSection); // Show an empty state when theres no data to render to page
        selectAllBtn.disabled = true; // Disable theselect all button
    } else if (initialNoteSectionState === 1) {
        noteData.forEach(note => noteSection.append( Note( { ...note } ) )); // Loop through notes and add to DOM
        highlightCard(noteSection, deleteId); // Call the hight card function for the newly added cards
    } else if (initialNoteSectionState === 2) {
        noteData.forEach(note => noteSection.append( Note( { ...note } ) ));// Loop through notes and add to DOM
        selectAllBtn.disabled = false; // Enable theselect all button 
        selectActionBtn.classList.remove('disabled'); // Remove the disable class for accessibility
        console.log("Note section state: ", initialNoteSectionState); // Log state to console
        highlightCard(noteSection, deleteId); // Call the hight card function for the newly added cards
        return;
    } else if (initialNoteSectionState === 4) {
        EmptySearchResultContainer(noteSection); // Show an empty area when no result found from search
    }

    // Log state for bug tracking
    console.log("Note section state: ", initialNoteSectionState);
	
}

export default renderTrash;