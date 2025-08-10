import handleAddNotes from '/src/events/handleAddNotes.js';
import saveNote from '/src/helpers/saveNote.js';


const addNotes = () => {
  const addNotesButton = document.querySelector('.add_note');
  
  const aside = document.querySelector('.aside');
  const main = document.querySelector('.main');
  
  addNotesButton.addEventListener('click', handleAddNotes);
}

export default addNotes;