import hideButtons from "../helpers/hideButtons.js";
import updateNote from "../helpers/upateNote.js";
import { localNoteData } from "../utils/initApp.js";
let foundData = undefined;

const editNote = async (noteSection) => {
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));

    const editNoteLogic = async (e) => {
        const storedData = await localNoteData;

        let cardId = e.currentTarget.id;
        foundData = storedData.find(data => data.id === cardId);

        // Select element from DOM
        const returnBtn = document.querySelector('.return_button');
        const main = noteSection.parentNode;
        const formSection = main.querySelector('.form_section');
        const titleInput = formSection.querySelector('.note_title_input'); 
        const noteTextArea = formSection.querySelector('.note_textarea'); 
        const timeElement = formSection.querySelector('.form_time_element');
        const saveBtn = formSection.querySelector('.save_button');
        const updateBtn = formSection.querySelector('.update_button');
        
        // 
        formSection.classList.add('active_section');
        noteSection.classList.remove('active_section');
        returnBtn.classList.add('show_return_button');
        returnBtn.classList.add('edit');
        saveBtn.classList.remove('show_note_form_btn');
        updateBtn.classList.add('show_note_form_btn');

        updateBtn.addEventListener('click', updateNote);

        // 
        titleInput.value = foundData.title;
        noteTextArea.value = foundData.content;
        timeElement.innerHTML = `${foundData.date}`;

        // Hide all buttons
        hideButtons();
    }

    //
    noteCards.forEach(card => {
        card.classList.contains('highlight_note_card')
        ? card.removeEventListener('click',editNoteLogic)
        : card.addEventListener('click',editNoteLogic);
    });
}

export default editNote;
export { foundData };