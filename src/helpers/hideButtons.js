// Import SVG's
import { pencilSvg } from "../assets/svg/svg-icons.js";

// Import helpers
import selectElements from "./selectElements.js";

const hideButtons = () => {
    // Get elements form getElements module
    const{ navHeading, searchInput, titleInput, noteSection, formSection, returnButton, addNotesButton, selectAllBtn, moreActionBtn, settingsBtn } = selectElements();

    // Hide all buttons
    addNotesButton.style.visibility = "hidden";
    searchInput.style.visibility = "hidden";
    selectAllBtn.style.visibility = "hidden";
    settingsBtn.style.visibility = "hidden";
    moreActionBtn.style.visibility = "hidden";

    console.log('Hide buttons function called...');
}

export default hideButtons;