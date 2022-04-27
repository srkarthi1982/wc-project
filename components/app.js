import Header from "./header.js";
import Sidebar from "./sidebar.js";
import Main from "./main.js";

const template = document.createElement('template');
template.innerHTML = /*html*/ `
    <wc-header></wc-header>
    <wc-sidebar></wc-sidebar>
    <div class="w3-overlay w3-hide-large w3-animate-opacity"></div>
    <wc-main></wc-main>
`;

class App extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
        this.sidebar = this.querySelector('wc-sidebar');
        this.overflow = this.sidebar.nextElementSibling;
        this.main = this.querySelector('wc-main');
        this.sidebar.setAttribute('page', location.hash);
    }
    static get observedAttributes() { return [] }
    attributeChangedCallback(attribute, oldValue, newValue) {}
    connectedCallback() {
        window.addEventListener('hashchange', () => this.onHashChange());
        this.overflow.addEventListener('click', () => this.sidebar.close());
    }
    disconnectedCallback() {
        window.removeEventListener('hashchange', () => this.onHashChange());
        this.overflow.removeEventListener('click', () => this.sidebar.close());
    }
    onHashChange() {
        const hash = location.hash;
        this.main.setAttribute('page', hash.replace('#/', ''));
        this.sidebar.setAttribute('page', hash);
    }
}
customElements.define('wc-app', App);