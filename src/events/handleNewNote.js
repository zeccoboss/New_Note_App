const handleNewNote = () => {
  const titleInput = document.querySelector('.note_title_input');
  const noteTextArea = document.querySelector('#note-textarea');

  let title = null;
  let note = null;


  titleInput.addEventListener('input', (e) => {
    title = e.target.value;

  });

  noteTextArea.addEventListener('input', (e) => { 
    note = e.target.value;
  });
}

export default handleNewNote;