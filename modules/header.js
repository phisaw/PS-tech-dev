class HeaderBox extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
        <header>
        <div class="head_links">
          <h1>PS Tech Development</h1>
        </div>
        <div></div>
  
        <nav class="links">
          <ul class="ul_links">
            <li><a href="/">Home</a></li>
            <li><a href="/">about</a></li>
          </ul>
        </nav>
      </header>`;
    
    }
}

window.customElements.define('header-box',HeaderBox);