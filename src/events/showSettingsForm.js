import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Instantiate Class 
const manageUserData_ShowUser = new GetLocalStorageData('UserData', 'showSettingsForm', 'zecco_note_app-User');

const showSettingsForm = async (e) => {
    // Select element from settings section
    const settingsForm = document.querySelector('#settings-form');
    const settingsSection = settingsForm.parentNode;
    const userNameInput = settingsSection.querySelector('.user_name_input');
    const userNickname = settingsSection.querySelector('.user_nicname');
    const emailInput = settingsSection.querySelector('.email_input');
    const hobbiesTextarea = settingsSection.querySelector('.hobbies_textarea');
    const profileCard = document.querySelector('.profile_card');
    const dropDownRightAngleSvg = document.querySelector('.drop_down_right_angle_svg');

    // Get user data
    const userData = await manageUserData_ShowUser.getUserData(); 
    // Clear form field
    userNameInput.value = '';
    userNickname.value = '';
    emailInput.value = '';
    hobbiesTextarea.value = '';

    // Set Form fields to the user data
    userNameInput.value = userData.userName;
    userNickname.value = userData.nickname;
    emailInput.value = userData.email;
    hobbiesTextarea.value = userData.hobbies;
    

    // Toggle classes for accesibility
    profileCard.classList.remove('full_profile_card'); // Remove to set profile card to initial heigt 
    dropDownRightAngleSvg.classList.toggle('rotate_drop_down_svg'); 
    settingsForm.classList.toggle('show_settings_form');

    // Make the form visible
    settingsForm.scrollIntoView({
        "behavior": "smooth",
        "inline": "start"
    });
}

export default showSettingsForm;