// Import helpers
import appendMainSectionToDOM from '../helpers/appendMainSection.js';
import addNotes from '../helpers/addNotes.js';

// Import handler's
import dateHandler from '../utils/dateHandler.js';
import handleMoreAction from '../events/handleMoreAction.js';

// Import events
import returnHome from '../events/returnHome.js';
import enterSettings from '../events/enterSettings.js';
import moreActionNavigation from '../events/moreActionNavigation.js';
import enterTrash from '../events/enterTrash.js';

// Core function to link all functionality 
const initApp = async () => {
	// Log starting app for debugging purpose
	console.log('Starting application...');
	
	appendMainSectionToDOM(); // Call to append main section to innerContainer  
	returnHome(); // Navigate to home page
	addNotes(); // Add notes funtion 	
	handleMoreAction(); // Connets nav more action to the page
	moreActionNavigation(); // Navigate from header
	console.log(dateHandler()); // Log date to console 
	returnHome(); // Navigate home
	enterSettings(); // Navigate Settings
	enterTrash(); // Navigate settings
}

export default initApp;