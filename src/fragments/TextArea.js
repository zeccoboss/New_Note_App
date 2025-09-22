// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

const TextArea = () => {
  // Create textarea element 
  const textarea = document.createElement('textarea');
  
  // Initiate SetElementAttributes class
  const TextAreaAttributes = new SetElementAttributes(textarea);
  
  // Set attributes 
  TextAreaAttributes.addClass('note_textarea');
  TextAreaAttributes.setId('note-textarea');
  TextAreaAttributes.setPlaceHolder('Start typing...');
  
  // Return textarea
  return textarea;
}

export default TextArea;