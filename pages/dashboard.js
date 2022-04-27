const template = document.createElement('template');
template.innerHTML = /*html*/ `
<p>Dashboard</p>
`;

export default class Dashboard extends HTMLElement {
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
customElements.define('wc-dashboard', Dashboard);