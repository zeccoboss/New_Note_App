// Import fragments 
import { savedNoteAppTheme } from "../events/appTheme.js";
import selectElements from "./selectElements.js";
import saveNote from "./saveNote.js";

// Import helpers
import showButtons from "./showButtons.js";
import { updateNote } from "../../service/notesService.js";

const navigateHome  = (event) => {
    const main = document.querySelector('main');

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
    const saveBtn = document.querySelector('.save_button');
    const updateBtn = document.querySelector('.update_button');

    // Only save notes when title or note content is typed
    if (titleInput.value.trim() && noteTextArea.value.trim() && saveBtn.classList.contains('show_note_form_btn')) {
        // Save notes if content are added to input or textarea and save button is active
        saveNote(event); 
        console.warn('Note saved called from navigate home function!');
    } if (titleInput.value.trim() && saveBtn.classList.contains('show_note_form_btn')) {
        // Save notes if content are added to input or textarea and save button is active
        saveNote(event); 
        console.warn('Note saved called from navigate home function!');
    } if (noteTextArea.value.trim() && saveBtn.classList.contains('show_note_form_btn')) {
        // Save notes if content are added to input or textarea and save button is active
        saveNote(event); 
        console.warn('Note saved called from navigate home function!');
    } 
    
    if (titleInput.value.trim() && noteTextArea.value.trim() && updateBtn.classList.contains('show_note_form_btn'))  {
        // Save notes if content are added to input or textarea and update button is active
        updateNote(event);
        console.warn('Note updated called from navigate home function!');
    } else if (titleInput.value.trim() && updateBtn.classList.contains('show_note_form_btn'))  {
        // Save notes if content are added to input or textarea and update button is active
        updateNote(event);
        console.warn('Note updated called from navigate home function!');
    } else if (noteTextArea.value.trim()  && updateBtn.classList.contains('show_note_form_btn'))  {
        // Save notes if content are added to input or textarea and update button is active
        updateNote(event);
        console.warn('Note updated called from navigate home function!');
    } 
}

export default navigateHome;