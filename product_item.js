class ProductItem extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`<li>
        <a href="${this.getAttribute('url_location')}">
          <img class="p_logo" src="${this.getAttribute('img_location')}" />
          <p>${this.getAttribute('product')}</p>
          <img class="p_arrow" src="./img/arrow.png"
        /></a>
      </li>`;
    
    }
}

window.customElements.define('product-item',ProductItem);