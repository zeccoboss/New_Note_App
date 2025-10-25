// Import services
import GetLocalStorageData from "../../service/GetLocalStorageData.js";

// Instantiate Class 
const ManageTheme_AppTheme = new GetLocalStorageData('AppTheme', 'appTheme', 'zecco_note_app-Theme');

// const savedNoteAppTheme = JSON.parse(localStorage.getItem('zecco_note_app-Theme')) || null;
const savedNoteAppTheme = ManageTheme_AppTheme.getAppTheme();

console.log(savedNoteAppTheme);


// Select element from DOM
const app = document.querySelector('#app');4

// Global variable 
let isFirstPageLoad = false;

// Get value on system theme
const darkThemeValue = window.matchMedia("(prefers-color-scheme: dark)");

// Remove class and leave those that applies for dark theme
const useDarkTheme = () => {
	app.classList.add("dark_theme");
	app.classList.remove("light_theme");
	app.classList.remove("system_default");
}

// Remove class and leave those that applies for light theme
const useLightTheme = () => {
	app.classList.add("light_theme");
	app.classList.remove("dark_theme");
	app.classList.remove("system_default");
}

const clearAllThem = () => {
	app.classList.remove("light_theme");
	app.classList.remove("dark_theme");
	app.classList.remove("system_default");
}

// set default theme 
function defaultTheme(themeBtnContainer, themeListTerm, themeValue) {
	// Select element 
	const darkThemeBtn = themeBtnContainer.querySelector('.dark_theme_btn');
	const defaultThemeBtn = themeBtnContainer.querySelector('.system_default_theme_btn');
	const lightThemeBtn = themeBtnContainer.querySelector('.light_theme_btn');

    // Check and apply saved Theme on page load
    if (savedNoteAppTheme  && savedNoteAppTheme === 'system_default' && !isFirstPageLoad) {
        if (darkThemeValue.matches) {
            useDarkTheme();

            storeThemeAndChangTerm(themeListTerm, "system_default", "System default", defaultThemeBtn);
        } else if (!darkThemeValue.matches) {
            useLightTheme();

            storeThemeAndChangTerm(themeListTerm, "system_default", "System default", defaultThemeBtn);
        }
        //
        isFirstPageLoad = true;
    } else if (savedNoteAppTheme && !isFirstPageLoad) {
        //
        isFirstPageLoad = true;
        app.classList.add(savedNoteAppTheme);
    }

    // Add event listener
	darkThemeValue.addEventListener('change', (e) => {
		if (e.matches) {
			useDarkTheme()

			storeThemeAndChangTerm(themeListTerm, "system_default", "System default", defaultThemeBtn);
		} else {
			useLightTheme();

			storeThemeAndChangTerm(themeListTerm, "system_default", "System default", defaultThemeBtn);
		}
	});

	if (themeValue && darkThemeValue.matches) {
		useDarkTheme();

		storeThemeAndChangTerm(themeListTerm, "system_default", "System default", defaultThemeBtn);
	} else if (themeValue && !darkThemeValue.matches) {
		useLightTheme();

		storeThemeAndChangTerm(themeListTerm, "system_default", "System default", defaultThemeBtn);
	}
}

// Save theme and change themeListTerm content
const storeThemeAndChangTerm = (themeListTerm, theme, textContent) => {
	themeListTerm.innerHTML = textContent;

	// Save value to local storage
	ManageTheme_AppTheme.saveAppTheme(theme);
}

function applyTheme(themeBtnContainer, themeListTerm) {
	// Call to apply default theme
	defaultTheme(themeBtnContainer, themeListTerm);

	// 
	themeBtnContainer.addEventListener('click', (e) => {
		const eventTarget = e.target;
		const currentTarget = e.currentTarget;

		const darkThemeBtn = currentTarget.querySelector('.dark_theme_btn');
		const defaultThemeBtn = currentTarget.querySelector('.system_default_theme_btn');
		const lightThemeBtn = currentTarget.querySelector('.light_theme_btn');

		// Check the theme value returned from local storage
		if (eventTarget === darkThemeBtn) {
			useDarkTheme();

			// Call to save theme to local storage
			storeThemeAndChangTerm(themeListTerm,"dark_theme", "Dark theme", eventTarget);
		} else if (eventTarget === defaultThemeBtn) {
			// 
			defaultTheme(themeBtnContainer, themeListTerm, true)
		} else if (eventTarget === lightThemeBtn) {
			useLightTheme();

			// Call to save theme to local storage
			storeThemeAndChangTerm(themeListTerm, "light_theme", "Light theme", eventTarget);
		} else {
			clearAllThem();
		}
	});

	// Hide themeBtnContainer if active
	document.body.addEventListener('click', (e) => {
		if (themeBtnContainer.classList.contains('show_theme_btn_container') && e.target !== themeBtnContainer) {
			themeBtnContainer.classList.remove('show_theme_btn_container');
		}
	});
}

const appTheme = (e) => {
	// Stop bubble
	e.stopPropagation();

	// Get element
	const dropDownRightAngleSvg = e.currentTarget.querySelector('svg');
	const themeBtnContainer = document.querySelector('.theme_btn_container');
	
	// Toggle classes for accesibility
	dropDownRightAngleSvg.classList.toggle('rotate_drop_down_svg');
	themeBtnContainer.classList.toggle('show_theme_btn_container');
}

export default appTheme;
export { savedNoteAppTheme, applyTheme };