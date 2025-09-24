import CreateElement from "../utils/CreateElement.js";

const EmptySearchResultContainer = (noteSection) => {
    // Create element
    const emptyResultContainer = new CreateElement('div');

    // Setattributes
    emptyResultContainer.setId('empty-search-container');
    emptyResultContainer.addClass('empty_search_container');

    // Set innerHTML
    emptyResultContainer.getElement().innerHTML = `
        <h3>No Results Found!</h3>
    `;

    // Add to Note section
    noteSection.append(emptyResultContainer.getElement());
}

export default EmptySearchResultContainer;