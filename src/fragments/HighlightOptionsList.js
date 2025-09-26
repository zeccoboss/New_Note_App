import { trashIconSVG } from "../assets/svg/svg-icons.js";
import CreateElement from "../utils/CreateElement.js";

const HighlightOptionsList = (noteSection) => {
   // Create highlightOptionsList
   const highlightOptionsList = new CreateElement('ul'); 

   // Set attributes
   highlightOptionsList.addClass('highlight_option_list');
   highlightOptionsList.setId('highlight-option-list');

   // Create a template string with html content
   const innerHTML = `
      <button class="delete_btn">${trashIconSVG} <span>Delete</span></button>
   `;

   // Set innerHTML
   highlightOptionsList.setInnerHTML(innerHTML);

   // Add to DOM
   noteSection.appendChild(highlightOptionsList.getElement());
   console.log(noteSection);
   // Return HighlightOptionsList element
   return highlightOptionsList.getElement();
}

export default HighlightOptionsList;