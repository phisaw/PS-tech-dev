class ProductBoxContainer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
        `
        <ul class="command_boxes">
        <li><a href="">Ctrl+L</a></li>
        <li><a href="">Ctrl+C</a></li>
        <li><a href="">Ctrl+V</a></li>
        <li><a href="">Ctrl+?</a></li>
        <li><a href="">Ctrl+?</a></li>
        <li><a href="">Ctrl+?</a></li>
        </ul>
        `;
    
    }
}

window.customElements.define('product-box-container',ProductBoxContainer);
