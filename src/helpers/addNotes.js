import handleAddNotes from '../events/handleAddNotes.js';
import saveNote from '../helpers/saveNote.js';


const addNotes = () => {
    const addNotesButton = document.querySelector('.add_note');
    addNotesButton.addEventListener('click', handleAddNotes);
}

export default addNotes;