import handleAddNotes from "../events/handleAddNotes.js";

const EmptyState = (noteSection) => {
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
        return;
}

export default EmptyState;