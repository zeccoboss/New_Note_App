// Import SVG's
import { pencilSvg } from "../assets/svg/svg-icons.js";

// Import helpers
import selectElements from "./selectElements.js";

const showButtons = () => {
    // Get elements form getElements module
    const{ navHeading, searchInput, titleInput, noteSection, formSection, returnButton, addNotesButton, selectAllBtn, moreActionBtn, settingsBtn } = selectElements();
    returnButton.classList.remove("show_return_button");

    // Hide all buttons
    addNotesButton.style.visibility = "visible";
    searchInput.style.visibility = "visible";
    selectAllBtn.style.visibility = "visible";
    settingsBtn.style.visibility = "visible";
    moreActionBtn.style.visibility = "visible";

    console.log('Show buttons function called...');
}

export default showButtons;