// Import helpers
import hideButtons from "../helpers/hideButtons.js";
import selectElements from "../helpers/selectElements.js";

// Import SVG's
import { pencilSvg } from "../assets/svg/svg-icons.js";

const handleAddNotes = (event) => {
    const { returnButton, titleInput, navHeading, formSection, noteSection } = selectElements();
    const saveBtn = formSection.querySelector('.save_button');
    const updateBtn = formSection.querySelector('.update_button');

    // Remove class to determine how note will be saved
    saveBtn.classList.add('show_note_form_btn');
    updateBtn.classList.remove('show_note_form_btn');

    // Call to hide page buttons
    hideButtons();

    // Add classes for accesibility
    formSection.classList.add("active_section");
    noteSection.classList.remove("active_section");
    returnButton.classList.add("show_return_button");

    // Change textcontent
    navHeading.innerHTML = `Edit note ${pencilSvg}`;
    navHeading.style.fontSize = "1.58rem";

    // Focus title input to enter note
    titleInput.focus();
};

export default handleAddNotes;
