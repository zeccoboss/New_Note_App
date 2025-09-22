import SetElementAttributes from "./SetElementAttributes.js";

class SetInnerHTML extends SetElementAttributes {
    constructor(element) {
        super(element)
        this.element = element;
    }

    setInnerText (text) {
        this.element.innerText = text;
    }

    setInnerHTML(innerHTML) {
        this.element.innerHTML = innerHTML;
    }
}

export default SetInnerHTML;