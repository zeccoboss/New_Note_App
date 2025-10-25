// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

// img path
const profileImg = '../../public/img/favicon.png';

// Import SVG's
import { dropDownRightAngleSvg , editProfilePencilSvg } from "../assets/svg/svg-icons.js";

// Import fragments
import ProfileCard from './ProfileCard.js';
import ThemeCard from './ThemeCard.js';

// Import events
import showFullProfile from '../events/showFullProfile.js';
import SettingsForm from './SettingsForm.js';
import showSettingsForm from '../events/showSettingsForm.js';
import closeSettingsForm from '../events/closeSettingsForm.js';
import appTheme, { applyTheme, savedNoteAppTheme } from '../events/appTheme.js';
import AboutCard from './AboutCard.js';
import handleLocalUserData from '../helpers/handleLocalUserData.js';

const SettingsSection = () => {
	// Create settingsSection element
	const settingsSection = document.createElement('section');

	// Initiate instance of SetElementAttributes class
	const SettingsSectionAttributes = new SetElementAttributes(settingsSection);

	const ThemeCardAttributes = new SetElementAttributes(settingsSection);
		
	// Set attributes 
	SettingsSectionAttributes.setId('settings-section');
	SettingsSectionAttributes.addClass('settings_section', 'section', '');

	// Apend to settingsSection
	settingsSection.append(
		ProfileCard(dropDownRightAngleSvg, editProfilePencilSvg), 
		SettingsForm(),  
		ThemeCard(),
		AboutCard()
	);

	// Select element from settingsSection
    const dropProfileCardBtn = settingsSection.querySelector('.drop_profile_card_btn');
	const editProfileCardBtn = settingsSection.querySelector('#edit-profile-card-btn');
	const settingsFormCancleBtn = settingsSection.querySelector('.settings_form_cancle_btn');
	const themeListToggler = settingsSection.querySelector('#theme-list-toggler');
    const themeBtnContainer = settingsSection.querySelector('.theme_btn_container');
	const themeListTerm = settingsSection.querySelector('.theme_list_term');

	// Add event listeners to child elements
	dropProfileCardBtn.addEventListener('click', showFullProfile);
	editProfileCardBtn.addEventListener('click', showSettingsForm);
	settingsFormCancleBtn.addEventListener('click', closeSettingsForm);

	// Add event lstener to show the theme toggle buttons 
	themeListToggler.addEventListener('click', appTheme) // Switch app theme

	// call the applyTheme function and pass element
	applyTheme(themeBtnContainer, themeListTerm);	

	const themeValue = () => {
		// Check and return correct value
		if (savedNoteAppTheme === 'dark_theme') {
			return "Dark theme";
		} else if (savedNoteAppTheme === "light_theme") {
			return "light theme";
		} else if ("system_default") {
			return "System default";
		}

		return null;
	}

	// themeValue() ? themeListTerm.innerHTML = themeValue() : themeListTerm.innerHTML = "";

	// Used to create a new user or update an active user
	handleLocalUserData(settingsSection);

	// Return settingsSection element
	return settingsSection; 
}

export default SettingsSection;