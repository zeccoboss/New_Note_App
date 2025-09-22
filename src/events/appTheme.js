import selectElements from "../helpers/selectElements.js";

const savedNoteAppTheme = JSON.parse(localStorage.getItem('saved-note-app-theme')) || null;

const app = document.querySelector('#app');

if (savedNoteAppTheme) {
    app.classList.add(savedNoteAppTheme);
}

// Save theme and change themeListTerm content
const storThemeAndChangTerm = (themeListTerm, theme, textContent, eventTarget) => {
    themeListTerm.innerHTML = textContent;

    // Save value to local storage
    localStorage.setItem('saved-note-app-theme', JSON.stringify(theme));
}

function applyTheme(themeBtnContainer, themeListTerm) {
    // 
    themeBtnContainer.addEventListener('click', (e) => {
        const eventTarget = e.target;
        const currentTarget = e.currentTarget;

        const darkThemeBtn = currentTarget.querySelector('.dark_theme_btn');
        const defaultTheme = currentTarget.querySelector('.system_default_theme_btn');
        const lightThemeBtn = currentTarget.querySelector('.light_theme_btn');

        // Check the theme value returned from local storage
        if (eventTarget === darkThemeBtn) {
            app.classList.add("dark_theme");
            app.classList.remove("light_theme");
            app.classList.remove("system_default");

            // Call to save theme to local storage
            storThemeAndChangTerm(themeListTerm,"dark_theme", "Dark theme", eventTarget);
        } else if (eventTarget === defaultTheme) {
            app.classList.add("system_default");
            app.classList.remove("dark_theme");
            app.classList.remove("light_theme");

            // Call to save theme to local storage
            storThemeAndChangTerm(themeListTerm, "system_default", "System efault", eventTarget);
        } else if (eventTarget === lightThemeBtn) {
            app.classList.add("light_theme");
            app.classList.remove("dark_theme");
            app.classList.remove("system_default");

            // Call to save theme to local storage
            storThemeAndChangTerm(themeListTerm, "light_theme", "Light theme", eventTarget);
        } else {
            app.classList.remove("light_theme");
            app.classList.remove("dark_theme");
            app.classList.remove("system_default");
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