// Import helpers
import saveNote from '/src/helpers/saveNote.js';

const handleAddNotes = (event) => {
  // Get elements from DOM 
  const navHeading = document.querySelector('.header_nav_heading');
  const aside = document.querySelector('.aside');
  const main = document.querySelector('.main');
  const titleInput = document.querySelector('.note_title_input');
  const addNotesButton = document.querySelector('.add_note');
  
  addNotesButton.classList.toggle('opened_aside');
  const returnButton = document.querySelector('.return_button');
  const searchInput = document.querySelector('.search_input');
  
  returnButton.classList.toggle('show_return_button');
  
  // Check when the aside section is active or not to asign a function 
  addNotesButton.classList.contains('opened_aside') ?
    (() => {
      addNotesButton.textContent = 'Save';
      aside.classList.add('active_section');
      main.classList.remove('active_section');
      navHeading.textContent = 'Edit note...'
      returnButton.style.position = 'static';
      !titleInput ? null : titleInput.focus();
      searchInput.style.position = 'absolute';
      searchInput.style.top = '-50px'
      addNotesButton.style.visibility = 'hidden'
      // Disable button to stop it from saving empty title & notes
      //addNotesButton.disabled = true;

    })() :
    (() => saveNote(navHeading, returnButton))() // Self called funtion to save notes
}

export default handleAddNotes;