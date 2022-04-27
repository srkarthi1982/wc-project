import Menu from "../components/menu.js";
import Userbar from "../components/userbar.js";
const template = document.createElement('template');
template.innerHTML = /*html*/ `
<nav class='w3-sidebar w3-collapse w3-white w3-animate-left' style='width:300px;z-index:4' id='mySidebar'>
    <wc-userbar></wc-userbar>
    <hr style='margin:0'>
    <wc-menu></wc-menu>
</nav>
`;

export default class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
        this.sidebar = this.querySelector("#mySidebar");
        this.closeMenu = this.querySelector('#closeMenu');
        this.overlayBg = this.nextElementSibling;
    }
    static get observedAttributes() {
        return ['page'];
    }
    attributeChangedCallback(attribute, oldValue, newValue) {
        if (attribute === 'page') {
            this.querySelector('wc-menu').setAttribute('page', newValue);
        }
    }
    connectedCallback() {
        this.addEventListener('menuclick', e => this.close());
    }
    disconnectedCallback() {
        this.addEventListener('menuclick', e => this.close());
    }
    open() {
        const value = this.sidebar.style.display === 'block' ? 'none' : 'block';
        this.display(value);
    }
    close() {
        this.display('none');
    }
    display(value) {
        this.sidebar.style.display = value;
        this.overlayBg.style.display = value;
    }
}
customElements.define('wc-sidebar', Sidebar);