const saveNote = (navHeading, addNotesButton, returnButton) => {
  const aside = document.querySelector('.aside');
  const main = document.querySelector('.main');
  const titleInput = document.querySelector('note_title_input');
  const searchInput = document.querySelector('.search_input');

  searchInput.style.position = 'static';
  addNotesButton.textContent = 'Add note';
  addNotesButton.style.visibility = 'visible';
  aside.classList.remove('active_section');
  main.classList.add('active_section');
  navHeading.textContent = 'Notes';

  console.log(returnButton);
}

export default saveNote;