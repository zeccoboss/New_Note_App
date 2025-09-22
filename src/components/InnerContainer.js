// Import components
import Main from './MainBody.js';

// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

const InnerContainer = () => {
  const innerContainer = document.createElement('div');
  
  // initiate instance of SetElementAttributes class
  const InnerContainerAttributes = new SetElementAttributes(innerContainer);
  
  // Set attributes 
  InnerContainerAttributes.setId('inner-container');
  InnerContainerAttributes.addClass('inner_container');
  
  // Return innerContainer element
  return innerContainer;
}

export default InnerContainer;