// Import helpers
import selectElements from "../helpers/selectElements.js";
import hideButtons from "../helpers/hideButtons.js";

// Import SVG's
import { pencilSvg } from "../assets/svg/svg-icons.js";

const handleAddNotes = (event) => {
    const { returnButton, titleInput, navHeading, formSection, noteSection } =selectElements();
    hideButtons();

    // Add classes for accesibility
    formSection.classList.add("active_section");
    noteSection.classList.remove("active_section");
    returnButton.classList.add("show_return_button");

    // Change textcontent
    navHeading.innerHTML = `Edit note ${pencilSvg}`;
    navHeading.style.fontSize = "2rem";

    // Focus title input to enter note
    titleInput.focus();
};

export default handleAddNotes;
