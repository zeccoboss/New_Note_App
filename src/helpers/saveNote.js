const saveNote = (navHeading) => {
  const aside = document.querySelector('.aside');
  const main = document.querySelector('.main');
  const titleInput = document.querySelector('note_title_input');
  const addNotesButton = document.querySelector('.add_note');
  const searchInput = document.querySelector('.search_input');

  searchInput.style.position = 'static';
  addNotesButton.textContent = 'Add note';
  aside.classList.remove('active_section');
  main.classList.add('active_section');
  navHeading.textContent = 'Notes';
}

export default saveNote;