class ZooFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="fixed-footer grid-container">
        <div class="footer-donation container">
          <section class="donations">
            <div class="container-donation">
              <div class="content">
                <h2 style="font-family: var(--ff-main);">НАПРАВЕТЕ МЕСЕЧНО ДАРЕНИЕ...</h2>
                <p>Подкрепете нашия зоопарк, като дарявате всеки месец.</p>
              </div>
              <zoo-donation-form></zoo-donation-form>
            </div>
          </section>
        </div>
        <div class="footer-bottom">
          <p>Copyright &copy; 2024; Developed by <span class="developer">Martin Iliev</span></p>
        </div>
      </footer>
    `;
  }
}

customElements.define('zoo-footer', ZooFooter);
