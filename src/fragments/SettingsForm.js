import CreateElement from "../utils/CreateElement.js";

const SettingsForm = () => {
    // Create settingsForm Element
    const settingsForm = new CreateElement('form');

    // Set attributes
    settingsForm.setId('settings-form');
    settingsForm.addClass('settings_form');

    settingsForm.getElement().innerHTML = `
		<h2 class="settings_form_heading">Edit details</h2>
		<input type="text" name="user name" id="user-name-input" class="user_name_input settings_form_input" placeholder="Name, (eg.Obang Ezekiel)" autocomplete="on">
		<input type="text" name="nickname" id="user-nicname" class="user_nicname settings_form_input" placeholder="Nick name, (eg. zecco)" autocomplete="on">
		<input type="email" name="email" id="email-input" class="email_input settings_form_input" placeholder="Email, (eg. youremail.email.com)" autocomplete="on">
		<textarea name="hobbies" cols="30" rows="5" id="hobbies-textarea" class="hobbies_textarea settings_form_textarea" placeholder="Enter hobbies"></textarea>

		<div class="settings_form_btn_container">
			<button type="button" id="settings-form-cancle-btn" class="settings_form_cancle_btn settings_form_btn">Cancle</button>
			<button type="submit" id="settings-form-submit-btn" class="settings_form_submit_btn settings_form_btn">Done</button>
        </div>
    `;
    
    return settingsForm.getElement();
}

export default SettingsForm;