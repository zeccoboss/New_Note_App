// Import helpers
import { gearSvg } from "../assets/svg/svg-icons.js";
import selectElements from "./selectElements.js";
import hideButtons from "./hideButtons.js";

const navigateTrash = (e) => {

    const { trashSection, noteSection, returnButton, navHeading, moreActionList } = selectElements();

    moreActionList.classList.remove('show_more_action_list');


    returnButton.classList.add("show_return_button");

    // Change innerHTML
    // navHeading.innerHTML = `${gearSvg} <span>Settings</span>`;
    navHeading.innerHTML = `Trash`;

    trashSection.classList.add('active_section');
    noteSection.classList.remove('active_section');

    // Call to hide buttons 
    hideButtons();
}

export default navigateTrash;