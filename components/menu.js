import { routes } from "../data/routes.js";
const template = document.createElement('template');
template.innerHTML = /*html*/ `
<div class='w3-bar-block'></div>
`;
export default class Menu extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
        this.createMenu();
    }
    static get observedAttributes() {
        return ['page'];
    }
    attributeChangedCallback(attribute, oldValue, newValue) {
        if (attribute === 'page') {
            this.querySelectorAll('a').forEach(x => x.classList.remove('w3-blue'));
            const route = routes.find(x => x.id === newValue.replace('#/', ''));
            if (route)
                this.querySelector(`[href='${newValue}']`).classList.add('w3-blue');
            else
                this.querySelector(`[href='#/dashboard']`).classList.add('w3-blue');
        }
    }
    connectedCallback() {
        this.querySelectorAll('a').forEach(x => x.addEventListener('click', e => this.onMenuClicked(e)));
    }
    disconnectedCallback() {
        this.querySelectorAll('a').forEach(x => x.removeEventListener('click', e => this.onMenuClicked(e)));
    }
    createMenu() {
        const fragment = document.createDocumentFragment();
        routes.forEach(x => {
            const anchor = document.createElement('a');
            anchor.href = `#/${x.id}`;
            anchor.classList.add('w3-bar-item', 'w3-button', 'w3-padding');
            anchor.innerHTML = `<i class='fa ${x.icon}'></i> &nbsp;${x.name}`;
            fragment.appendChild(anchor);
        });
        this.querySelector('div').appendChild(fragment);
    }
    onMenuClicked(e) {
        this.querySelectorAll('a').forEach(x => x.classList.remove('w3-blue'));
        e.target.classList.add('w3-blue');
        this.dispatchEvent(new CustomEvent('menuclick', { bubbles: true, cancelable: true, composed: false }));
    }
}
customElements.define('wc-menu', Menu);