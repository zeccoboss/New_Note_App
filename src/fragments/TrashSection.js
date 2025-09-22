import CreateElement from "../utils/CreateElement.js";
import SetInnerHTML from "../utils/SetInnerHTML.js";

const TrashSection = () => {
    // Create trashSection element
    const trashSection = new CreateElement('section');

    // Set attributes
    trashSection.setId('trash-section');
    trashSection.addClass('trash_section', 'section');

    // Set innerHTML
    trashSection.setInnerHTML("Hello zecco");

    // Return trashSection element
    return trashSection.getElement();
}

export default TrashSection;