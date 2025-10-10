// Import SVG's
import {checkboxSVG, unchecBoxkSVG } from "../assets/svg/svg-icons.js";

// Import helpers
import deleteNotes, { handleDeleteNote } from "../helpers/deleteNotes.js";
import editNote from "../helpers/editNote.js";

// Declare global variabls for state tracking
let cardSelectionMood = false;
let openedSelection = 0;
let selectionCount = 0;

// Track selectoion mood function
const trackSelectonMood = () =>  openedSelection < 1 ? openedSelection++ : openedSelection = 0;// Add 1 if value is 0

// Highligt all notes
const highlightCard = async (noteSection, deleteId) => {    
    // Select element from DOM
    const selectActionBtn = document.querySelector('#select-action-button'); 
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));
    const selectAllBtn = document.querySelector('#select-all-btn');
    const cardCheckboxs = Array.from(noteSection.getElementsByClassName('note_checkbox_btn'));

    // When a note is deleted check so state can be steady
    openedSelection = deleteId ? 0 : 0;

    // Add event listener to selectActionBtn
    selectActionBtn.addEventListener('click', (e) => {
        // Turn on selection mood for state tracking
        cardSelectionMood = true;
        let once = 0;

        if (openedSelection === 0) {
            trackSelectonMood();
            
            noteCards.forEach(card => {
                const cardCheckbox = card.querySelector('.note_checkbox_btn'); 

                card.classList.add('highlight_note_card');
                cardCheckbox.classList.add('show_note_checkbox_btn');
            });

            // call select behaviour function
            selectBehaviour(noteSection, cardSelectionMood);
            return;
        }
        
        if (openedSelection === 1) {
            trackSelectonMood();

            noteCards.forEach(card => {
                const cardCheckbox = card.querySelector('.note_checkbox_btn'); 

                card.classList.remove('highlight_note_card');
                cardCheckbox.classList.remove('show_note_checkbox_btn');
            });

            console.log('Selection Mood On...', openedSelection);
            return;
        }

    });

    // Reasign the set time out ID later
    let clickedIntervalID;

    // Loop and add event so start selection mood when ot turned on
    noteCards.forEach((card) => {
        // On computers
        card.addEventListener('mousedown', (e) => {    
            let currentTarget = e.currentTarget;
            console.log('from');

            clickedIntervalID = setTimeout((currentTarget) => {
                console.log('here');

                holdToSelectCard(currentTarget, noteSection); // Function to trigger the hold and select functionality
                clickedIntervalID = null; // Return null when timeout is met so edition mood will not be triggered on note
                
            // call the delete note function and pass the note section to select element from the DOM
            deleteNotes(noteSection, openedSelection);
            }, 500, currentTarget);
        });

        card.addEventListener('mouseup', async (e) => { 
            // Clear interval when the time passed not completed
            clearTimeout(clickedIntervalID);
            console.log('Timer cleared');

            // Check to see if a valid timeout ID is passed and selection mood is off then call the edit note function to edit note or log a message if conmtion not met
            openedSelection === 0 && clickedIntervalID ? editNote(noteSection, e) : console.log("clickedIntervalID Returened null");
        });
        
        // For mobile device
        card.addEventListener('touchstart', (e) => {
            // Select current target from event object
            let currentTarget = e.currentTarget;
            
            clickedIntervalID = setTimeout((currentTarget) => {                
                holdToSelectCard(currentTarget); // Function to trigger the hold and select functionality
                clickedIntervalID = null; // Return null when timeout is met so edition mood will not be triggered on note

                // call the delete note function and pass the note section to select element from the DOM
                deleteNotes(noteSection, openedSelection);
            }, 500, currentTarget);
        });

        // For mobile device
        card.addEventListener('touchend', (e) => {    
            // Clear interval when the time passed not completed
            clearTimeout(clickedIntervalID);

            // Check to see if a valid timeout ID is passed and selection mood is off then call the edit note function to edit note or log a message if conmtion not met
            openedSelection === 0 && clickedIntervalID ? editNote(noteSection, e) : console.log("clickedIntervalID Returened null");
        });
    });

    // Call to keek select all note card functon on wait
    selectAllCard(noteSection, noteCards, selectAllBtn);
}

// Function to select all note card
function selectAllCard(noteSection, noteCards, selectAllBtn) {
    // Turn on selection mood for state tracking
    cardSelectionMood = true;
    
    // Check if selection moode is on then add event listner
    cardSelectionMood && selectAllBtn.disabled === false 
        ? selectAllBtn.addEventListener('click', (e) => {
            // Get the tag that triggared the event
            let currentTarget = e.currentTarget;
            noteCards.forEach(el => el.setAttribute('data-is-selected', 'selected'));
            trackSelectonMood(); // Track selectoion mood 

            // call the delete note function and pass the note section to select element from the DOM
            deleteNotes(noteSection, openedSelection);

            // Highlight note card when select mood is on
            noteCards.forEach(card => {
                const cardCheckbox = card.querySelector('.note_checkbox_btn');

                // Toggle class 
                card.classList.toggle('highlight_note_card');
                cardCheckbox.classList.toggle('show_note_checkbox_btn');
                
                handleDeleteNote(noteSection);

                // Check and asign appropraite values
                if (!cardCheckbox.classList.contains('checked')) {
                    cardCheckbox.innerHTML = `${checkboxSVG}`;
                    cardCheckbox.classList.add('checked');
                    currentTarget.setAttribute('data-is-selected', 'selected');  

                    // call the delete note function and pass the note section to select element from the DOM
                    deleteNotes(noteSection, openedSelection);
                } else if (cardCheckbox.classList.contains('checked')) {
                    cardCheckbox.innerHTML = `${unchecBoxkSVG}`;
                    cardCheckbox.classList.remove('checked');
                    currentTarget.removeAttribute('data-is-selected', 'selected');
                }
			});

            // call select behaviour function
            selectBehaviour(noteSection, cardSelectionMood);
        }) : null;
}

