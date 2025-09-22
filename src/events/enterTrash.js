// Import helpers
import navigateTrash from "../helpers/navigateTrash.js";
import selectElements from "../helpers/selectElements.js";

const enterTrash = () => {
    // Get element from selectElement function
    const { trashActionBtn } = selectElements();

    // Add event listener
    trashActionBtn.addEventListener('click', navigateTrash);
}

export default enterTrash;