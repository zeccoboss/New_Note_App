// Import components
import Header from './src/components/Header.js';
import InnerContainer from './src/components/InnerContainer.js';
import Footer from './src/components/Footer.js';
import initApp from './src/utils/initApp.js';

// Create a function to render app and call the init function
const renderApp = () => {
    const app = document.querySelector('#app');
    
    app.append(
        Header(),
        InnerContainer(),
        Footer()
    );
    
    initApp();
};

renderApp();