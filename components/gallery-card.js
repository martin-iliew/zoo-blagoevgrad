class ZooGalleryCard extends HTMLElement {
  connectedCallback() {
    const imageSrc = this.getAttribute('image');
    const imageAlt = this.getAttribute('alt');
    const title = this.getAttribute('title');
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
    
    this.innerHTML = `
      <div class="image-box" role="button" tabindex="0" aria-label="Покажи снимка на ${title}" onclick="openLightbox('${basePath}${imageSrc}', '${imageAlt}')" onkeypress="if(event.key==='Enter')openLightbox('${basePath}${imageSrc}', '${imageAlt}')">
        <img src="${basePath}${imageSrc}" alt="${imageAlt}" loading="lazy">
        <h3>${title}</h3>
      </div>
    `;
  }
}

customElements.define('zoo-gallery-card', ZooGalleryCard);
