const navigateHome  = (event) => {
    // Get elements from DOM 
    const navHeading = document.querySelector('.header_nav_heading');
    const aside = document.querySelector('.aside');
    const main = document.querySelector('.main');
    const addNotesButton = document.querySelector('.add_note');
    const returnButton = document.querySelector('.return_button');
    const searchInput = document.querySelector('.search_input');
    const titleInput = document.querySelector('.note_title_input');

    const selectAllBtn = document.querySelector('#select-all-btn');
    const settingsBtn = document.querySelector('#settings-btn');
    const moreActionBtn = document.querySelector('#show-more-action-button');

    	// Add classes for accesibility

    if (aside,classList.contains('nrfjkc')) {
        aside.classList.remove('active_section');
        main.classList.add('active_section');
	    returnButton.classList.toggle('show_return_button');
    }
}

export default navigateHome;