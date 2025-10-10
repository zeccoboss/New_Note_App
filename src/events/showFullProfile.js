function showFullProfile(e) {
    // Select element from DOM
    const profileCard = document.querySelector('.profile_card');
    const dropDownRightAngleSvg = document.querySelector('.drop_down_right_angle_svg');
    const settingsForm = document.querySelector('#settings-form');

    // Close settings form if active
    if (settingsForm.classList.contains('show_settings_form')) {
        settingsForm.classList.remove('show_settings_form');
    }

    // profileCard.addEventListener('click', (e) => e.preventDefault)

    // Toggle classes for accesibility
    profileCard.classList.toggle('full_profile_card');
    dropDownRightAngleSvg.classList.toggle('rotate_drop_down_svg');
}

export default showFullProfile;