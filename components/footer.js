const template = document.createElement('template');
template.innerHTML = /*html*/ `
   <footer class='w3-container w3-bottom w3-grey'>
       <p>© 2022 Sri Lakshmi Tailors LLC</p>
   </footer>
`;

export default class Footer extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
    }
    static get observedAttributes() { return [] }
    attributeChangedCallback(attribute, oldValue, newValue) {}
    connectedCallback() {}
    disconnectedCallback() {}
}
customElements.define('wc-footer', Footer);