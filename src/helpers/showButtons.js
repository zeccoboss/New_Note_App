// Import SVG's
import { pencilSvg } from "../assets/svg/svg-icons.js";
import selectElements from "./selectElements.js";

// Import helpers

const showButtons = () => {
    // Get elements form getElements module
    const{ navHeading, searchInput, titleInput, noteSection, formSection, returnButton, addNotesButton, selectAllBtn, moreActionBtn, settingsBtn } = selectElements();
    returnButton.classList.remove("show_return_button");

    navHeading.innerHTML = 'Notes';

    // Hide all buttons
    addNotesButton.style.visibility = "visible";
    searchInput.style.visibility = "visible";
    selectAllBtn.style.visibility = "visible";
    settingsBtn.style.visibility = "visible";
    moreActionBtn.style.visibility = "visible";
}

export default showButtons;