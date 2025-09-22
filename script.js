import selectElements from "../helpers/selectElements.js";

let cardSelectionMood = false;
let openedSelection = 0;

console.log("Opened selection mood: ", openedSelection);

// Highligt all notes
const highlightCard = async (main, noteSection) => {
    // Select element from DOM
    const selectActionBtn = document.querySelector('#select-action-button'); 
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));
    const selectAllBtn = document.querySelector('#select-all-btn');

    // Add event listener to selectActionBtn
    selectActionBtn.addEventListener('click', (e) => {

        // Turn on selection mood for state tracking
        cardSelectionMood = true;

        // Track selectoion mood 
        openedSelection < 1 ? openedSelection++ : openedSelection--;
        console.log("Opened selection mood: ", openedSelection);

        // Ceck selection mood if on loop troug cards and add class to igtligt
        if (cardSelectionMood) {
            noteCards.forEach(noteCard => {
                const cardCheckbox = noteCard.querySelector('.note_checkbox');
                noteCard.classList.add('highlight_note_card');
                cardCheckbox.classList.add('show_note_checkbox');
            });
        }

        // Select card beavour
        if (openedSelection === 0) {
            cardSelectionMood = true;
            selectCard(noteSection, cardSelectionMood);
            console.log('Selection Off...');
        } else if (openedSelection === 1) {
            cardSelectionMood = false;
            selectCard(noteSection, cardSelectionMood);
            console.log('Selection On...');
        }
    });

    // Call to keek select all note card functon on wait
    selectAllCard(noteSection, noteCards, selectAllBtn);
}

// Function to select all note card
function selectAllCard(noteSection, noteCards, selectAllBtn) {
    cardSelectionMood = false;
    console.log(cardSelectionMood);
    

    // Check if selection moode is on then add event listner
    cardSelectionMood ?
        null : selectAllBtn.addEventListener('click', (e) => {
            // Get the tag that triggared the event
            let currentTarget = e.currentTarget;
            
            // Track selectoion mood 
            openedSelection < 1 ? openedSelection++ : openedSelection--;
            console.log("Opened selection mood: ", openedSelection);

            noteCards.forEach(card => {
                const cardCheckbox = card.querySelector('.note_checkbox');
                card.classList.toggle('highlight_note_card');
                cardCheckbox.classList.toggle('show_note_checkbox');
                cardCheckbox.checked = !cardCheckbox.checked ? true : false;
			});

            // Turn off selection mood for state tracking
            cardSelectionMood = false;

            // Select card beavour
            if (openedSelection === 0) {
                cardSelectionMood = false;
                selectCard(noteSection, cardSelectionMood);
                console.log('Selection Off...');
            } else if (openedSelection === 1) {
                cardSelectionMood = true;
                selectCard(noteSection, cardSelectionMood);
                console.log('Selection On...');
            }
        });
        
    // selectCard(noteSection, cardSelectionMood);

    // Log selection mood state
    console.log('Selection moode: ', cardSelectionMood);
}
 
// Function to select all note card
function selectCard(noteSection, mood) {
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));

    // Check if selection moode is on then add event listner
    mood ? noteCards.forEach(card => { openedSelection === 0 ? 
        currentTarget.removeEventListener('click', selectAndCheckCard) 
        : card.addEventListener('click', selectAndCheckCard);
    }) : null;
}

const selectAndCheckCard = async (e) => {
    let currentTarget = e.currentTarget;    
    const noteSection = currentTarget.parentNode;
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));

    noteCards.forEach(card => {})
    if (openedSelection === 1) {
        let currentTarget = e.currentTarget;
        const cardCheckbox = currentTarget.querySelector('.note_checkbox');
        cardCheckbox.checked = !cardCheckbox.checked ? true : false;
        console.log(openedSelection);
        console.log('');
    }
}

export default highlightCard;
export { selectAndCheckCard }

e.preventDefault();
    const { titleInput, noteTextArea } = selectElements();
    const savedNoteData = await getLocalStorageNoteData();
    const getRandomCharacters = randomCharGenerator(6);
    const { currentTime } = NoteForm();

    let title = titleInput.value.trim().toLowerCase();
	let note = noteTextArea.value.trim().toLowerCase();

    let newNoteData = {
        id: getRandomCharacters,
        title: title,
        content: note,
        date: currentTime
    }

    const updatedData = [...savedNoteData, newNoteData];

    console.log(updatedData);
    

    console.log([].push('Zecco'));

    console.log([...['zecco', 'boss']]);
    
    

    if (title && note) {
        // localStorage.setItem('zecco_note_app', JSON.stringify(updatedData));
        localStorage.setItem('note_app', JSON.stringify(updatedData));
    }