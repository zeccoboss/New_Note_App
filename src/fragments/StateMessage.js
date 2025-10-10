// Import utils
import CreateElement from "../utils/CreateElement.js";

// Declare global variables
let intervalId;

const StateMessage = (section, message="No message passed") => {
	// Create element
	const StateMessage = new CreateElement('div');	
	const StateMessageTimer = new CreateElement('span');
	const StateMessageContent = new CreateElement('small');
	const StateMessageBtn = new CreateElement('button');

	// Set attributes
	StateMessage.setId("state-message");
	StateMessage.addClass('state_message', 'show_state_message');

	StateMessageTimer.setId('state-message-timer');
	StateMessageTimer.addClass('state_message_timer');

	StateMessageContent.setId('state-message-content');
	StateMessageContent.addClass('state_message_content');

	StateMessageBtn.setId('state-message-btn');
	StateMessageBtn.addClass('state_message_btn');

	// Declare local variable
	let countDown = 3;

	// Check if section is passed so code dosen't beake
	if (section) {
		// Select element from DOM
		const main = section.parentElement;

		// Set innerHTML
		StateMessageContent.setInnerHTML(message);
		StateMessageBtn.setInnerHTML('Close');
		StateMessageTimer.setInnerText(`0${countDown}`);


		// // Add a timer to clear StateMessage 
		// intervalId = setInterval(() => {
		// 	if (countDown > 0 && countDown <= 10) {
		// 		countDown--;
		// 		StateMessageTimer.setInnerHTML(`${countDown.toString().padStart(2, 0)}`);
		// 	} else {
		// 		// Get all StateMessage from DOM and clear it off
		// 		const sms = Array.from(main.querySelectorAll('.state_message'));
		// 		sms.length > 0
		// 		? sms.forEach(el => {
		// 			el.remove();
		// 			el.style.display = 'none';
		// 		}) : console.warn('No state message to clear!');

		// 		// Reset countdown value
		// 		countDown = 3;

		// 		// Clear the time interval function
		// 		clearInterval(intervalId);
		// 		// StateMessageBtn.disableElement(false);
		// 	}
		// }, 1000);

		// Append childtren
		StateMessageBtn.getElement().append(StateMessageTimer.getElement()); // Addpenmt the timer to cancle button

		StateMessage.getElement().append(
			StateMessageContent.getElement(),
			StateMessageBtn.getElement()
		);

		// Add listener to cancle button clear 
		StateMessageBtn.getElement().addEventListener('click', (e) => {
			StateMessage.removeClass('show_state_message');
			StateMessage.getElement().remove();
		});

		// Append to provided function
		main.append(StateMessage.getElement());

	} else {
		return console.error('Section not passed to StateMessage ftagment'); // Break and give an eror mesaage
	}

	// Return StateMessage 
	return StateMessage.getElement();
}

export default StateMessage;