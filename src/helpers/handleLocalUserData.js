// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Import utils
import CreateElement from "../utils/CreateElement.js";

// Import frgments
import StateMessage from "../fragments/StateMessage.js";

// Import helpes
import randomCharGenerator from "./generateRandomChar.js";

// Instantiate Class 
const manageUserData_CreateUser = new GetLocalStorageData('UserData', 'handleLocalUserData', 'zecco_note_app-User');

// validate user data
const localUserData = async () => {
    // Get user data from local storage
    const userData = await manageUserData_CreateUser.getUserData();
    
    // Create rough data that will be rendered and saved to local storage 
    const roughData = {
        id: `${randomCharGenerator(10)}`,
        nickname: 'Unknown.',
        userName: 'Not provided.',
        email: 'youremail@gmail.com.',
        hobbies: 'None.'
    }

    // Check if no user data in local storage create a rough data and save
    if (!userData) {
        // Save rough data to local storage
        manageUserData_CreateUser.saveUserData(roughData);

        // Return rough data to update the DOM
        return roughData;
    } else {
        // Return user data when found
        return userData;
    }
}

// Function that hold logic to manage new user
const handleLocalUserData = async (settingsSection) => {
    // Access Stored User Data
    const userData = await localUserData();

    // Select element from settings section
    const settingsForm = settingsSection.querySelector('#settings-form');
    const userNameInput = settingsSection.querySelector('.user_name_input');
    const userNickname = settingsSection.querySelector('.user_nicname');
    const emailInput = settingsSection.querySelector('.email_input');
    const hobbiesTextarea = settingsSection.querySelector('.hobbies_textarea');
    const settingsFormBtnContainer = settingsSection.querySelector('.settings_form_btn_container');
    const settingsFormSubmitBtn = settingsSection.querySelector('.settings_form_submit_btn');

    const profileNickName = settingsSection.querySelector('.profile_nick_name');
    const userIdHolder = settingsSection.querySelector('.id_holder');
    const userNameHolder = settingsSection.querySelector('.name_holder');
    const userEmailHolder = settingsSection.querySelector('.email_holder');
    const userHobbiesHolder = settingsSection.querySelector('.hobbies_holder');

    // Create element to pass in validation message
    const errorElement = new CreateElement('span');
    errorElement.setId('error-element');
    errorElement.addClass('error_element');
    
    // Event to save user data to local storage
    settingsFormSubmitBtn.addEventListener('click', (e) => {
        // Stop page refresh on form submit
        e.preventDefault();

        // Retrive form data
        const userName = userNameInput.value.trim();
        const nickname = userNickname.value.trim();
        const email = emailInput.value.trim();
        const hobbies = hobbiesTextarea.value.trim();

        // Clear error element and add new message
        errorElement.setInnerHTML('');

        // Pass the error to DOM
        const errorPaser = (message) => {
            // Pass the error message
            errorElement.setInnerText(message);
            console.warn(message); // Log message to console as warning

            // Append to DOM in settings form for validation 
            settingsForm.insertBefore(errorElement.getElement(), settingsFormBtnContainer);
        }

        // Check form value and validate form
        if (userName && nickname && email && hobbies) {
            // Create a new user object
            const data = { id: userData.id, userName, nickname, email, hobbies }

            // Save data to local storage
            manageUserData_CreateUser.saveUserData(data);

            // Pass state messge
            StateMessage(settingsSection, 'Updated user data');

            let savedData =  manageUserData_CreateUser.getUserData();

            // Call to render updated user details
            renderUserDetails(savedData);
        } else if (!userName) {
            // Pass error message and pause execution
           return errorPaser('Username required!');
        } else if (!nickname) {
            // Pass error message and pause execution
           return errorPaser('User nickname required!');
        } else if (!email) {
            // Pass error message and pause execution
           return errorPaser('User email required!');
        } else if (!hobbies) {
            // Pass error message and pause execution
           return errorPaser('Hobby/Hobbies are required!');
        } 
    
        if (!email.includes('@')) {
            // Pass error message and pause execution
           return errorPaser('Invalid email address!');
        } else if (userName.length < 3) {
            // Pass error message and pause execution
           return errorPaser('User name must be more than 3 characters!');
        } else if (nickname.length < 3) {
            // Pass error message and pause execution
           return errorPaser('Nickname must be more than 3 characters!');
        }

        // Clear form field when data has been retrived
        userNameInput.value = '';
        userNickname.value = '';
        emailInput.value = '';
        hobbiesTextarea.value = '';
        // Close settings form if active
        settingsForm.classList.remove('show_settings_form');
    });

    // Render user details to DOM
    async function renderUserDetails(data) {
        // Have to await if the data passed is asyn so code Don't break
        let passedData = await data;

        // Update DOM with saved value
        profileNickName.innerHTML = passedData.nickname;
        userIdHolder.innerHTML = passedData.id;
        userNameHolder.innerHTML = passedData.userName;
        userEmailHolder.innerHTML = passedData.email;
        userHobbiesHolder.innerHTML = passedData.hobbies;
    }

    // Call to render user details with either rough or valid user data on page load
    renderUserDetails(userData);
}

export default handleLocalUserData;