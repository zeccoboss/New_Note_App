// Import classes
import SetElementAttributes from '../utils/SetElementAttributes.js';

// Import SVG's
import { homeSvg } from '../assets/svg/svg-icons.js';

const ReturnNavContainer = () => {
    const returnNavContainer = document.createElement('div');
    const navListItems = document.createElement('li');
    const returnHomeBtn = document.createElement('button');

    // Set innerHTML
    returnHomeBtn.innerHTML =  `${homeSvg}`;
    
    // initiate instance of SetElementAttributes class
    const ReturnNavContainerNavAttributes = new SetElementAttributes(returnNavContainer);
    const navListItemsAttributes = new SetElementAttributes(navListItems);
    const ReturnHomeBtnAttributes = new SetElementAttributes(returnHomeBtn);

    // Set attributes 
    ReturnNavContainerNavAttributes.setId('return-nav-container');
    ReturnNavContainerNavAttributes.addClass('return_nav_container');

    navListItemsAttributes.addClass('nav_list_items');
    navListItemsAttributes.setId('nav-list-items');
    
    ReturnHomeBtnAttributes.addClass('return_button', 'button');
    ReturnHomeBtnAttributes.setId('return-button');

    // Add to DOM
    returnNavContainer.appendChild(navListItems);
    navListItems.appendChild(returnHomeBtn);

    // Return returnNavContainer element
     return returnNavContainer;
}

export default ReturnNavContainer;