import { trashIconSVG } from "../assets/svg/svg-icons.js";
import CreateElement from "../utils/CreateElement.js";

const HighlightOptionsList = async (main) => {
   // Create highlightOptionsList
   const highlightOptionsList = new CreateElement('ul'); 

   // Set attributes
   highlightOptionsList.addClass('highlight_option_container');
   highlightOptionsList.setId('highlight-option-container');

   // Create a template string with html content
   const innerHTML = `
      <button class="option_list_toggler">Show Option List</button>

      <ul class="highlight_option_list" id="highlight-option-list">
         <li id="delete-option" class="options_list delete_option">
            ${trashIconSVG} 
            <span>Delete</span>
         </li>
      </ul>
   `;

   // Set innerHTML
   highlightOptionsList.setInnerHTML(innerHTML);

   // Add to DOM
   main.appendChild(highlightOptionsList.getElement());
   // Return HighlightOptionsList element
   return highlightOptionsList.getElement();
}

export default HighlightOptionsList;