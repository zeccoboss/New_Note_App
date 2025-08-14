const notesUrl = '../public/notes.json';

const getNoteData = async () => {
  try {
    const res = await fetch(notesUrl);
    if (!res.ok) {
      throw new Error('Invalid fetch call!');
    }
    const notes = await res.json();
    return notes;
  } catch (e) {
    console.error(e);
    return [];
  }
}

const updateNote = () => {
  console.log('Updating notes...')
}

const deleteNote = () => {
  console.log('Note deleted!');
}

const createNote = () => {
  console.log('Creating note...');
}

export { getNoteData, updateNote, deleteNote, createNote }