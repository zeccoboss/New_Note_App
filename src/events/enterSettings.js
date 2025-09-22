// Import helpers
import navigateSettings from "../helpers/navigateSettings.js";
import selectElements from "../helpers/selectElements.js";

const enterSettings = () => {
    const { settingsBtn } = selectElements();

    settingsBtn.addEventListener('click', navigateSettings);
}

export default enterSettings;