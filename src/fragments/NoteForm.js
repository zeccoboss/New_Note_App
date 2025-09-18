// Import components
import Input from './Input.js';
import TextArea from './TextArea.js';

// Import handler's
import dateHandler from '../utils/dateHandler.js';

// Import classes
import SetElementAttributes from '../utils/setElementAttributes.js';
import SetInnerHTML from '../utils/SetInnerHTML.js';

const NoteForm = () => {
	// Create element 
	const form = document.createElement('form');
	const timeElement = document.createElement('span');
	const saveButton = document.createElement('button');

	timeElement.innerHTML = `${dateHandler()}`;
	timeElement.style.fontSize = '0.7rem';

	timeElement.style.paddingLeft = '0.5rem';
	saveButton.innerText = '✅';
	saveButton.id = 'save-button';
	saveButton.classList.add('save_button', 'button');
	
	// initiate instance of SetElementAttributes class
	const FormAttributes = new SetElementAttributes(form);
	const timeElementAttributes = new SetInnerHTML(timeElement);
	const saveButtonAttributes = new SetInnerHTML(saveButton);

	
	// Set attributes 
	FormAttributes.setId('note-form');
	FormAttributes.addClass('note_form');

	timeElementAttributes.setId('form-time-element')
	timeElementAttributes.addClass('form_time_element');

	// timeElementAttributes.showElement();
	// saveButtonAttributes.showElement();
	
	// Add element to DOM
	form.append(
		timeElement,
		Input(),
		TextArea(),
		saveButton
	)
	
	// Return form element 
	return form;
}

// Export NoteForm
export default NoteForm;