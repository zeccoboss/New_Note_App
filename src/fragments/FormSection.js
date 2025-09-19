// Import class
import SetElementAttributes from '../utils/setElementAttributes.js';

// Import fragments 
import NoteForm from './NoteForm.js';

const FormSection = () => {
    const formSection = document.createElement('section');
    const formSectionHeading = document.createElement('h3');
    
    // initiate instance of SetElementAttributes class
    const FormSectionAttributes = new SetElementAttributes(formSection);
    const FormSectionHeading = new SetElementAttributes(formSectionHeading);

    // Set attributes 
    FormSectionAttributes.setId('form-section');
    FormSectionAttributes.addClass('form_section', 'section');

    FormSectionHeading.setId('form-section-heading');
    FormSectionHeading.addClass('form_section_heading');

    formSectionHeading.innerText = 'Enter Notes';
    formSectionHeading.style.paddingLeft = '0.5rem';
    
    formSection.append(
        NoteForm()
    );
    
    // Return formSection element 
    return formSection;
}

// Export Aside
export default FormSection;