// Import helpers
import appendMainSectionToDOM from '../helpers/appendMainSection.js';

// Import handler's
import dateHandler from '../utils/dateHandler.js';
import addNotes from '../helpers/addNotes.js';
import handleMoreAction from '../events/handleMoreAction.js';

// Import events
import returnHome from '../events/returnHome.js';
import handleNewNote from '../events/handleNewNote.js';

// Core function to link all functionality 
const initApp = async () => {
	// Log starting app for debugging purpose
	console.log('Starting application...');

	// Call to append main section to innerContainer  
	appendMainSectionToDOM();
	
	// Navigate to home page
	returnHome();
	
	// Add notes funtion 
	addNotes();
	
	// Connets nav more action to the page
	handleMoreAction();
	
	// Log date to console 
	console.log(dateHandler());

	// navigate home
	returnHome();
}

export default initApp;