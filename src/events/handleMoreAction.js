const handleMoreAction = () => {
    // Select DOM elements 
    const moreActionTogller = document.querySelector('#show-more-action-button');
	const moreActionList = document.querySelector('#more-action-list');
	const moreActionFlow = document.querySelector('#action-flow');
	
	// Handle nav drop down 
	moreActionTogller.addEventListener('click', (e) => {
		e.stopPropagation();
		moreActionList.classList.toggle('show_more_action_list');
		moreActionFlow.classList.toggle('action_flow');
		console.log('More action toggled✅');
	});

	// Close list if navlist child element is clicked
	moreActionList.addEventListener('click', (e) => {
		moreActionList.classList.remove('show_more_action_list');
	});

	// close nav if clicked outside when opened 
	document.addEventListener('click', (event) => {
		if (moreActionList.classList.contains('show_more_action_list') && !moreActionList.contains(event.target)) {
		moreActionList.classList.toggle('show_more_action_list');
		moreActionFlow.classList.toggle('action_flow');
		console.log('moreActionList toggled off ❌');
		}
	});
}

export default handleMoreAction;