class FooterBox extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
        <div class="footer">
        <footer>
          <ul class="footer_links">
            <li><a href="/">Github</a></li>
            <li><a href="/">Youtube</a></li>
          </ul>
          <h4>Active development since 2022 ©</h4>
        </footer>
      </div>
      `;
    
    }
}

window.customElements.define('footer-box',FooterBox);