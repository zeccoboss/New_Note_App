const selectElements = () => {
    // Get elements from DOM
    const navHeading = document.querySelector(".header_nav_heading");
    const searchInput = document.querySelector(".search_input");
    const titleInput = document.querySelector(".note_title_input");
    const noteTextArea = document.querySelector('#note-textarea');

    const main = document.querySelector('.main');
    const sections = Array.from(main.getElementsByClassName('section'));
    const formSection = document.getElementById('form-section');
    const noteSection = document.querySelector(".note_section");
    const moreActionTogller = document.querySelector('#show-more-action-button');
	const moreActionList = document.querySelector('#more-action-list');
	const moreActionFlow = document.querySelector('#action-flow');

    const returnButton = document.querySelector(".return_button");
    const addNotesButton = document.querySelector(".add_note");
    const selectAllBtn = document.querySelector("#select-all-btn");
    const moreActionBtn = document.querySelector("#show-more-action-button");
    const settingsBtn = document.querySelector("#settings-btn");

    return { navHeading, searchInput, titleInput, noteTextArea, main, sections, noteSection, formSection, moreActionTogller, moreActionList, moreActionFlow, returnButton, addNotesButton, selectAllBtn, moreActionBtn, settingsBtn };
}

export default selectElements;