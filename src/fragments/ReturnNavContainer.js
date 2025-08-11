// Import classes 
import SetElementAttributes from '../utils/setElementAttributes.js';

const ReturnNavContainer = () => {
  const returnNavContainer = document.createElement('div');
  
  // initiate instance of SetElementAttributes class
  const ReturnNavContainerNavAttributes = new SetElementAttributes(returnNavContainer);
  
  // Set attributes 
  ReturnNavContainerNavAttributes.setId('return-nav-container');
  ReturnNavContainerNavAttributes.addClass('return_nav_container');
  
  returnNavContainer.innerHTML = `
      <li class="nav_list_items">
        <button class="return_button button" type="submit"><=</button>
      </li>
  `;
  
  // 
  return returnNavContainer;
}

export default ReturnNavContainer;

