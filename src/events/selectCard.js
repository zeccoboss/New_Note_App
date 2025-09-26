// Import SVG's
import {checkboxSVG, unchecBoxkSVG } from "../assets/svg/svg-icons.js";
import HighlightOptionsList from "../fragments/HighlightOptionsList.js";
import editNote from "./editNote.js";

// Declare global variabls for state tracking
let cardSelectionMood = false;
let openedSelection = 0;
let selectionCount = 0;

// Track selectoion mood function
const trackSelectonMood = () => { openedSelection < 1 ? openedSelection++ : openedSelection = 0; }// Add 1 if value is 0

// Highligt all notes
const highlightCard = async (noteSection) => {
    // Select element from DOM
    const selectActionBtn = document.querySelector('#select-action-button'); 
    const noteCards = Array.from(noteSection.getElementsByClassName('note_card'));
    const selectAllBtn = document.querySelector('#select-all-btn');

    // Add event listener to selectActionBtn
    selectActionBtn.addEventListener('click', (e) => {
        // Turn on selection mood for state tracking
        cardSelectionMood = true;
        trackSelectonMood(); // Track selectoion mood 

        // call select behaviour function
        selectBehaviour(noteSection, cardSelectionMood);

        // Ceck selection mood if on loop troug cards and add class to igtligt
        if (cardSelectionMood) {
            noteCards.forEach(noteCard => {
                const cardCheckbox = noteCard.querySelector('.note_checkbox_btn');
                noteCard.classList.add('highlight_note_card');
                cardCheckbox.classList.add('show_note_checkbox_btn');
            });

            selectActionBtn.innerHTML = `Cancle`;
        } else {
            selectActionBtn.innerHTML = 'Select';
        }
    });

    // Reasign the set time out ID later
    let clickedIntervalID;

    // Loop and add event so start selection mood when ot turned on
    noteCards.forEach((card) => {
        // On computers
        card.addEventListener('mousedown', (e) => {    
            let currentTarget = e.currentTarget;

            clickedIntervalID = setTimeout((currentTarget) => {
               holdToSelectCard(currentTarget); //
            }, 500, currentTarget);
        });

        card.addEventListener('mouseup', (e) => {    
            // Clear interval when the time passed not completed
            clearTimeout(clickedIntervalID);

            // When notes note highlighted edit note instead
            editNote(noteSection);
        });
        
        // For mobile device
        card.addEventListener('touchstart', (e) => {    
            let currentTarget = e.currentTarget;

            clickedIntervalID = setTimeout((currentTarget, e) => {
               holdToSelectCard(currentTarget); //
            }, 500, currentTarget); 
        });

        // For mobile device
        card.addEventListener('touchend', (e) => {    
            // Clear interval when the time passed not completed
            clearTimeout(clickedIntervalID);

            // When notes note highlighted edit note instead
            editNote(noteSection);
        });
    });

    // Call to keek select all note card functon on wait
    selectAllCard(noteSection, noteCards, selectAllBtn);

    // Call to append the hoight list option to The DOM
    HighlightOptionsList(noteSection);
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
            noteCards.forEach(el => currentTarget.removeAttribute('is-selected', 'selected'));
            trackSelectonMood(); // Track selectoion mood 

            // Highlight note card when select mood is on
            noteCards.forEach(card => {
                const cardCheckbox = card.querySelector('.note_checkbox_btn');

                // Toggle class 
                card.classList.toggle('highlight_note_card');
                cardCheckbox.classList.toggle('show_note_checkbox_btn');
                
                // Check and asign appropraite values
                if (!cardCheckbox.classList.contains('checked')) {
                    cardCheckbox.innerHTML = `${checkboxSVG}`;
                    cardCheckbox.classList.add('checked');
                    currentTarget.setAttribute('is-selected', 'selected');  
                } else if (cardCheckbox.classList.contains('checked')) {
                    cardCheckbox.innerHTML = `${unchecBoxkSVG}`;
                    cardCheckbox.classList.remove('checked');
                    currentTarget.removeAttribute('is-selected', 'selected');
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

    // const noteCards = await Array.from(noteSection.getElementsByClassName('note_card'));
    const cardCheckbox = e.currentTarget.querySelector('.note_checkbox_btn');

    // Check and asign appropraite values
    if (!cardCheckbox.classList.contains('checked')) {
        cardCheckbox.innerHTML = `${checkboxSVG}`;
        cardCheckbox.classList.add('checked');
        currentTarget.setAttribute('is-selected', 'selected');  
    } else if (cardCheckbox.classList.contains('checked')) {
        cardCheckbox.innerHTML = `${unchecBoxkSVG}`;
        cardCheckbox.classList.remove('checked');
        currentTarget.removeAttribute('is-selected', 'selected');
    }
}

// 
const holdToSelectCard = (currentTarget) => {
    cardSelectionMood = true; // ON
                    
    const noteSection = currentTarget.parentNode;
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
    selectAndCheckCardById(currentTarget.id); // Call and pass the id to match function parameter and get current clicked card
}

// Celect and disselect note card then add checked to the check button class
const selectAndCheckCardById = async (id) => {
    try {
        let currentTarget = document.getElementById(`${id}`);    

        // const noteCards = await Array.from(noteSection.getElementsByClassName('note_card'));
        const cardCheckbox = currentTarget.querySelector('.note_checkbox_btn');

        // Check and asign appropraite values
        if (!cardCheckbox.classList.contains('checked')) {
            cardCheckbox.innerHTML = `${checkboxSVG}`;
            cardCheckbox.classList.add('checked');
            currentTarget.setAttribute('is-selected', 'selected');  
        } else if (cardCheckbox.classList.contains('checked')) {
            cardCheckbox.innerHTML = `${unchecBoxkSVG}`;
            cardCheckbox.classList.remove('checked');
            currentTarget.removeAttribute('is-selected', 'selected');
        }
    } catch (error) {
        console.warn(error);
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
            card.removeAttribute('is-selected', 'selected');
        });

        cardSelectionMood = false; // OFF
        selectCard(noteSection, cardSelectionMood);
        console.log('Selection Mood Off...', openedSelection);
    } else if (openedSelection === 1) {
        cardSelectionMood = true; // ON
        selectCard(noteSection, cardSelectionMood);
        console.log('Selection Mood On...', openedSelection);
    }
}
export default highlightCard;