// Import class
import SetElementAttributes from '../utils/setElementAttributes.js';

const SettingsSection = () => {
  // Create settingsSection element
  const settingsSection = document.createElement('section');

  // Initiate instance of SetElementAttributes class
  const SettingsSectionAttributes = new SetElementAttributes(settingsSection);
  
  // Set attributes 
  SettingsSectionAttributes.setId('settings-section');
  SettingsSectionAttributes.addClass('settings_section');
  
  settingsSection.innerHTML = `
    <h1>Settings</h1>
  `;
  
  return settingsSection;
}

export default SettingsSection;