import getLocalStorageNoteData from "../../service/localSorageData.js";
import navigateHome from "../helpers/navigateHome.js";
import CreateElement from "../utils/CreateElement.js";
import renderNote from "../utils/renderNotes.js";

const EmptySearchResultContainer = (noteSection) => {
    // Create element
    const emptyResultContainer = new CreateElement('div');
noteSection.innerHTML =''
    // Setattributes
    emptyResultContainer.setId('empty-search-container');
    emptyResultContainer.addClass('empty_search_container');

    // Set innerHTML
    emptyResultContainer.getElement().innerHTML = `
        <h3>No Results Found!</h3>
        <button id="clear-search" class="clear_search_btn button">Clear Search</button>
    `;

    const cancleSearchBtn = emptyResultContainer.getElement().querySelector('#clear-search');
    const searchInput = document.querySelector('.search_input');

    cancleSearchBtn.addEventListener('click', async (e) => {
        // Clear search input
        searchInput.value = '';

        renderNote(await getLocalStorageNoteData(), noteSection, 5);
    });

    // Add to Note section
    noteSection.append(emptyResultContainer.getElement());
}

export default EmptySearchResultContainer;