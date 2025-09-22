import setElementAttributes from '../utils/SetElementAttributes.js';

const Input = () => {
  // Create input element 
  const input = document.createElement('input');
  
  const inputAttributes = new setElementAttributes(input);

  // Set attributes to input element 
  inputAttributes.addClass('note_title_input');
  inputAttributes.setId('note-title-input');
  inputAttributes.setPlaceHolder('Title...');
  
  // Return input element 
  return input;
}

// Return input component 
export default Input;