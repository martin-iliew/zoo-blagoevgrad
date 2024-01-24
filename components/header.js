class ZooHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = this.getAttribute("current") || "";

    this.innerHTML = `
      <div class="trigger-element"></div>
      <header class="header">
        <a href="${this.getBasePath()}index.html" class="logo" aria-label="Зоопарк Благоевград - Начало">
          <img src="${this.getBasePath()}resources/images/logo/HorizontalLogoW.svg" alt="Лого на Зоопарк Благоевград">
        </a>
        <nav class="navbar" aria-label="Главна навигация">
          <ul role="list">
            <li${currentPage === "home" ? ' class="current"' : ""}><a href="${this.getBasePath()}index.html">Начало</a></li>
            <li${currentPage === "location" ? ' class="current"' : ""}><a href="${this.getBasePath()}pages/location.html">География</a></li>
            <li${currentPage === "history" ? ' class="current"' : ""}><a href="${this.getBasePath()}pages/history.html">История</a></li>
            <li${currentPage === "gallery" ? ' class="current"' : ""}><a href="${this.getBasePath()}pages/gallery.html">Галерия</a></li>
            <li${currentPage === "about" ? ' class="current"' : ""}><a href="${this.getBasePath()}pages/about.html">За автора</a></li>
          </ul>
        </nav>
        <zoo-working-hours></zoo-working-hours>
        <button onclick="scrollToBottom()" class="navbar-button filled-button" aria-label="Направи дарение днес">Дари днес</button>
        <button class="menu-button" aria-label="Отвори меню" aria-expanded="false">
          <svg width="174" height="61" viewBox="0 0 174 61" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g id="Lines">
              <path id="Top" d="M89.7449 43.3867C86.1213 42.6188 82.0168 41.7966 80.6239 41.5593C76.3269 40.8277 59.1006 42.1344 55.3849 43.474C53.2339 44.2494 42.3534 45.0999 27.4046 45.6612C6.4355 46.4485 2.70731 46.8232 1.28638 48.2857C-1.00191 50.641 0.220785 54.5443 3.72939 56.0846C7.96181 57.9426 50.6256 58.1649 56.5741 56.36C62.0349 54.703 81.3411 54.3244 88.4001 55.7357C101 58.2548 114.641 58.8664 142.096 58.1435C172.391 57.3457 173.816 57.0824 173.75 52.2975C173.733 51.0442 173.144 49.5726 172.441 49.0271C171.739 48.4816 158.426 47.6875 142.856 47.2625C112.034 46.4212 99.8777 45.5341 89.7449 43.3867Z" />
              <path id="Bottom" d="M108.738 6.94477C100.464 5.36731 85.5185 3.38652 75.5258 2.54329C65.5331 1.70007 55.6271 0.921643 53.5123 0.813587C42.3259 0.24103 9.76847 7.14476 2.37043 11.6581C-0.120892 13.1781 -0.723937 16.9069 1.20087 18.8902C3.53722 21.2977 21.6047 20.4399 40.4416 17.0271C50.1423 15.2696 49.2689 15.2696 78.8459 17.0279C91.2613 17.766 102.493 18.9326 105.082 19.7532C108.468 20.8265 116.917 21.2734 138.624 21.527C164.129 21.8248 167.96 21.6625 170.287 20.1868C172.248 18.9439 172.864 17.8021 172.662 15.7882C172.225 11.4244 168.087 10.5986 144.567 10.1814C126.843 9.86705 121.567 9.39052 108.738 6.94477Z" />
            </g>
          </svg>
        </button>
      </header>
    `;
  }

  getBasePath() {
    return window.location.pathname.includes("/pages/") ? "../" : "";
  }
}

customElements.define("zoo-header", ZooHeader);
