// Import helpers
import navigateSettings from "../helpers/navigateSettings.js";

const moreActionNavigation = () => {
    // Select DOM elements 
    const moreActionTogller = document.querySelector('#show-more-action-button');
	const moreActionList = document.querySelector('#more-action-list');
	const moreActionFlow = document.querySelector('#action-flow');
	
    const refreshActionBtn = moreActionList.querySelector('#refresh-action-button');
    const settingsActionBtn = moreActionList.querySelector('#settings-action-button');
    const selectActionBtn = moreActionList.querySelector('#select-action-button');
    const exitActionBtn = moreActionList.querySelector('#exit-action-button');

    // Refresh page.
    refreshActionBtn.addEventListener('click', (e) => { 
        window.location.reload();
    });

    // Open settings.
    settingsActionBtn.addEventListener('click', (e) => { 
        navigateSettings();
        moreActionList.classList.toggle('show_more_action_list');
		moreActionFlow.classList.toggle('action_flow');
    });

    // Select a note card.
    selectActionBtn.addEventListener('click', (e) => { 
        // Working It's event n another module
    });

    // Exit app.
    exitActionBtn.addEventListener('click', (e) => { 
        window.close();
    });
}

export default moreActionNavigation;