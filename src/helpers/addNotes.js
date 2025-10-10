import handleAddNotes from '../events/handleAddNotes.js';

const addNotes = () => {
    const addNotesButton = document.querySelector('.add_note');
    addNotesButton.addEventListener('click', handleAddNotes);
}

export default addNotes;