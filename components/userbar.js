const template = document.createElement('template');
template.innerHTML = /*html*/ `
<div class='w3-container w3-row w3-margin-top'>
    <div class='w3-col s4'>
        <img src='https://www.w3schools.com/w3images/avatar2.png' class='w3-circle w3-margin-right' style='width:46px'>
    </div>
    <div class='w3-col s8 w3-bar'>
        <span>Welcome, <strong>Lakshman</strong></span><br>
        <span class='w3-bar-item w3-button'><i class='fa fa-envelope'></i></span>
        <span class='w3-bar-item w3-button'><i class='fa fa-user'></i></span>
        <span class='w3-bar-item w3-button'><i class='fa fa-cog'></i></span>
    </div>
</div>
`;

export default class Userbar extends HTMLElement {
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
customElements.define('wc-userbar', Userbar);