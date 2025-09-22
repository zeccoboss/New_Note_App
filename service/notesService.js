const notesUrl = '../model/notes.json';

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

const updateNote = async () => {
  	console.log('Updating notes...')
}

const deleteNote = () => {
    console.log('Note deleted!');
}

const createNote = () => {
  	console.log('Creating note...');
}

// console.log(JSON.parse(localStorage.getItem("zecco_note_app")));

export { getNoteData, updateNote, deleteNote, createNote }