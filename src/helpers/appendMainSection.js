import Main from '/src/components/MainBody.js';

// Core function
const appendMainSectionToDOM = async () => {
  const mainElement = await Main();
  const innerContainer = document.querySelector('.inner_container')
  
  innerContainer.appendChild(mainElement);
}

export default appendMainSectionToDOM;