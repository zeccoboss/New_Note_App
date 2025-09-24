const showSettingsForm = (e) => {
    const settingsForm = document.querySelector('#settings-form');

    const profileCard = document.querySelector('.profile_card');
    const dropDownRightAngleSvg = document.querySelector('.drop_down_right_angle_svg');

    // Toggle classes for accesibility
    profileCard.classList.remove('full_profile_card'); // Remove to set profile card to initial heigt 
    dropDownRightAngleSvg.classList.toggle('rotate_drop_down_svg'); 
    settingsForm.classList.toggle('show_settings_form');

    settingsForm.scrollIntoView({
        "behavior": "smooth",
        "inline": "start"
    });
}

export default showSettingsForm;