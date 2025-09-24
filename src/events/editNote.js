import getLocalStorageNoteData from "../../service/localSorageData.js";
import hideButtons from "../helpers/hideButtons.js";

const editNote = async (noteSection) => {
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));

    //
    noteCards.forEach(card => {
        card.addEventListener('click', async (e) => {
                const storedData = await getLocalStorageNoteData();

            // console.log(e.target);
            let cardId = e.currentTarget.id;
            let foundData = storedData.find(data => data.id === cardId);
            console.log(foundData);


    // Select element from DOM
    const returnBtn = document.querySelector('.return_button');
    const main = noteSection.parentNode;
    const formSection = main.querySelector('.form_section');
    const titleInput = formSection.querySelector('.note_title_input'); 
    const noteTextArea = formSection.querySelector('.note_textarea'); 
    const timeElement = formSection.querySelector('.form_time_element');

            
            // 
            formSection.classList.add('active_section');
            noteSection.classList.remove('active_section');
            returnBtn.classList.add('show_return_button');
            returnBtn.classList.add('edit');

            // 
            titleInput.value = foundData.title;
            noteTextArea.value = foundData.content;
            timeElement.innerHTML = `${foundData.date}`;

            // Hide all buttons
            hideButtons();
        });
    });
}

export default editNote;