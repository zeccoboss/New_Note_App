// Import class
import SetElementAttributes from '../utils/SetElementAttributes.js';

import NoteForm from '../fragments/NoteForm.js';

const Aside = () => {
  const aside = document.createElement('aside');
  const asideHeading = document.createElement('h3');
  
  // initiate instance of SetElementAttributes class
  const AsideAttributes = new SetElementAttributes(aside);
  const AsideHeadingAttributes = new SetElementAttributes(asideHeading);

  // Set attributes 
  AsideAttributes.setId('aside');
  AsideAttributes.addClass('aside');
  
  AsideHeadingAttributes.setId('aside-heading');
  AsideHeadingAttributes.addClass('aside_heading');

  asideHeading.innerText = 'Enter Notes';
  asideHeading.style.paddingLeft = '0.5rem';
  
  aside.append(
    NoteForm()
  );
  
  // Display form element 
  // AsideAttributes.showElement();
  
  // Return form element 
  return aside;
}

// Export Aside
export default Aside;