const closeSettingsForm = (e) => {
    const settingsForm = document.querySelector('#settings-form');

    settingsForm.classList.remove('show_settings_form');
}

export default closeSettingsForm;