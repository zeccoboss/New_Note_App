import setElementAttributes from "./setElementAttributes.js";

class SetInnerHTML extends setElementAttributes {
    constructor(element, innerText, innerHTML) {
        super(element)
        this.element = element;
        this.innerText = innerText;
        this.innerHTML = innerHTML;
    }

    setInnerText (text) {
        this.element.innerText = text;
    }

    setInnerHTML(innerHTML) {
        this.element.innerHTML = innerHTML;
    }
}

export default SetInnerHTML;