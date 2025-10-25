// Import Classes
import { dropDownRightAngleSvg } from "../assets/svg/svg-icons.js";
import setElementAttributes from "../utils/SetElementAttributes.js";

const ThemeCard = () => {
    // Create themeCard element
	const themeCard = document.createElement('div');
	
	// Initiate instance of SetElementAttributes class
	const ThemeCardAttributes = new setElementAttributes(themeCard);
		
	// Set attributes 
	ThemeCardAttributes.setId('theme-card');
	ThemeCardAttributes.addClass('theme_card');

	themeCard.innerHTML = `
		<label for="app-theme-list">App theme</label>

		<div id="app-theme-list" class="app_theme_list">
			<button id="theme-list-toggler" class="theme_list_toggler"><span class="theme_list_term">Light theme</span> ${dropDownRightAngleSvg}</button>

			<div class="theme_btn_container">
				<button id="dark-theme-btn" class="app_theme_btn dark_theme_btn">Dark theme</button>
				<button id="system-default-btn" class="app_theme_btn system_default_theme_btn">System default</button>
				<button id="light-theme-btn" class="app_theme_btn light_theme_btn">Light theme</button>
			</div>
		</div>
	`;

	//return themeCard element
    return themeCard;
}

export default ThemeCard;