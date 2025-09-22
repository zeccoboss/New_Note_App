// Import classes 
import SetElementAttributes from '../utils/SetElementAttributes.js';

// Import fragments 
import HeaderNav from '../fragments/HeaderNav.js';

const Header = () => {
    // Create elements 
    const header = document.createElement('header');
    const headerSearchSection = document.createElement('div');
    
    // Set the innerHTML
    headerSearchSection.innerHTML = `
		<h1 class="header_nav_heading" id="header-nav-heading">Notes</h1>
		<input type="search" name="" id="search-inpit" class="search_input" aria-label="search notes" autocomplete="on" placeholder="Search notes....">
    `;
    
    // initiate instance of SetElementAttributes class
    const HeaderAttributes = new SetElementAttributes(header);
    const HeaderSearchSectionAttributes = new SetElementAttributes(headerSearchSection);
    
    // Set attributes 
    HeaderAttributes.setId('header');
    HeaderAttributes.addClass('header');
    
    HeaderSearchSectionAttributes.addClass('search_container');
    
    // Append elements to header
    header.append(
		HeaderNav(),
		headerSearchSection
    );

    // Return header element
    return header;
}

export default Header;