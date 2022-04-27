const template = document.createElement('template');
template.innerHTML = /*html*/ `
<p>Products</p>
`;

export default class Products extends HTMLElement {
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
customElements.define('wc-products', Products);