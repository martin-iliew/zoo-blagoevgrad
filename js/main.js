
function toggleHeaderClass(entries) {
  const header = document.querySelector('.header');
  const logo = header?.querySelector('.logo img');
  
  if (!header) return;
  
  if (entries[0].isIntersecting) {
    header.classList.remove('active');
    if (logo) {
      const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
      logo.src = `${basePath}resources/images/logo/HorizontalLogoW.svg`;
    }
  } else {
    header.classList.add('active');
    if (logo) {
      const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
      logo.src = `${basePath}resources/images/logo/HorizontalLogo.svg`;
    }
  }
}


function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}


document.addEventListener('DOMContentLoaded', () => {
  const triggerElement = document.querySelector('.trigger-element');
  if (triggerElement) {
    const observer = new IntersectionObserver(
      debounce(toggleHeaderClass, 100),
      { threshold: 0.5 }
    );
    observer.observe(triggerElement);
  }
});


function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}


function handleDonation(event) {
  event.preventDefault();
  
  const form = event.target;
  const input = form.querySelector('#donation-amount');
  const errorSpan = form.querySelector('#donation-error');
  const amount = parseFloat(input.value);
  

  errorSpan.textContent = '';
  input.classList.remove('error');
  

  if (isNaN(amount) || amount < 1) {
    errorSpan.textContent = 'Моля, въведете сума минимум 1 лв.';
    input.classList.add('error');
    input.focus();
    return false;
  }
  
  if (amount > 10000) {
    errorSpan.textContent = 'Максималната сума е 10,000 лв.';
    input.classList.add('error');
    input.focus();
    return false;
  }
  

  showDonationConfirmation(amount);
  return false;
}

function showDonationConfirmation(amount) {
  const message = `Благодарим ви за желанието да дарите ${amount.toFixed(2)} лв.!\\n\\nТова е демонстрационен формуляр. За реално дарение, моля посетете зоопарка.`;
  alert(message);
}


let currentLightboxImage = null;

function openLightbox(imageSrc, imageAlt) {

  let lightbox = document.getElementById('lightbox');
  
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Увеличена снимка');
    
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Затвори" onclick="closeLightbox()">&times;</button>
        <img src="" alt="" class="lightbox-image">
      </div>
    `;
    
    document.body.appendChild(lightbox);
    

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
  
  const lightboxImg = lightbox.querySelector('.lightbox-image');
  lightboxImg.src = imageSrc;
  lightboxImg.alt = imageAlt;
  currentLightboxImage = imageSrc;
  

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  

  setTimeout(() => {
    lightbox.querySelector('.lightbox-close').focus();
  }, 100);
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    currentLightboxImage = null;
  }
}


function toggleMobileMenu() {
  const navbar = document.querySelector('.navbar');
  const menuButton = document.querySelector('.menu-button');
  
  if (navbar && menuButton) {
    navbar.classList.toggle('active');
    const isExpanded = navbar.classList.contains('active');
    menuButton.setAttribute('aria-expanded', isExpanded);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMobileMenu);
  }
});


if ('IntersectionObserver' in window) {
  document.addEventListener('DOMContentLoaded', () => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
