const initializeListeners = () => {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = mobileMenu.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  hamburger.addEventListener('click', (e) => {
    mobileMenu.classList.add('active');
    e.stopPropagation();
  });

  document.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
};

window.addEventListener('load', () => {
  initializeListeners();
});