// Function to select single card
function selectCard(noteSection, mood) {
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));
    
    // Check if selection moode is on then add event listner
    mood ? noteCards.forEach(card => { card.addEventListener('click', selectAndCheckCardLogic)})
        : noteCards.forEach(card => { card.removeEventListener('click', selectAndCheckCardLogic)});
}

// Celect and disselect note card then add checked to the check button class
const selectAndCheckCardLogic = (e) => {
    let currentTarget = e.currentTarget;    
    const noteSection = currentTarget.parentElement;

    // const noteCards = await Array.from(noteSection.getElementsByClassName('note_card'));
    const cardCheckbox = e.currentTarget.querySelector('.note_checkbox_btn');

    // Check and asign appropraite values
    if (!cardCheckbox.classList.contains('checked')) {
        cardCheckbox.innerHTML = `${checkboxSVG}`;
        cardCheckbox.classList.add('checked');
        currentTarget.setAttribute('data-is-selected', 'selected');  

        // call the delete note function and pass the note section to select element from the DOM
        handleDeleteNote(noteSection);
    } else if (cardCheckbox.classList.contains('checked')) {
        cardCheckbox.innerHTML = `${unchecBoxkSVG}`;
        cardCheckbox.classList.remove('checked');
        currentTarget.removeAttribute('data-is-selected', 'selected');
        // call the delete note function and pass the note section to select element from the DOM
        handleDeleteNote(noteSection);
    }
}

// Functionality when a note card is held for 500ms
const holdToSelectCard = (currentTarget, noteSection) => {
    cardSelectionMood = true; // ON

    // const noteSectionS = currentTarget.parentNode || noteSection;
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));
    const cardCheckboxs = noteCards.map(fiteredCard => fiteredCard.querySelector('.note_checkbox_btn'));

    trackSelectonMood(); // Track selectoion mood 

    // Loop through check button and notes card then add class to hightlight
    cardCheckboxs.forEach(btn => {
        btn.classList.toggle('show_note_checkbox_btn'); // Add class to display to check button
    });

    noteCards.forEach(card => {
        card.classList.toggle('highlight_note_card'); // Add class to highlight all cads
    });

    // Call to add behaviour 
    selectBehaviour(noteSection, cardSelectionMood);
    // Swiced the ID due to rendering issues hop it works
    selectAndCheckCardById(currentTarget.id, currentTarget, noteSection); // Call and pass the id to match function parameter and get current clicked card

}

// Celect and disselect note card then add checked to the check button class
const selectAndCheckCardById = async (id, currentTarget, noteSection) => {
    // const noteCards = await Array.from(noteSection.getElementsByClassName('note_card'));
    const cardCheckbox = currentTarget.querySelector('.note_checkbox_btn');

    // Check and asign appropraite values
    if (!cardCheckbox.classList.contains('checked')) {
        cardCheckbox.innerHTML = `${checkboxSVG}`;
        cardCheckbox.classList.add('checked');
        currentTarget.setAttribute('data-is-selected', 'selected');  

        // call the delete note function and pass the note section to select element from the DOM
        deleteNotes(noteSection);
    } else if (cardCheckbox.classList.contains('checked')) {
        cardCheckbox.innerHTML = `${unchecBoxkSVG}`;
        cardCheckbox.classList.remove('checked');
        currentTarget.removeAttribute('data-is-selected', 'selected');
    }
}

// Select be haviour
function selectBehaviour(noteSection, cardSelectionMood) {
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));
    
    // Select card beavour
    if (openedSelection === 0) {
        noteCards.forEach(card => {
            const cardCheckbox = card.querySelector('.note_checkbox_btn'); 

			// Reset add innerHTML and attributes
            cardCheckbox.innerHTML = `${unchecBoxkSVG}`;
            cardCheckbox.classList.remove('show_note_checkbox_btn');
            cardCheckbox.classList.remove('checked');
            card.removeAttribute('data-is-selected', 'selected');
        });

        cardSelectionMood = false; // OFF
        selectCard(noteSection, cardSelectionMood);

        handleDeleteNote(noteSection);
        console.log('Selection Mood Off...', openedSelection);
    } else if (openedSelection === 1) {
        cardSelectionMood = true; // ON
        selectCard(noteSection, cardSelectionMood);

        handleDeleteNote(noteSection);
        console.log('Selection Mood On...', openedSelection);
    }
}

export default highlightCard;   