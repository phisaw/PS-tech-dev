class HeaderBox extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`

        <header>
        <div class="head_links">
        <a href="/">
          <h1>PS Tech Development</h1>
        </a>
        </div>
        <div></div>
  
        <nav class="links">
          <ul class="ul_links">
            <li><a class="link" href="/">Home</a></li>
            <li><a class="link" href="/about.html">about</a></li>
          </ul>
        </nav>
      </header>
`;
    
    }
}

window.customElements.define('header-box',HeaderBox);