// Import classes 
import SetElementAttributes from '../utils/setElementAttributes.js';

const NoteCard = ({id, title, content, date}) => {
  const noteCard = document.createElement('div');
  const noteTitle = document.createElement('h5');
  const noteContent = document.createElement('p');
  const noteDate = document.createElement('small');

  // Initiate instance of SetElementAttributes
  const NoteCardAttributes = new SetElementAttributes(noteCard);
  const NoteTitleAttributes = new SetElementAttributes(noteTitle);
  const NoteContentAttributes = new SetElementAttributes(noteContent);
  const NoteDateAttributes = new SetElementAttributes(noteDate);

  // Set NoteCard attributes 
  NoteCardAttributes.setId(id);
  NoteCardAttributes.addClass('note_card');
  
    // Set noteTitle attributes 
  NoteTitleAttributes.addClass('note_title');
  
    // Set noteContent attributes 
  NoteContentAttributes.addClass('note_content');
  
    // Set noteDate attributes 
  NoteDateAttributes.addClass('note_date');
  
  // Set elements textContent
  noteTitle.textContent = title;
  noteContent.textContent = content;
  noteDate.textContent = date;

  // Set innerHTML
  noteCard.append(noteTitle, noteContent, noteDate)
  // NoteContainerAttributes.showElement()
  // Return noteContainer element 
  return noteCard;
}

export default NoteCard;