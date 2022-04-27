const template = document.createElement('template');
template.innerHTML = /*html*/ `
<div class='w3-container w3-padding-bottom' style='height: calc(100vh - 140px);overflow:auto'>
</div>
`;

export default class Page extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
    }
    static get observedAttributes() { return [] }
    attributeChangedCallback(attribute, oldValue, newValue) {}
    connectedCallback() {}
    disconnectedCallback() {}
}
customElements.define('wc-page', Page);