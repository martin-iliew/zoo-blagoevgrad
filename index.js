function toggleHeaderClass(entries) {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo img');
    if (entries[0].isIntersecting) {
        header.classList.remove('active');
        logo.src = '/resources/images/logo/HorizontalLogoW.svg';
    }
    else {
        header.classList.add('active');
        logo.src = '/resources/images/logo/HorizontalLogo.svg';
    }
}

function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

const observer = new IntersectionObserver(debounce(toggleHeaderClass, 100), { threshold: 0.5 });
observer.observe(document.querySelector('.trigger-element'));

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}