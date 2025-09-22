// Import fragments 
import NoteSection from '../fragments/NoteSection.js';
import SettingsSection from '../fragments/SettingsSection.js';
import FormSection from '../fragments/FormSection.js';
import TrashSection from '../fragments/TrashSection.js';

// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

// Import service handler 
import { getNoteData } from '../../service/notesService.js';
import highlightCard from '../events/selectCard.js';
import selectElements from '../helpers/selectElements.js';

const Main = async () => {
	// Create element
	const main = document.createElement('main');
	
	// Initiate instance of SetElementAttributes class
	const MainAttributes = new SetElementAttributes(main);
	
	// Set attributes 
	MainAttributes.setId('main');
	MainAttributes.addClass('main');

	// main.addEventListener('')
	
	const { noteSection, noNotes } = await NoteSection();
	// console.log("Are there motes? ", noNotes);
		
	main.append(noteSection, SettingsSection(), FormSection(), TrashSection());
	
	highlightCard(main, noteSection);
	selectElements(main, noteSection);
	return main;
}

export default Main;