import CreateElement from "../utils/CreateElement.js";
import SetInnerHTML from "../utils/SetInnerHTML.js";

const TrashSection = () => {
    // Create trashSection element
    const trashSection = new CreateElement('section');

    // Set attributes
    trashSection.setId('trash-section');
    trashSection.addClass('trash_section', 'section');

    // Set innerHTML
    trashSection.setInnerHTML("Sorry Page Not Available!");
    trashSection.getElement().style.textAlign = 'center';
    trashSection.getElement().style.fontSize = '1.5rem';
    // trashSection.getElement().style.padding = '1rem';

    // Return trashSection element
    return trashSection.getElement();
}

export default TrashSection;