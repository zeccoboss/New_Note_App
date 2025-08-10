// Import classes 
import SetElementAttributes from '/src/utils/setElementAttributes.js';

//Import fragments 
import ReturnNavContainer from '/src/fragments/ReturnNavContainer.js';
import NavContent from '/src/fragments/NavContent.js';

const HeaderNav = () => {
  const headerNav = document.createElement('nav');
  const headerNavList = document.createElement('ul');
  
  // initiate instance of SetElementAttributes class
  const HeaderNavAttributes = new SetElementAttributes(headerNav);
  const HeaderNavListAttributes = new SetElementAttributes(headerNavList);
  
  // Set attributes 
  HeaderNavAttributes.setId('header-nav');
  HeaderNavAttributes.addClass('header_nav');
  
  HeaderNavListAttributes.setId('header-nav-list');
  HeaderNavListAttributes.addClass('header_nav_list');
  
  headerNavList.append(
    ReturnNavContainer(),
    NavContent()
  );
  
  headerNav.appendChild(headerNavList);
  
  return headerNav;
}

export default HeaderNav;