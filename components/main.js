import Pagebar from "./pagebar.js";
import Page from "./page.js";
import Footer from "./footer.js";
import { routes } from "../data/routes.js";

const template = document.createElement('template');
template.innerHTML = /*html*/ `
<div class='w3-main' style='margin-left:300px;'>
    <wc-pagebar></wc-pagebar>
    <wc-page></wc-page>
    <wc-footer></wc-footer>
</div>
`;

export default class Main extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
        this.page = this.querySelector('wc-page div');
        this.pagebar = this.querySelector('wc-pagebar');
        this.routes = routes;
        this.route = routes[0];
    }
    static get observedAttributes() { return ['page'] }
    async attributeChangedCallback(attribute, oldValue, newValue) {
        if (attribute === 'page') {
            this.setPage(this.routes.find(x => x.id === newValue) || this.route);
        }
    }
    connectedCallback() {
        this.setPage(this.route);
    }
    disconnectedCallback() {}
    setPage({ name, icon, view }) {
        this.pagebar.setAttribute('title', name);
        this.pagebar.setAttribute('icon', icon);
        this.page.innerHTML = '';
        this.page.appendChild(new view());
    }
}
customElements.define('wc-main', Main);