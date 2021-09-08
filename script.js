const initializeListeners = () => {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = mobileMenu.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });
};

window.addEventListener('load', () => {
  initializeListeners();
});
