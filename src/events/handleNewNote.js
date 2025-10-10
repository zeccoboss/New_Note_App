import selectElements from "../helpers/selectElements.js";
import saveNote from '../helpers/saveNote.js';

const handleNewNote = (titleInput, noteTextArea, formSection) => {
	const saveButton = formSection.querySelector('#save-button')

	saveButton.addEventListener('click', saveNote);
} 

export default handleNewNote;