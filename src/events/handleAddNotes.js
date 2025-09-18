// Import helpers

// Import SVG's
import { pencilSvg } from "../assets/svg/svg-icons.js";

const handleAddNotes = (event) => {
    // Get elements from DOM
    const navHeading = document.querySelector(".header_nav_heading");
    const formSection = document.getElementById('form-section');

    const noteSection = document.querySelector(".note_section");
    const addNotesButton = document.querySelector(".add_note");
    const returnButton = document.querySelector(".return_button");
    const searchInput = document.querySelector(".search_input");
    const titleInput = document.querySelector(".note_title_input");

    const selectAllBtn = document.querySelector("#select-all-btn");
    const settingsBtn = document.querySelector("#settings-btn");
    const moreActionBtn = document.querySelector("#show-more-action-button");

    // Add classes for accesibility
    formSection.classList.add("active_section");
    noteSection.classList.remove("active_section");
    returnButton.classList.toggle("show_return_button");
    
    // Hide all buttons
    addNotesButton.style.visibility = "hidden";
    searchInput.style.visibility = "hidden";
    selectAllBtn.style.visibility = "hidden";
    settingsBtn.style.visibility = "hidden";
    moreActionBtn.style.visibility = "hidden";

    // Change textcontent
    navHeading.innerHTML = `Edit note ${pencilSvg}`;
    navHeading.style.fontSize = "1.5rem";

    // Focus title input to enter note
    titleInput.focus();
};

export default handleAddNotes;
