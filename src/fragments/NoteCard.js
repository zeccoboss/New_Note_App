// Import classes 
import SetElementAttributes from '../utils/SetElementAttributes.js';
import CreateElement from "../utils/CreateElement.js";

// Import SVG's
import { unchecBoxkSVG } from '../assets/svg/svg-icons.js';


const NoteCard = ({id, title, content, date}) => {
    const noteCard = document.createElement('div');
    const noteTitle = document.createElement('h4');
    const noteContent = document.createElement('p');
    const noteDate = document.createElement('small');
    const noteCheckBoxBtn = new CreateElement('button');

	noteCheckBoxBtn.setType('checkbox');
    noteCheckBoxBtn.setInnerHTML(`${unchecBoxkSVG}`);
    

    // Initiate instance of SetElementAttributes
    const NoteCardAttributes = new SetElementAttributes(noteCard);
    const NoteTitleAttributes = new SetElementAttributes(noteTitle);
    const NoteContentAttributes = new SetElementAttributes(noteContent);
    const NoteDateAttributes = new SetElementAttributes(noteDate);

    // Set NoteCard attributes 
    NoteCardAttributes.setId(id);
    NoteCardAttributes.addClass('note_card');

    NoteTitleAttributes.addClass('note_title');
    NoteContentAttributes.addClass('note_content');
    NoteDateAttributes.addClass('note_date');

	noteCheckBoxBtn.addClass('note_checkbox_btn');
	noteCheckBoxBtn.setId(`card-btn-${id}`);
    
    // Set elements textContent
    noteTitle.textContent = `${title.substring(0, 16)}...`;
    noteContent.textContent = `${content.slice(0, 41)}...`;
    noteDate.textContent = `${date.substring(0, 25)}...`;

    // Set innerHTML
    noteCard.append(noteTitle, noteContent, noteDate, noteCheckBoxBtn.getElement());

    return noteCard;
}

export default NoteCard;