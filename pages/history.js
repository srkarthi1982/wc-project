const template = document.createElement('template');
template.innerHTML = /*html*/ `
<p>History</p>
`;

export default class History extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(attribute, oldValue, newValue) {}
    connectedCallback() {}
    disconnectedCallback() {}
}
customElements.define('wc-history', History);