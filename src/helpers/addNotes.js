import handleAddNotes from '../events/handleAddNotes.js';
import saveNote from '../helpers/saveNote.js';


const addNotes = () => {
  const addNotesButton = document.querySelector('.add_note');
  
  const aside = document.querySelector('.aside');
  const main = document.querySelector('.main');
  
  addNotesButton.addEventListener('click', handleAddNotes);
}

export default addNotes;