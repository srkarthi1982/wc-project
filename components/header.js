const template = document.createElement('template');
template.innerHTML = /*html*/ `
<div class='w3-bar w3-deep-orange w3-large'>
    <button id='headerBar' class='w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey'><i class='fa fa-bars'></i></button>
    <span class='w3-bar-item'><img src="images/logo.png" style="width:30px"><strong>Sri Lakshmi Tailors</strong></span>
    <div class='w3-dropdown-hover w3-right'>
        <button class='w3-button'><img src='https://www.w3schools.com/w3images/avatar2.png' class='w3-circle' style='width:30px'></button>
        <div class='w3-dropdown-content w3-bar-block w3-card-4' style='right:0'>
            <a class='w3-bar-item w3-button'><i class='fa fa-user' aria-hidden='true'></i> Profile</a>
            <a class='w3-bar-item w3-button'><i class='fa fa-cog' aria-hidden='true'></i> Preferences</a>
            <a class='w3-bar-item w3-button'><i class='fa fa-sign-out' aria-hidden='true'></i> Logout</a>
        </div>
    </div>
</div>
`;

export default class Header extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
        this.sidebar = this.nextElementSibling;
        this.headerBar = this.querySelector('#headerBar');
    }
    static get observedAttributes() { return [] }
    attributeChangedCallback(attribute, oldValue, newValue) {}
    connectedCallback() {
        this.headerBar.addEventListener('click', () => this.sidebar.open());
    }
    disconnectedCallback() {
        this.headerBar.removeEventListener('click', () => this.sidebar.open());
    }
}
customElements.define('wc-header', Header);