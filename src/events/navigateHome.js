// Import fragments 
import saveNote from "../helpers/saveNote.js";

const navigateHome  = (event) => {
    // Get elements from DOM 
    const navHeading = document.querySelector('.header_nav_heading');
    const formSection = document.getElementById('enter-new-note-section');

    const main = document.querySelector('.main');
    const addNotesButton = document.querySelector('.add_note');
    const returnButton = document.querySelector('.return_button');
    const searchInput = document.querySelector('.search_input');
    const titleInput = document.querySelector('.note_title_input');

    const selectAllBtn = document.querySelector('#select-all-btn');
    const settingsBtn = document.querySelector('#settings-btn');
    const moreActionBtn = document.querySelector('#show-more-action-button');

    saveNote();
}

export default navigateHome;