// Import components
import Main from '/src/components/MainBody.js';
import Aside from '/src/components/Aside.js';

// Import class
import SetElementAttributes from '/src/utils/setElementAttributes.js';

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
  
  return innerContainer;
}

export default InnerContainer;