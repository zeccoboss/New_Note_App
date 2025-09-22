const selectElements = (mainElement, mainSoteSection) => {
    // Get elements from DOM
    const navHeading = document.querySelector(".header_nav_heading");
    const searchInput = document.querySelector(".search_input");
    const titleInput = document.querySelector(".note_title_input");
    const noteTextArea = document.querySelector('#note-textarea');
    const moreActionList = document.querySelector('.more_action_list');

    const innerContainer = document.querySelector('.inner_container')
    const main = innerContainer.querySelector('main');
    const formSection = document.querySelector('.form_section');
    const noteSection  = document.getElementById('note-section');
    const settingsSection = document.querySelector("#settings-section");
    const trashSection = innerContainer.querySelector('#trash-section');

    const returnButton = document.querySelector(".return_button");
    const addNotesButton = document.querySelector(".add_note");
    const selectAllBtn = document.querySelector("#select-all-btn");
    const moreActionBtn = document.querySelector("#show-more-action-button");
    const settingsBtn = document.querySelector("#settings-btn");
    const trashActionBtn = document.querySelector('#trash-action-button');
    const selectActionBtn = document.querySelector('#select-action-button')

    if (!navHeading && !searchInput && !titleInput && !noteTextArea) {
        
    }

    return { navHeading, searchInput, titleInput, noteTextArea, main, noteSection, settingsSection, formSection,trashSection, returnButton, addNotesButton, selectActionBtn, selectAllBtn, moreActionBtn, settingsBtn, trashActionBtn, moreActionList };
}

export default selectElements; 