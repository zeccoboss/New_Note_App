// Import classes
import setElementAttributes from "../utils/SetElementAttributes.js";

// img path
const profileImg = '../../public/img/favicon.png';


const ProfileCard = (dropDownRightAngleSvg, editProfilePencilSvg) => {
	// Create HTML elements
	const profileCard = document.createElement('div');
	const profileWrapper = document.createElement('div');
	const userDetails = document.createElement('div');

	// Initiate instance of SetElementAttributes class
	const ProfileCardAttributes = new setElementAttributes(profileCard);
	const ProfileWrapperAttributes = new setElementAttributes(profileWrapper);
	const UserDetailsAttributes = new setElementAttributes(userDetails);

	// Set attributes 
	ProfileCardAttributes.setId('profile-card');
	ProfileCardAttributes.addClass('profile_card');

	ProfileWrapperAttributes.setId('profile-wrapper');
	ProfileWrapperAttributes.addClass('profile_wrapper');

	UserDetailsAttributes.setId('user-details');
	UserDetailsAttributes.addClass('user_details');

	// Check if SVG's are passed
	if (!dropDownRightAngleSvg && !editProfilePencilSvg) {
		console.error("No SVG's passed!");
		return
	}

	// Set innerHTML
	profileWrapper.innerHTML = `
		<figure id="profile-img-wrapper" class="profile_img_wrapper">
			<img src="${profileImg}" class="profile_img" loading="lazy" alt="Profile image" width="100" height="100">
			<figcaption class="profile_img_caption">Profile caption</figcaption>
		</figure>

		<div class="profile_card_wrapper">
			<h class="profile_nick_name">ZECCO</h>
		</div>
	`;

	userDetails.innerHTML = `
		<div class="user_details_wrapper">
			<h2 class="user_id" id="user-id">User ID: 
				<span class="id_holder" id="id-holder"> 00123</span>
			</h2>

			<button id="drop-profile-card-btn" class="drop_profile_card_btn profile_btn">
				${dropDownRightAngleSvg}
			</button>
		</div>

		<h4 class="user_name" id="user-name">Name: <span class="name_holder" id="name_-holder"> ZECCO BOSS</span></h4>
		<p class="user_email" id="user-email">Email: <span class="email_holder" id="email-holder"> zeccoboss@hotmail.com</span></p>
		<p class="user_hobbies">Hobby/Hobbies: <span class="hobbies_holder" id="hobbies-holder">Coding, Gaming, Playing...</span></p>
		
		<div class="edit_btn_coontainer">
			<button id="edit-profile-card-btn" class="edit_profile_card_btn profile_btn"> 
				${editProfilePencilSvg}
				Edit profile
			</button>
		</div>
	`;

	// Append to profileCard
	profileCard.append(profileWrapper, userDetails);

	// Return profileCard element
	return profileCard
}

export default ProfileCard;