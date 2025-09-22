// Import classes 
import SetElementAttributes from '../utils/SetElementAttributes.js';

// Import SVG's
import { addNoteSvg, checkOneSvg, exitSvg, gearSvg, menuSvg, refreshSvg, rightAngleSvg } from '../assets/svg/svg-icons.js';

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
        ${addNoteSvg}
      </button>
    </li>
  
    <li class="nav_list_items more_action_container">
        <div class="">
            <button class="button show_more_action_button" id="show-more-action-button">
            <span>${menuSvg}</span>
            <span id="action-flow" class="">${rightAngleSvg}</span>
            </button>
        </div>
        
        <div class="more_action_content">
            <ul class="more_action_list" id="more-action-list"> 
                <li class="more_action_button" id="refresh-action-button">
                    ${refreshSvg}
                    <span class="more_action_span">Refresh</span>
                </li>

                <li class="more_action_button" id="settings-action-button">
                    ${gearSvg}
                    <span class="more_action_span">Settings</span>
                </li>

                <li class="more_action_button" id="select-action-button">
                    ${checkOneSvg}
                    <span class="more_action_span">Select</span>
                </li>

                <li class="more_action_button" id="trash-action-button">
                    ${'T'}
                    <span class="more_action_span">Trash</span>
                </li>

                <li class="more_action_button" id="exit-action-button">
                    ${exitSvg}
                    <span class="more_action_span">Exit</span>
                </li> 
            </ul>
        </div>
    </li>
  `;
  
  return navContent;
}

export default NavContent;