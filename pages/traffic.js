const template = document.createElement('template');
template.innerHTML = /*html*/ `
<p>Traffic</p>
`;

export default class Traffic extends HTMLElement {
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
customElements.define('wc-traffic', Traffic);