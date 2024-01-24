class ZooDonationForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form class="card-donation" onsubmit="return handleDonation(event)">
        <label for="donation-amount">
          <h3>Изберете сума</h3>
        </label>
        <input 
          type="number" 
          id="donation-amount"
          name="amount"
          placeholder="Въведете сума" 
          class="donation-textbox" 
          min="1" 
          max="10000" 
          step="1" 
          value="10"
          required
          aria-describedby="donation-error"
        >
        <span id="donation-error" class="error-message" role="alert" aria-live="polite"></span>
        <button type="submit" class="donation-button filled-button">Дари</button>
      </form>
    `;
  }
}

customElements.define('zoo-donation-form', ZooDonationForm);
