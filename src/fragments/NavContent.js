// Import classes 
import SetElementAttributes from '/src/utils/setElementAttributes.js';

const NavContent = () => {
  const navContent = document.createElement('div');
  
  
  // initiate instance of SetElementAttributes class
  const NavContentAttributes = new SetElementAttributes(navContent);
  
  // Set attributes 
  NavContentAttributes.setId('nav-content');
  NavContentAttributes.addClass('nav_content');
  
  navContent.innerHTML = `
    <li class="nav_list_items">
      <button class="button add_note">
      +
      </button>
    </li>
  
    <li class="nav_list_items more_action_container">
      <div class="">
        <button class="button show_more_action_button" id="show-more-action-button">
          <span>More</span>
          <span id="action-flow" class="">&gt</span>
        </button>
      </div>
      
      <div class="more_action_content">
        <ul class="more_action_list" id="more-action-list">
          <li class="more_action_button" id="refresh-action-button">Refresh</li>
          <li class="more_action_button">Settings</li>
          <li class="more_action_button">Select</li>
          <li class="more_action_button">Exit</li>
        </ul>
      </div>
    </li>
  `;
  
  return navContent;
}

export default NavContent;