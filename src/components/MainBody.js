// Import fragments 
import NoteSection from '../fragments/NoteSection.js';
import SettingsSection from '../fragments/SettingsSection.js';
import FormSection from '../fragments/FormSection.js';
import TrashSection from '../fragments/TrashSection.js';

// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

import selectElements from '../helpers/selectElements.js';
import HighlightOptionsList from '../fragments/HighlightOptionsList.js';

const Main = async () => {
	// Create element
	const main = document.createElement('main');
	
	// Initiate instance of SetElementAttributes class
	const MainAttributes = new SetElementAttributes(main);
	
	// Set attributes 
	MainAttributes.setId('main');
	MainAttributes.addClass('main');

	// Get noteSection
	const { noteSection, noNotes } = await NoteSection();
		
	// Add Sections to DOM
	main.append(noteSection, SettingsSection(), FormSection(), TrashSection());
	
	// Select element Fuction
	selectElements(main, noteSection);

	// Call to append the hoight list option to The DOM
    HighlightOptionsList(main);
	return main;
}

export default Main;