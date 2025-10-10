import CreateElement from "../utils/CreateElement.js";

const Modal = ({ modalMessage, modalClass, modalId }, section, overLayClass) => {
    // Create the required element
    const overLay = new CreateElement('section');
    let modal = new CreateElement('div');
    let modalMessageParagraph = new CreateElement('p');
    let modalBtnContainer = new CreateElement('div');
    let modalAcceptBtn = new CreateElement('button');
    let modalCancleBtn = new CreateElement('button');
    
    // Get element from DOM
    const main = section.parentElement || document.querySelector('main');

    // Set innerHTML
    modalMessageParagraph.setInnerHTML(modalMessage);
    modalAcceptBtn.setInnerHTML('Confirm');
    modalCancleBtn.setInnerHTML('Cancle');

    // Set attributes
    overLay.setId('overlay');
    overLay.addClass('overlay', overLayClass);
    modal.setId('modal');
    modal.addClass('modal');
    modalMessageParagraph.setId('modal-message');
    modalMessageParagraph.addClass('modal_message');
    modalBtnContainer.setId('modal-btn-ontainer');
    modalBtnContainer.addClass('modal_btn_ontainer');
    modalAcceptBtn.setId('modal-accept-btn');
    modalAcceptBtn.addClass('modal_accept_btn', 'modal_btn');
    modalCancleBtn.setId('modal-cancle-btn');
    modalCancleBtn.addClass('modal_cancle_btn', 'modal_btn');

    // Get the created element 
    let overlay = overLay.getElement();
    let acceptBtn = modalAcceptBtn.getElement();
    let cancleBtn = modalCancleBtn.getElement();

    // Append modal buttons to button container
    modalBtnContainer.getElement().append(
        cancleBtn,
        acceptBtn
    );

    // Append children to modal
    modal.getElement().append(
        modalMessageParagraph.getElement(),
        modalBtnContainer.getElement()
    );

    // Add modal to the overlay
    overlay.appendChild(modal.getElement()); 
    
    // Add overlay to DOM
    main.appendChild(overlay);
    
    // Return the three element so this funtion dosen't get called more than one time when trying to access the elements in overlay
    return { overlay, acceptBtn, cancleBtn };
}

export default Modal;