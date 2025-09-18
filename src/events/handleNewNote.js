const handleNewNote = () => {
  const titleInput = document.querySelector('.note_title_input');
  const noteTextArea = document.querySelector('#note-textarea');

  let title = undefined;
  let note = undefined;


  titleInput.addEventListener('input', (e) => {
    // title = e.target.value.trim().tolowerCase();
    title = e.target.value;

    console.log(title);
  });

  noteTextArea.addEventListener('input', (e) => { 
    note = e.target.value;
  });

  return { title, note }
} 

export default handleNewNote;