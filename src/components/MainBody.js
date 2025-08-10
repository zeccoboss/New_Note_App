// Import fragments 
import Note from '/src/fragments/NoteCard.js';
import NoteSection from '/src/fragments/NoteSection.js';
import SettingsSection from '/src/fragments/SettingsSection.js';

// Import class
import SetElementAttributes from '/src/utils/setElementAttributes.js';

// Import service handler 
import { getNoteData } from '/service/notesService.js';


const Main = async () => {
  // Create element
  const main = document.createElement('main');
  
  // Initiate instance of SetElementAttributes class
  const MainAttributes = new SetElementAttributes(main);
  
  // Set attributes 
  MainAttributes.setId('main');
  MainAttributes.addClass('main', 'active_section');
  
  const noteSection = await NoteSection();
  
  main.append(noteSection, SettingsSection());
  
  return main;
}

export default Main;