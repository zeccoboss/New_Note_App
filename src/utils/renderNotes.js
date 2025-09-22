import handleAddNotes from '../events/handleAddNotes.js';
import Note from '../fragments/NoteCard.js';

let initialNoteSectionState = 0;

const renderNote = async (noteData, noteSection, noteStateValue) => {
    //
    noteSection.innerHTML = '';
    
    //
    initialNoteSectionState = noteStateValue === 1 && noteData.length > 0  ? 1 : 0; // Returns 1 when true
    initialNoteSectionState = noteStateValue === 2 && noteData.length > 0 ? 2 : 1; // Add 1 
    initialNoteSectionState = noteStateValue === 3 && noteData.length === 0  ? 0 : 1; // Returns 0 when true

    console.log(noteSection);
    

    if (initialNoteSectionState === 0) {
        // Create elements and append to DOM when no note's found
        const emptyState = document.createElement('div');
        const emptyStateP = document.createElement('p');
        const createNoteButton = document.createElement('button');
        
        // Add innerText and innerHTML
        emptyStateP.innerText = 'No notes found📝';
        createNoteButton.innerText = 'Create note ';
        
        // Set elements attributes
        emptyState.classList.add('empty_state');
        createNoteButton.classList.add('create_note_button', 'button');

        // Append child
        emptyState.append(emptyStateP, createNoteButton);
        noteSection.append(emptyState);

        // Add event listerner to create new note if none found
        createNoteButton.addEventListener('click', handleAddNotes);

        const selectAllBtn = document.querySelector('.select_all_btn');
        const selectActionBtn = document.querySelector('#select-action-button');

        selectAllBtn.disabled = true;
        selectActionBtn.removeEventListener('click', (e) => { console.log('Mmmm...')});

        selectActionBtn.style.background = "gray";
        selectActionBtn.style.color = "hsl(0, 0%, 19%)";

        console.log(initialNoteSectionState);
        console.log('initialNoteSectionState 0?', initialNoteSectionState);
        return;
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
}

export default renderNote;