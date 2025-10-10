import SetInnerHTML from "./SetInnerHTML.js";

class CreateElement extends SetInnerHTML {
    constructor(elementName, innerText, innerHTML) {
        const element = document.createElement(`${elementName}`);
        super(element);
        this.element = element;
    }
    
    getElement() {
        return this.element;
    }

    setType(type) {
        this.element.setAttribute('type', type);
    }

    disableElement(value) {
        this.element.disabled = value;
    }
}

export default CreateElement;