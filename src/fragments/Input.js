import setElementAttributes from '/src/utils/setElementAttributes.js';

const Input = () => {
  // Create input element 
  const input = document.createElement('input');
  
  // Set attributes to input element 
  input.classList.add('note_title_input');
  input.id = 'note-title-input';
  input.setAttribute('placeholder', 'Title...');
  
  // Return input element 
  return input;
}

// Return input component 
export default Input;