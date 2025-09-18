// Import events
import handleNewNote from '../events/handleNewNote.js';

const saveNote = (navHeading, addNotesButton, returnButton) => {
    // Get values from textarea and input
    const { title, note} =  handleNewNote();

    console.log(title);
    console.log(note);
}

export default saveNote;