class ZooWorkingHours extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="working-time">
        <h2>Работно време</h2>
        <div class="working-time-grid">
          <div class="clock-icon" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2051_37812)">
                <circle cx="8" cy="8.5" r="7.25" stroke="currentColor" stroke-width="1.5"></circle>
                <line x1="8.25" y1="10.5" x2="8.25" y2="4.5" stroke="currentColor" stroke-width="1.5"></line>
                <path d="M7.8 9.8L10.5 11" stroke="currentColor" stroke-width="1.5"></path>
              </g>
              <defs>
                <clipPath id="clip0_2051_37812">
                  <rect width="16" height="16" fill="currentColor" transform="translate(0 0.5)"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="working-time-hours">
            <time datetime="09:00">09:00</time> – <time datetime="20:00">20:00</time>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('zoo-working-hours', ZooWorkingHours);
