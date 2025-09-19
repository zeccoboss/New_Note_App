import navigateHome from "../helpers/navigateHome.js";

const returnHome = () => {
    const returnButton = document.querySelector('.return_button');
    returnButton.addEventListener('click', navigateHome);
}

export default returnHome;