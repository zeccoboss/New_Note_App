// Import components
import Input from './Input.js';
import TextArea from './TextArea.js';

// Import handler's
import dateHandler from '../utils/dateHandler.js';

// Import classes
import SetInnerHTML from '../utils/SetInnerHTML.js';
import handleNewNote from '../events/handleNewNote.js';

// Import events
import SetElementAttributes from '../utils/SetElementAttributes.js';
import CreateElement from '../utils/CreateElement.js';

const NoteForm = () => {
	// Create element 
	const form = document.createElement('form');
	const timeElement = document.createElement('span');
	const saveButton = document.createElement('button');
	const updateButton = new CreateElement('button');

	// 
	const currentTime = dateHandler();

	// initiate instance of SetElementAttributes class
	const FormAttributes = new SetElementAttributes(form);
	const timeElementAttributes = new SetInnerHTML(timeElement);
	const saveButtonAttributes = new SetInnerHTML(saveButton);
	
	// Set attributes 
	FormAttributes.setId('note-form');
	FormAttributes.addClass('note_form');

	timeElementAttributes.setId('form-time-element')
	timeElementAttributes.addClass('form_time_element');

	saveButtonAttributes.setId('save-button');
	saveButtonAttributes.addClass('save_button', 'button');

	// timeElementAttributes.showElement();
	// saveButtonAttributes.showElement();

	updateButton.setId('update-button');
	updateButton.addClass('update_button', 'button');
	updateButton.setType('button');

	// Set innerHTML and innerText
	timeElementAttributes.setInnerHTML(`${currentTime}`);
	saveButtonAttributes.setInnerText('Save');
	updateButton.setInnerHTML('Update');
	
	// Add element to DOM
	form.append(
		timeElement,
		Input(),
		TextArea(),
		saveButton,
		updateButton.getElement()
	);

	// Call to save new note
	handleNewNote(Input(), TextArea(), form);
	
	// Return form element 
	return { form, currentTime };
}

// Export NoteForm
export default NoteForm;