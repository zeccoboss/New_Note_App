import Header from './src/components/Header.js';
import InnerContainer from './src/components/InnerContainer.js';
import Footer from './src/components/Footer.js';
import initApp from './src/utils/initApp.js';
const renderApp = () => {
  const app = document.querySelector('#app');
  
  app.append(
    Header(),
    InnerContainer(),
    Footer()
  );
  
  initApp();
  
}

renderApp();