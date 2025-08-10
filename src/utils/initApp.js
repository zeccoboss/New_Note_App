// Import helpers
import appendMainSectionToDOM from '/src/helpers/appendMainSection.js';

// Import handler's
import dateHandler from '/src/utils/dateHandler.js';
import addNotes from '/src/helpers/addNotes.js';
import handleMoreAction from '/src/events/handleMoreAction.js';

// Import events
import returnHome from '/src/events/returnHome.js';

// Core function to link all functionality 
const initApp = async () => {
  // Call to append main section to innerContainer  
  appendMainSectionToDOM();
  
  // Navigate to home page
  returnHome();
  
  // Add notes funtion 
  addNotes();
  
  // Connets nav more action to the page
  handleMoreAction()
  
  // Log date to console 
  console.log(dateHandler());
  
  // navigate home
  returnHome();
  
  // Log starting app for debugging purpose
  console.log('Starting application...');
}

export default initApp;