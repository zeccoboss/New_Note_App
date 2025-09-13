// Import components
import Main from './MainBody.js';
import Aside from './Aside.js';

// Import class
import SetElementAttributes from '../utils/setElementAttributes.js';

const InnerContainer = () => {
  const innerContainer = document.createElement('div');
  
  // initiate instance of SetElementAttributes class
  const InnerContainerAttributes = new SetElementAttributes(innerContainer);
  
  // Set attributes 
  InnerContainerAttributes.setId('inner-container');
  InnerContainerAttributes.addClass('inner_container');

  // Append components 
  innerContainer.append(
    Aside()
  )
  
  // Return innerContainer element
  return innerContainer;
}

export default InnerContainer;