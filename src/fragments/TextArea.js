// Import class
import SetElementAttributes from '/src/utils/setElementAttributes.js';

const TextArea = () => {
  // Create textarea element 
  const textarea = document.createElement('textarea');
  
  // Initiate SetElementAttributes class
  const TextAreaAttributes = new SetElementAttributes(textarea);
  
  // Set attributes 
  TextAreaAttributes.addClass('note_textarea');
  TextAreaAttributes.setPlaceHolder('Start typing...');
  
  // Return textarea
  return textarea;
}

export default TextArea;