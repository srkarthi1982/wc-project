const template = document.createElement('template');
template.innerHTML = /*html*/ `
<header class='w3-bar w3-grey'>
    <div class='w3-dropdown-hover'>
        <button class='w3-button'>File <i class='fa fa-caret-down'></i></button>
        <div class='w3-dropdown-content w3-bar-block w3-card-4'>
            <a class='w3-bar-item w3-button'><i class='fa fa-print' aria-hidden='true'></i> Print</a>
            <a class='w3-bar-item w3-button'><i class='fa fa-file-excel-o' aria-hidden='true'></i> Export</a>
        </div>
    </div>
    <div class='w3-dropdown-hover w3-active'>
        <button class='w3-button'>Action <i class='fa fa-caret-down'></i></button>
        <div class='w3-dropdown-content w3-bar-block w3-card-4'>
            <a class='w3-bar-item w3-button'><i class='fa fa-tasks' aria-hidden='true'></i> Manage</a>
            <a class='w3-bar-item w3-button'><i class='fa fa-info-circle' aria-hidden='true'></i> Detail View</a>
        </div>
    </div>
    <div class='w3-bar-item w3-right'><i id='headingIcon' class='fa'></i> <b id='heading'></b></div>
</header>
`;
export default class Pagebar extends HTMLElement {
    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
        this.heading = this.querySelector('#heading');
        this.headingIcon = this.querySelector('#headingIcon');
    }
    static get observedAttributes() { return ['title', 'icon'] }
    attributeChangedCallback(attribute, oldValue, newValue) {
        if (attribute === 'title') {
            this.heading.textContent = newValue;
        }
        if (attribute === 'icon') {
            this.headingIcon.classList.remove(oldValue);
            this.headingIcon.classList.add(newValue);
        }
    }
    connectedCallback() {}
    disconnectedCallback() {}
}
customElements.define('wc-pagebar', Pagebar);