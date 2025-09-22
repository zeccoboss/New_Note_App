// Import helpers
import { gearSvg } from "../assets/svg/svg-icons.js";
import selectElements from "./selectElements.js";
import hideButtons from "./hideButtons.js";

const navigateSettings = (e) => {

    const { navHeading, noteSection, returnButton } = selectElements();
    const settingsSection = document.querySelector("#settings-section");
    
    returnButton.classList.add("show_return_button");

    // Change innerHTML
    // navHeading.innerHTML = `${gearSvg} <span>Settings</span>`;
    navHeading.innerHTML = `Settings`;

    settingsSection.classList.add('active_section');
    noteSection.classList.remove('active_section');

    // Call to hide buttons 
    hideButtons();
}

export default navigateSettings;