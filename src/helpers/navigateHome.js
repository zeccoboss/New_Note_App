// Import fragments 
import { savedNoteAppTheme } from "../events/appTheme.js";
import selectElements from "./selectElements.js";
import saveNote from "./saveNote.js";

// Import helpers
import showButtons from "./showButtons.js";

const navigateHome  = (event) => {
    // Destruct and get elements from the selectElements fintion
    const sections = Array.from(main.querySelectorAll('.section'));

    const { noteSection, navHeading } = selectElements();

    // Increase font size and add innerHTML
    navHeading.innerHTML = "Notes";
    navHeading.style.fontSize = "2.2rem";

    document.querySelector('#app').classList.add(JSON.parse(localStorage.getItem('saved-note-app-theme')));

    // Filter the sections and return all which does not match the section
    const filteredections = sections.filter(setion => setion !== noteSection);

    // Loop through the filteredSections and remove the "active_section" class
    filteredections.forEach(section => section.classList.remove('active_section'));

    // add the "active_section" class to show as home
    noteSection.classList.add('active_section');

    // Call to display all hidden buuttons
    showButtons();
    const { titleInput, noteTextArea } = selectElements();

    // Only save notes when title or note content is typed
    if (titleInput.value.trim() || noteTextArea.value.trim()) {
        // Save notes if content are added to input or textarea
        saveNote(event); 
        console.warn('Note saved called from navigate ome function!');
    }
}

export default navigateHome;