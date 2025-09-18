// Import fragments 
import Note from '../fragments/NoteCard.js';
import NoteSection from '../fragments/NoteSection.js';
import SettingsSection from '../fragments/SettingsSection.js';

// Import class
import SetElementAttributes from '../utils/setElementAttributes.js';

// Import service handler 
import { getNoteData } from '../../service/notesService.js';
import FormSection from '../fragments/FormSection.js';


const Main = async () => {
  // Create element
  const main = document.createElement('main');
  
  // Initiate instance of SetElementAttributes class
  const MainAttributes = new SetElementAttributes(main);
  
  // Set attributes 
  MainAttributes.setId('main');
  MainAttributes.addClass('main');
  
  const noteSection = await NoteSection();
    
  main.append(noteSection, SettingsSection(), FormSection());
  
  return main;
}

export default Main;